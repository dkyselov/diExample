import {Injectable} from '../decorators/InjectableDecorator';

@Injectable()
export class Repository1 {
    run() {
        console.debug('Inside Repository1');
        return Promise.resolve('Repository1');
    }
}
