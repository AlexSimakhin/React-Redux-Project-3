import {api} from '../../api';
import {types} from './types';

export const loginActions = Object.freeze({
  startFetching: () => {
    return { type: types.LOGGINING_START_FETCHING }
  },
  stopFetching: () => {
    return { type: types.LOGGINING_STOP_FETCHING }
  },
  fill: (payload) => {
    return {
      type: types.LOGGINING_FILL,
      payload,
    }
  },
  setFetchingError: (error) => {
    return {
      type: types.LOGGINING_SET_FETCHING_ERROR,
      error: true,
      payload: error
    }
  },

  fetchAsync: (auth) => async (dispatch) => {
    dispatch(loginActions.startFetching());

    const response = await api.login.fetch(auth);

    if (response.status === 200) {
      const { data } = await response.json();

      dispatch(loginActions.fill(data));
    } else {
      const error = {
        status: response.status
      };

      dispatch(loginActions.setFetchingError(error));
    }
    dispatch(loginActions.stopFetching());
  }
});
