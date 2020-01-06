import { createStore, combineReducers } from 'redux';
import carrinhoReducer from './carrinho/reducers';

const rootReducer = combineReducers({
  carrinhoReducer,
});

export default createStore(rootReducer);
