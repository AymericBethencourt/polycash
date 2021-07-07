import * as Router from '@koa/router'
import { Context } from 'koa'

import { getAddress } from './resolvers/address/getAddress/getAddress'
import { setAddress } from './resolvers/address/setAddress/setAddress'

const router = new Router()

router.get('/', async (ctx: Context) => {
  ctx.body = 'You are not supposed to be here ;)'
})

router.post('/set-address', setAddress)
router.post('/get-address', getAddress)

export { router }
