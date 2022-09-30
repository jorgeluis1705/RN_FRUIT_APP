import {axiosClient} from '../../axios/axiosClient';

export const GET_ALL_CITIES = 'GET_ALL_CITIES';
export const START_GET_DATA = 'START_GET_DATA';

export const getAllCities = async () => {
  const cities = (await axiosClient.get('/cities')).data;
  return {
    type: GET_ALL_CITIES,
    payload: cities,
  };
};
