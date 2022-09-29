import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from 'redux';

import {USER_REDUCER} from './user/userReducer';
const rootReducer = combineReducers({user: USER_REDUCER});
export const store = createStore(rootReducer, compose(applyMiddleware()));
