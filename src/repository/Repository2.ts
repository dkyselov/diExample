export class Repository2 {
  private static instance: Repository2
  private name

  constructor() {
    if (Repository2.instance) {
      return Repository2.instance
    }
    Repository2.instance = this
  }

  run() {
    console.debug('Inside Repository2')
    return Promise.resolve('Repository2')
  }

  doFooStuff(param ?: string) {
    if (param) {
      this.name = param
    }
    console.log('check name:', this.name)
  }
}
