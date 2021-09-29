import { Context } from 'aws-lambda'

import { Injector } from './meta-data/Injector'

import { ProcessController } from './controllers/ProcessController'

import { CloudWatchEvent } from './types/CloudWatchEvent'

export const handler = async(event: CloudWatchEvent, context: Context) => {
  const controller = Injector.resolve<ProcessController>(ProcessController)
  return controller.runProcess(event, context)
}
