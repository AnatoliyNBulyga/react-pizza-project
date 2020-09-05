import {combineReducers} from 'redux';
import filters from './filters';
import pizzase from './pizzas';

const rootReducer = combineReducers({
  filters,
  pizzase
});

export default rootReducer;