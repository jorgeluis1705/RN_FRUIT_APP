import {axiosClient} from './../../axios/axiosClient';
import {GET_ALL_CITIES} from './citiesActions';
import {CITIES_STATE} from './citiesState';

export const citiesReducer = (state = CITIES_STATE, action: any) => {
  switch (action.type) {
    case GET_ALL_CITIES:
      return {
        ...state,
        cities: action.payload,
        count: action.payload.length,
      };
    default:
      return state;
  }
};
