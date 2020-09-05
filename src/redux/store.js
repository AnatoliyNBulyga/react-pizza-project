import { createStore } from 'redux';
import rootReducer from './redusers';


const store = createStore(rootReducer);

window.store = store;

export default store;