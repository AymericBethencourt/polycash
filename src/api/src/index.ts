import * as cors from '@koa/cors'
import * as Sentry from '@sentry/node';
import * as dotenv from 'dotenv'
import * as Koa from 'koa'
import * as bodyParser from 'koa-bodyparser'
import * as helmet from 'koa-helmet'
import * as mongoose from 'mongoose'

// import { error } from './constants'
import { error } from './error'
import { logger } from './logger'
import { router } from './router'
import { sanitize } from './sanitize'

import 'reflect-metadata'

Sentry.init({ dsn: 'https://3a81b9acc845443e9e484acdfb7f57c1@o52162.ingest.sentry.io/5288664' });

const start = async (): Promise<void> => {
  try {
    dotenv.config()
    if (!process.env.JWT_PRIVATE_KEY) throw new Error('Env variables not set')

    await mongoose.connect(process.env.MONGO_URL as string, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
      bufferMaxEntries: 0,
      useFindAndModify: false
    })

    const app = new Koa()

    app.use(logger())
    app.use(error())
    app.use(helmet())
    app.use(cors())
    app.use(bodyParser({ enableTypes: ['json'] }))
    app.use(sanitize())

    app.use(router.routes())
    app.use(router.allowedMethods())

    app.listen(process.env.PORT, () => {
      console.info(`Server running on port ${process.env.PORT}`)
    })
  } catch (error) {
    console.error(error)
  }
}

/* eslint-disable @typescript-eslint/no-floating-promises */
start()
/* eslint-enable @typescript-eslint/no-floating-promises */
