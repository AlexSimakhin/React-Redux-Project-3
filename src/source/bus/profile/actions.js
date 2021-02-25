import {api} from '../../api';
import {types} from './types';

export const profileActions = Object.freeze({
  startFetching: () => {
    return { type: types.PROFILE_START_FETCHING }
  },
  stopFetching: () => {
    return { type: types.PROFILE_STOP_FETCHING }
  },
  fill: (payload) => {
    return {
      type: types.PROFILE_FILL,
      payload,
    }
  },
  setFetchingError: (error) => {
    return {
      type: types.PROFILE_SET_FETCHING_ERROR,
      error: true,
      payload: error
    }
  },

  fetchAsync: () => async (dispatch) => {
    dispatch(profileActions.startFetching());

    const response = await api.getProfile.fetch();

    if (response.status === 200) {
      const { data } = await response.json();

      dispatch(profileActions.fill(data));
    } else {
      const error = {
        status: response.status
      };

      dispatch(profileActions.setFetchingError(error));
    }
    dispatch(profileActions.stopFetching());
  }
});
