import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {breakfastActions} from '../actions';

export const useGetRecordBreakfastFetch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(breakfastActions.fetchAsync());
  }, [dispatch]);

  const { data, isFetching, error } = useSelector((state) => state.breakfast);
  
  return { data, isFetching, error };
};