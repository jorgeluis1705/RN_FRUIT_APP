import {axiosClient} from './../../axios/axiosClient';
import {GET_ALL_CITIES, GET_CITY_DETAILS} from './citiesActions';
import {CITIES_STATE} from './citiesState';

export const citiesReducer = (state = CITIES_STATE, action: any) => {
  switch (action.type) {
    case GET_ALL_CITIES:
      return {
        ...state,
        cities: action.payload,
        count: action.payload.length,
      };
    case GET_CITY_DETAILS:
      return {
        ...state,
        city: action.payload,
      };
    default:
      return state;
  }
};
