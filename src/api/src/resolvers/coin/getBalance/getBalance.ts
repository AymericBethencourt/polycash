import { plainToClass } from 'class-transformer'
import { validateOrReject } from 'class-validator'
import { Context, Next } from 'koa'
import { firstError } from '../../../helpers/firstError'

import { authenticate } from '../../user/helpers/authenticate'
import axios from 'axios'
import { GetBalanceInputs, GetBalanceOutputs } from '../../../shared/coin/GetBalance'
import { ResponseError } from '../../../shared/mongo/ResponseError'

export const getBalance = async (ctx: Context, next: Next): Promise<void> => {
  const getBalanceArgs = plainToClass(GetBalanceInputs, ctx.request.body, { excludeExtraneousValues: true })
  await validateOrReject(getBalanceArgs, { forbidUnknownValues: true }).catch(firstError)
  let { ticker, network, address } = getBalanceArgs

  ticker = ticker.toLowerCase()
  network = network.toLowerCase()

  await authenticate(ctx)
  // const balance = (await xrpClient.getBalance(wallet.getAddress())).toJSNumber()
  console.log(ticker, network, address)

  let resp: any;
  let resp2: any;
  try {
    resp = await axios({
      method: 'get',
      url: `https://api.cryptoapis.io/v1/bc/${ticker}/${network}/address/${address}`,
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.CRYPTOAPIS_KEY,
      },
    })

    resp2 = await axios({
      method: 'get',
      url: `https://min-api.cryptocompare.com/data/price?fsym=${ticker}&tsyms=USD`,
      headers: {
        'Content-Type': 'application/json',
        'authorization': process.env.CRYPTOCOMPARE_KEY,
      },
    })
  } catch (e) {
    throw new ResponseError(401, e)
  }

  if(!(resp && resp.data && resp.data.payload && resp.data.payload.balance)) throw new ResponseError(401, `No balance found for ${ticker}`)

  let balanceCoin = parseFloat(resp.data.payload.balance);
  if(resp.data.payload.balance.value) balanceCoin = parseFloat(resp.data.payload.balance.value)

  let balanceUsd = 0
  if(resp2 && resp2.data && resp2.data.USD) {
    balanceUsd = balanceCoin * parseFloat(resp2.data.USD)
  }

  console.log(balanceCoin, balanceUsd)

  const response: GetBalanceOutputs = { balanceCoin, balanceUsd }

  ctx.status = 200
  ctx.body = response

  await next()
}
