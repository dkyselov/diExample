import {Injectable} from '../decorators/InjectableDecorator';
import {Repository2} from '../repository/Repository2';

@Injectable()
export class Service2 {
    constructor(public repository2: Repository2) {
        repository2.doFooStuff();
    }

    getRepo2() {
        return this.repository2.run();
    }
}
