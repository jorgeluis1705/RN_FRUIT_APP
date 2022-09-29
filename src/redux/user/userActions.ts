import {axiosClient} from './../../axios/axiosClient';
export const COUNT_INCRESE = 'COUNT_INCRESE';
export const USER_LOGIN = 'USER_LOGIN';
export const increment = () => {
  return {
    type: COUNT_INCRESE,
  };
};

export const decrement = () => {
  return {
    type: 'COUNT_DECRESE',
  };
};

export const loginUser = async () => {
  const userRequest = await axiosClient.get('/fruits');
  console.log(userRequest.data);
  return {
    type: USER_LOGIN,
    payload: true,
  };
};
