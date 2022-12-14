import {fruitReducer} from './fruits/fruitsReducer';
import {citiesReducer} from './cities/citiesReducer';
import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from 'redux';
import thunk from 'redux-thunk';

import {USER_REDUCER} from './user/userReducer';
const rootReducer = combineReducers({
  user: USER_REDUCER,
  cities: citiesReducer,
  fruits: fruitReducer,
});
export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
