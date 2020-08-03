import {Injector} from './meta-data/Injector';
import {ProcessController} from './controllers/ProcessController';

const index = async() => {
    const controller = Injector.resolve<ProcessController>(ProcessController);
    console.log('controller:', controller);
    return controller.runProcess();
}

index()
.then(() => console.debug('Finish Process'))
.catch(err => console.error('Some Process Error: ', err))

