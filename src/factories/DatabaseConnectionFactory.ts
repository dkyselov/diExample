import { DynamoDB } from 'aws-sdk'
import { Injectable } from '../decorators/InjectableDecorator';

@Injectable()
export class DatabaseConnectionFactory {
  private connection: DynamoDB

  constructor() {
    this.connection = new DynamoDB({ region: 'eu-west-1' })
  }

  public getInstance(): DynamoDB {
    return this.connection
  }
}
