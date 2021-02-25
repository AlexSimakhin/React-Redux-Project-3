import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {profileActions} from '../actions';

export const useProfileFetch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(profileActions.fetchAsync());
  }, [dispatch]);

  const { data, isFetching, error } = useSelector((state) => state.profile);

  return { data, isFetching, error };
};
