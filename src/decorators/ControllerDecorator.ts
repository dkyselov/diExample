export function Controller<T extends {new(...args: any[]): {}}>(constructor: T) {
  return class extends constructor {
    metaData = 'Controller'
  }
}
