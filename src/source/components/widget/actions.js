import {api} from '../../api';
import {types} from './types';

export const progressBarActions = Object.freeze({
  startFetching: () => {
    return { type: types.PROGRESS_BAR_START_FETCHING }
  },
  stopFetching: () => {
    return { type: types.PROGRESS_BAR_STOP_FETCHING }
  },
  fill: (payload) => {
    return {
      type: types.PROGRESS_BAR_FILL,
      payload,
    }
  },
  setFetchingError: (error) => {
    return {
      type: types.PROGRESS_BAR_SET_FETCHING_ERROR,
      error: true,
      payload: error
    }
  },

  fetchAsync: () => async (dispatch) => {
    dispatch(progressBarActions.startFetching());

    const response = await api.getReports.fetch();

    if (response.status === 200) {
      const { data } = await response.json();

      dispatch(progressBarActions.fill(data));
    } else {
      const error = {
        status: response.status
      };

      dispatch(progressBarActions.setFetchingError(error));
    }
    dispatch(progressBarActions.stopFetching());
  }
});
