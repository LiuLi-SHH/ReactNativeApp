import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../Reducers/Reducers';

const createStoreWithMidWare = applyMiddleware(thunkMiddleware)(createStore);

export default function configStore(initStrore) {
    const store = createStoreWithMidWare(rootReducer, initStrore);
    return store;
}

