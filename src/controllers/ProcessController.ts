import { Controller } from '../decorators/ControllerDecorator'
import { Service1 } from '../services/Service1'
import { Service2 } from '../services/Service2'
import { Context } from 'aws-lambda'
import { CloudWatchEvent } from '../types/CloudWatchEvent'

@Controller
export class ProcessController {
  constructor(public service1: Service1, public service2: Service2) {}

  async runProcess(event: CloudWatchEvent,context: Context): Promise<void> {
    console.debug('Inside controller run process...', { event, context })
    await this.service1.getRepo1()
    await this.service2.getRepo2()
  }
}
