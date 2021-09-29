import 'reflect-metadata'
import { Type } from '../types/Util'

/**
 * The Injector stores services and resolves requested instances.
 */
//tslint:disable-next-line:new-parens
export const Injector = new class {
  /**
   * Resolves instances by injecting required services
   * @param {Type<any>} target
   * @returns {T}
   */
  resolve<T>(target: Type<any>): T {
    let tokens = Reflect.getMetadata('design:paramtypes', target) || []
    let injections = tokens.map(token => Injector.resolve<any>(token))

    return new target(...injections)
  }
}
