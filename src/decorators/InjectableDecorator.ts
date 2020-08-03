import {GenericClassDecorator, Type} from "../types/Util";

/**
 * @returns {GenericClassDecorator<Type<any>>}
 * @constructor
 */
export const Injectable = () : GenericClassDecorator<Type<any>> => {
  return (target: Type<any>) => {};
};
