import {api} from '../../api';
import {types} from './types';

export const breakfastActions = Object.freeze({
  startFetching: () => {
    return { type: types.BREAKFAST_START_FETCHING }
  },
  stopFetching: () => {
    return { type: types.BREAKFAST_STOP_FETCHING }
  },
  fill: (payload) => {
    return {
      type: types.BREAKFAST_FILL,
      payload,
    }
  },
  setFetchingError: (error) => {
    return {
      type: types.BREAKFAST_SET_FETCHING_ERROR,
      error: true,
      payload: error
    }
  },

  fetchAsync: () => async (dispatch) => {
    dispatch(breakfastActions.startFetching());

    const response = await api.getRecord.fetch('breakfast');

    if (response.status === 200) {
      const { data } = await response.json();

      dispatch(breakfastActions.fill(data));
    } else {
      const error = {
        status: response.status
      };

      dispatch(breakfastActions.setFetchingError(error));
    }
    dispatch(breakfastActions.stopFetching());
  }
});
