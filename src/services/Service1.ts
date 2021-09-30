import { Injectable } from '../decorators/InjectableDecorator'
import { Repository1 } from '../repository/Repository1'
import { Repository2 } from '../repository/Repository2'
import { DynamoRepository } from '../repository/DynamoRepository'

@Injectable()
export class Service1 {
  constructor(public repository1: Repository1, repository2: Repository2,
              public dynamoRepository: DynamoRepository) {
    repository2.doFooStuff('Nadia')
  }

  getRepo1() {
    console.debug('Inside Service1')
    return this.repository1.run()
  }

  putItems() {
    return this.dynamoRepository.putItems()
  }

  putItem() {
    return this.dynamoRepository.putItem()
  }

  getItem(id: number) {
    return this.dynamoRepository.getItem(id)
  }

  getItems() {
    return this.dynamoRepository.getItems()
  }

  deleteItem(id: number) {
    return this.dynamoRepository.deleteItem(id)
  }
}
