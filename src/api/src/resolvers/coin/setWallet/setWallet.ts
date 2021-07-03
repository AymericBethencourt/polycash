import { plainToClass } from 'class-transformer'
//import { validateOrReject } from 'class-validator'
import { Context, Next } from 'koa'
//import { firstError } from '../../../helpers/firstError'
import axios from 'axios'

import { SetWalletInputs, SetWalletOutputs } from '../../../shared/coin/SetWallet'
import { authenticate } from '../../user/helpers/authenticate'
import { User } from '../../../shared/user/User'
import { Coin } from '../../../shared/coin/Coin'
import { ResponseError } from '../../../shared/mongo/ResponseError'

export const setWallet = async (ctx: Context, next: Next): Promise<void> => {
  console.log(ctx.request.body)
  const setWalletArgs = plainToClass(SetWalletInputs, ctx.request.body, { excludeExtraneousValues: true })
  //await validateOrReject(setWalletArgs, { forbidUnknownValues: true }).catch(firstError)
  let { wallet } = setWalletArgs

  const user: User = await authenticate(ctx)
  console.log(wallet)

  try {
    await axios({
      method: 'put',
      url: `http://46.101.149.33:8081/users/${user.username}$polycash.net`,
      headers: {
        'PayID-API-Version': '2020-08-25',
        'Content-Type': 'application/json',
      },
      data: {
        payId: `${user.username}$polycash.net`,
        addresses: wallet
          .filter((coin: Coin) => coin.ticker && coin.network && coin.address)
          .map((coin: Coin) => {
            return {
              paymentNetwork: coin.ticker.replace('XRPL', 'XRP').replace('XRP', 'XRPL'),
              environment: coin.network,
              addressDetailsType: 'CryptoAddressDetails',
              addressDetails: { address: coin.address },
            }
          }),
      },
    })
  } catch (e) {
    throw new ResponseError(401, e)
  }

  const response: SetWalletOutputs = {}

  ctx.status = 200
  ctx.body = response

  await next()
}
