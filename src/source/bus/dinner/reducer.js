import {types} from './types';

const initialState = {
  data: null,
  isFetching: false,
  error: null,
};

export const breakfastReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.BREAKFAST_START_FETCHING:
      return {
        ...state,
        isFetching: true
      };
    case types.BREAKFAST_STOP_FETCHING:
      return {
        ...state,
        isFetching: false
      };
    case types.BREAKFAST_SET_FETCHING_ERROR:
      return {
        ...state,
        error: payload,
        data: null
      };
    case types.BREAKFAST_FILL:
      return {
        ...state,
        data: payload,
        error: null
      };

    default:
      return state
  }
};