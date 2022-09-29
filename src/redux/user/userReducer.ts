import {COUNTER_CHANGE} from './userActions';
import {USER_INITIAL_STATE} from './userInitialState';
export const USER_REDUCER = (state = USER_INITIAL_STATE, action: any) => {
  switch (action.type) {
    case COUNTER_CHANGE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    default:
      return state;
  }
};
