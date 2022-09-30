import {GET_ALL_FRUITS, GET_FRUITS_DETAILS} from './fruitsActions';
import {fruistState} from './fruitsState';

export const fruitReducer = (state = fruistState, action: any) => {
  switch (action.type) {
    case GET_ALL_FRUITS:
      return {
        ...state,
        fruits: action.payload,
      };
    case GET_FRUITS_DETAILS:
      return {
        ...state,
        fruit: action.payload,
      };
    default:
      return state;
  }
};
