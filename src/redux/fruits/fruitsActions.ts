import {axiosClient} from '../../axios/axiosClient';

export const GET_ALL_FRUITS = 'GET_ALL_FRUITS';
export const GET_FRUITS_DETAILS = 'GET_FRUITS_DETAILS';

export const getFruitDetails = async (id: string) => {
  const fruit = (await axiosClient.get('/fruits/' + id)).data;
  return {
    type: GET_FRUITS_DETAILS,
    payload: fruit,
  };
};
