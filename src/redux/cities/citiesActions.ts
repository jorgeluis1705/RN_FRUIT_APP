import {axiosClient} from '../../axios/axiosClient';

export const GET_ALL_CITIES = 'GET_ALL_CITIES';
export const START_GET_DATA = 'START_GET_DATA';
export const GET_CITY_DETAILS = 'GET_CITY_DETAILS';

export const getAllCities = async () => {
  const cities = (await axiosClient.get('/cities')).data;
  return {
    type: GET_ALL_CITIES,
    payload: cities,
  };
};

export const getCityData = async (id: string) => {
  const city = (await axiosClient.get('/cities/' + id)).data;
  return {
    type: GET_CITY_DETAILS,
    payload: city,
  };
};
