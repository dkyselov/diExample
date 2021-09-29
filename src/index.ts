import { Context } from 'aws-lambda'

import { Injector } from './meta-data/Injector'

import { ProcessController } from './controllers/ProcessController'

export const handler = async(_, context: Context) => {
  const controller = Injector.resolve<ProcessController>(ProcessController)
  return controller.runProcess(context)
}
