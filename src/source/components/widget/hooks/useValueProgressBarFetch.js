import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {progressBarActions} from '../actions';

export const useValueProgressBarFetch = async (_setProgressBarValue) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(progressBarActions.fetchAsync());
  }, [dispatch]);

  const { data, isFetching, error } = useSelector((state) => state.progressBar);

  useEffect(() => {
    _setProgressBarValue(data, isFetching);
  }, [_setProgressBarValue, data, isFetching])

  return { data, isFetching, error };
};