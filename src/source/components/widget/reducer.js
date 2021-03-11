import {types} from './types';

const initialState = {
  data: null,
  isFetching: false,
  error: null,
};

export const progressBarReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.PROGRESS_BAR_START_FETCHING:
      return {
        ...state,
        isFetching: true
      };
    case types.PROGRESS_BAR_STOP_FETCHING:
      return {
        ...state,
        isFetching: false
      };
    case types.PROGRESS_BAR_SET_FETCHING_ERROR:
      return {
        ...state,
        error: payload,
        data: null
      };
    case types.PROGRESS_BAR_FILL:
      return {
        ...state,
        data: payload,
        error: null
      };

    default:
      return state
  }
};