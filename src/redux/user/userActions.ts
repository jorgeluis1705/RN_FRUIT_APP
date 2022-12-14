import {axiosClient} from './../../axios/axiosClient';
export const COUNT_INCRESE = 'COUNT_INCRESE';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_REGISTER = 'USER_REGISTER';
export const USER_ERROR = 'USER_ERROR';
export const USER_CLEAR_ERROR = 'USER_CLEAR_ERROR';
export const USER_LOADING = 'USER_LOADING';

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
  return {
    type: USER_LOGIN,
    payload: true,
  };
};
