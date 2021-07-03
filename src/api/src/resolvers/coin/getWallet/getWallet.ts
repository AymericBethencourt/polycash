import axios from 'axios'
import { Context, Next } from 'koa'
import { v4 as uuidv4 } from 'uuid'

// import { Address } from '../../../shared/mongo/ResponseError'
import { Address } from '../../../shared/coin/Address'
import { GetWalletOutputs } from '../../../shared/coin/GetWallet'
import { User } from '../../../shared/user/User'
import { authenticate } from '../../user/helpers/authenticate'

export const getWallet = async (ctx: Context, next: Next): Promise<void> => {
  const user: User = await authenticate(ctx)

  let resp: any
  try {
    resp = await axios({
      method: 'get',
      url: `https://polycash.net/${user.username}`,
      headers: {
        'PayID-Version': '1.0',
        Accept: 'application/payid+json',
      },
    })
  } catch (e) {
    //throw new ResponseError(401, e)
  }

  //if(!(resp && resp.data && resp.data.addresses)) throw new ResponseError(401, 'No PayId addresses found')

  let wallet = []

  if (resp && resp.data && resp.data.addresses)
    wallet = resp.data.addresses.map((address: Address) => {
      return {
        uuid: uuidv4(),
        ticker: address.paymentNetwork.replace('XRPL', 'XRP'),
        network: address.environment,
        address: address.addressDetails.address,
        balanceCoin: undefined,
        balanceUsd: undefined,
        loadingBalance: false,
      }
    })

  const response: GetWalletOutputs = { wallet }

  ctx.status = 200
  ctx.body = response

  await next()
}
