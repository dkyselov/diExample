import { Injectable } from '../decorators/InjectableDecorator'
import { DatabaseConnectionFactory } from '../factories/DatabaseConnectionFactory'

@Injectable()
export class DynamoRepository {
  constructor(public dbConnection: DatabaseConnectionFactory) {
  }

  putItem() {
    console.debug('Put item DynamoDB')
    const params = {
      TableName: 'users',
      Item: {
        'id' : { N: '002' },
        'age' : { N: '28' },
        'name' : { S: 'Olena' },
        'sName' : { S: 'S' }
      }
    }
    return this.dbConnection.getInstance()
      .putItem(params)
      .promise()
  }

  putItems() {
    console.debug('Put items DynamoDB')
    const params = {
      RequestItems: {
        'users': [
          {
            PutRequest: {
              Item: {
                'id' : { N: '003' },
                'age' : { N: '28' },
                'name' : { S: 'Olena1' },
                'sName' : { S: 'St' }
              }
            }},
          {
            PutRequest: {
              Item: {
                'id' : { N: '004' },
                'age' : { N: '28' },
                'name' : { S: 'Olena3' },
                'sName' : { S: 'Sts' }
              }
            }}]
      }
    }

    return this.dbConnection.getInstance()
      .batchWriteItem(params)
      .promise()
  }

  getItem(id: number) {
    console.debug('Get item DynamoDB')
    const params = {
      TableName: 'users',
      Key: {
        'id': { N: `${id}` }
      },
    }
    return this.dbConnection.getInstance()
      .getItem(params)
      .promise()
  }

  getItems() {
    console.debug('Get items DynamoDB')
    const params = {
      TableName: 'users',
      ProjectionExpression: 'id, sName, age'
    }
    return this.dbConnection.getInstance()
      .scan(params)
      .promise()
  }

  deleteItem(id: number) {
    console.debug('Delete item DynamoDB')
    const params = {
      TableName: 'users',
      'Key' : {
        'id': {
          'N': `${id}`
        }
      }
    }
    return this.dbConnection.getInstance()
      .deleteItem(params)
      .promise()
  }
}
