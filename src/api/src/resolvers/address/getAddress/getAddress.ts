import { Context, Next } from 'koa'

import { Address, AddressModel } from '../../../shared/address/Address'
import { GetAddressInputs, GetAddressOutputs } from '../../../shared/address/GetAddress'
import { plainToClass } from 'class-transformer'
// import { validateOrReject } from 'class-validator'
// import { firstError } from '../../../helpers/firstError'
import { ResponseError } from '../../../shared/mongo/ResponseError'

export const getAddress = async (ctx: Context, next: Next): Promise<void> => {
  console.log(ctx.request.body)
  const getAddressArgs = plainToClass(GetAddressInputs, ctx.request.body, { excludeExtraneousValues: true })
  // await validateOrReject(getAddressArgs, { forbidUnknownValues: true }).catch(firstError)
  let { username } = getAddressArgs

  const address = (await AddressModel.findOne({ username }).lean()) as Address | undefined
  if (!address) throw new ResponseError(400, 'Address not found')

  const response: GetAddressOutputs = { address: address.address }

  ctx.status = 200
  ctx.body = response

  await next()
}
