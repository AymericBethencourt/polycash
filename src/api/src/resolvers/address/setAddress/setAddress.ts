import { plainToClass } from 'class-transformer'
import { Context, Next } from 'koa'

const puppeteer = require('puppeteer')

import { SetAddressInputs, SetAddressOutputs } from '../../../shared/address/SetAddress'
// import { validateOrReject } from 'class-validator'
// import { firstError } from '../../../helpers/firstError'
import { Address, AddressModel } from '../../../shared/address/Address'

export const setAddress = async (ctx: Context, next: Next): Promise<void> => {
  console.log(ctx.request.body)
  const setAddressArgs = plainToClass(SetAddressInputs, ctx.request.body, { excludeExtraneousValues: true })
  // await validateOrReject(setAddressArgs, { forbidUnknownValues: true }).catch(firstError)
  let { username, url } = setAddressArgs
  console.log(username)

  puppeteer.connect({ browserWSEndpoint: `wss://chrome.browserless.io?token=${process.env.BROWSERLESS}` })

  let address
  let browser = null
  try {
    browser = await puppeteer.launch({
      headless: true,
      executablePath: process.env.CHROME_BIN || undefined,
      args: ['--no-sandbox', '--headless', '--disable-gpu', '--disable-dev-shm-usage'],
    }) //{ headless: true }
    const page = await browser.newPage()
    page.setUserAgent(
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4182.0 Safari/537.36',
    )
    await page.goto(url, { waitUntil: 'networkidle2' })
    await page.waitForSelector('article')

    // const result = await page.$$('article div[lang] span')
    // console.log(result.textContent)

    const tweets = await page.evaluate(() =>
      // @ts-ignore
      Array.from(document.querySelectorAll('article div[lang] span'), (element) => element.textContent),
    )
    console.log(tweets)
    if(tweets && tweets[0]) address = tweets[0];

  } catch (error) {
    throw error
  } finally {
    if (browser) {
      browser.close()
    }
  }

  console.log(address)
  if (address) await AddressModel.create({ username, address } as Address)

  const response: SetAddressOutputs = {}

  ctx.status = 200
  ctx.body = response

  await next()
}
