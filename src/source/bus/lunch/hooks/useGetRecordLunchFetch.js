import {useEffect} from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import {breakfastActions} from '../actions';

export const useGetRecordLunchFetch = (setSelect) => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(breakfastActions.fetchAsync());
  // }, [dispatch]);

  // const { data, isFetching, error } = useSelector((state) => state.breakfast);


  const data = {
    "hash": 111111,
    "data": "none"
  };

  useEffect(() => {
    if (data.hash === 0) {
      setSelect('');
    } else {
      setSelect(data.data);
    }
  }, [data.hash, data.data, setSelect]);

  

  return { data: data };

  // return { data, isFetching, error };
}