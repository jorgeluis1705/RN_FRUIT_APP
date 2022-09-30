import {GET_ALL_FRUITS, GET_FRUITS_DETAILS, SEND_FRUITS} from './fruitsActions';
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
    case SEND_FRUITS:
      const newFruits = state.fruits.map(e => {
        // if (e._id === action.payload.destiny) {
        //   e.count = e.count + action.payload.count;
        // } else if (e._id === action.payload.origin) {
        //   e.count = e.count - action.payload.count;
        // }
        return {...e};
      });
      console.log({newFruits});
      return {
        ...state,
        fruits: newFruits,
      };
    default:
      return state;
  }
};
