import { CloudWatchEvent } from '../../src/types/CloudWatchEvent'

require('dotenv')
  .config()

import { Context } from 'aws-lambda'
import { handler } from '../../src'

const cloudWatchPayload: CloudWatchEvent = {
  'id': 'cdc73f9d-aea9-11e3-9d5a-835b769c0d9c',
  'source': 'aws.events',
  'account': '123456789012',
  'time': '1970-01-01T00:00:00Z',
  'region': 'us-east-1',
  'resources': [
    'arn:aws:events:us-east-1:123456789012:rule/ExampleRule'
  ],
  'detail': {}
}
const requestId = 'e0ec9e45-5551-4b84-ab90-1d76ac5ee419'

const context = {
  awsRequestId: requestId
} as any as Context

/**
 * To execute this file ==> ts-node test/integration/index.spec.ts
 *
 * NB: This file is not guaranteed to work when the codebase is changed
 */
handler(cloudWatchPayload, context)
  .then(_ => console.log('Integration test complete successfully...'))
  .catch(_ => console.error('Integration test failed'))
