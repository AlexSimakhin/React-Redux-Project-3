import {types} from './types';

const initialState = {
  data: null,
  isFetching: false,
  error: null,
  isAuthenticated: false,
};

export const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOGGINING_START_FETCHING:
      return {
        ...state,
        isFetching: true
      };
    case types.LOGGINING_STOP_FETCHING:
      return {
        ...state,
        isFetching: false
      };
    case types.LOGGINING_SET_FETCHING_ERROR:
      return {
        ...state,
        error: payload,
        isAuthenticated: false,
        data: null
      };
    case types.LOGGINING_FILL:
      return {
        ...state,
        data: payload,
        isAuthenticated: true,
        error: null
      };

    default:
      return state
  }
};