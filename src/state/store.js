import {createStore} from 'redux';
import mainReducer from './mainReducer';

export const store = createStore(mainReducer);
