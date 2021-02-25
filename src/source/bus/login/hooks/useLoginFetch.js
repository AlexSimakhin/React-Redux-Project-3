import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loginActions} from '../actions';

export const useLoginFetch = () => {
  const [submittedValue, setSubmitValue] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (submittedValue) {
      dispatch(loginActions.fetchAsync(submittedValue));
    }
  }, [dispatch, submittedValue]);

  const { data, isFetching, error, isAuthenticated } = useSelector((state) => state.login);

  if (!isFetching && data) {
    React.createContext(isAuthenticated);
  }

  return { setSubmitValue, data, isFetching, error, isAuthenticated};
};
