import { plainToClass } from 'class-transformer'
import { validateOrReject } from 'class-validator'
import { Context, Next } from 'koa'
import { firstError } from '../../../helpers/firstError'

import { authenticate } from '../../user/helpers/authenticate'
import axios from 'axios'
import { CompareAssetsInputs, CompareAssetsOutputs } from '../../../shared/coin/CompareAssets'
import { ResponseError } from '../../../shared/mongo/ResponseError'
import { User } from '../../../shared/user/User'
import { Address } from '../../../shared/coin/Address'

export const compareAssets = async (ctx: Context, next: Next): Promise<void> => {
  const compareAssetsArgs = plainToClass(CompareAssetsInputs, ctx.request.body, { excludeExtraneousValues: true })
  await validateOrReject(compareAssetsArgs, { forbidUnknownValues: true }).catch(firstError)
  let { payId } = compareAssetsArgs

  payId = payId.toLowerCase()

  const user: User = await authenticate(ctx)

  let myResp: any
  let theirResp: any
  try {
    myResp = await axios({
      method: 'get',
      url: `https://polycash.net/${user.username}`,
      headers: {
        'PayID-Version': '1.0',
        Accept: 'application/payid+json',
      },
    })

    theirResp = await axios({
      method: 'get',
      url: `https://${payId.split('$')[1]}/${payId.split('$')[0]}`,
      headers: {
        'PayID-Version': '1.0',
        Accept: 'application/payid+json',
      },
    })
  } catch (e) {
    throw new ResponseError(401, e)
  }

  if (!(myResp && myResp.data && myResp.data.addresses)) throw new ResponseError(401, `No paydId found for you`)
  if (!(theirResp && theirResp.data && theirResp.data.addresses))
    throw new ResponseError(401, `No paydId found at this address`)

  //   [
  //     {
  //         "paymentNetwork": "BTC",
  //         "environment": "MAINNET",
  //         "addressDetailsType": "CryptoAddressDetails",
  //         "addressDetails": {
  //             "address": "1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX"
  //         }
  //     }
  // ]

  const myAddresses: Address[] = myResp && myResp.data && myResp.data.addresses
  const theirAddresses: Address[] = theirResp && theirResp.data && theirResp.data.addresses

  console.log(theirAddresses)

  const addresses: Address[] = theirAddresses.map((theirAddress: Address) => {
    myAddresses.forEach((myAddress: Address) => {
        if(theirAddress.paymentNetwork === myAddress.paymentNetwork && theirAddress.environment === myAddress.environment) theirAddress.compat = true;
    })
    return theirAddress;
  })

  console.log(theirAddresses)
  
  const response: CompareAssetsOutputs = { addresses }

  ctx.status = 200
  ctx.body = response

  await next()
}
