import {Injectable} from '../decorators/InjectableDecorator';
import {Repository1} from '../repository/Repository1';
import {Repository2} from '../repository/Repository2';

@Injectable()
export class Service1 {
    constructor(public repository1: Repository1, repository2: Repository2) {
        repository2.doFooStuff('Nadia');
    }

    getRepo1() {
        return this.repository1.run();
    }
}
