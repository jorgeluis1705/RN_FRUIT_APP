import {axiosClient} from '../../axios/axiosClient';

export const GET_ALL_FRUITS = 'GET_ALL_FRUITS';
export const GET_FRUITS_DETAILS = 'GET_FRUITS_DETAILS';
export const SEND_FRUITS = 'SEND_FRUITS';

export const getFruitDetails = async (id: string) => {
  const fruit = (await axiosClient.get('/fruits/' + id)).data;
  return {
    type: GET_FRUITS_DETAILS,
    payload: fruit,
  };
};
export const tranferTruis = async (
  origin: string,
  count: number,
  destiny: string,
  name: string,
) => {
  const fruit = (
    await axiosClient.put('/send/' + origin + '/' + destiny, {
      count,
      name,
    })
  ).data;
  return {
    type: SEND_FRUITS,
    payload: {origin, count, destiny, name},
  };
};
