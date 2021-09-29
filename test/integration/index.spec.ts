require('dotenv')
  .config()

import { Context } from 'aws-lambda'
import { handler } from '../../src'

const sqsPayload = {}
const requestId = 'e0ec9e45-5551-4b84-ab90-1d76ac5ee419'

const context = {
  awsRequestId: requestId
} as any as Context

/**
 * To execute this file ==> ts-node test/integration/index.spec.ts
 *
 * NB: This file is not guaranteed to work when the codebase is changed
 */
handler(sqsPayload, context)
  .then(_ => console.log('Integration test complete successfully...'))
  .catch(_ => console.error('Integration test failed'))
