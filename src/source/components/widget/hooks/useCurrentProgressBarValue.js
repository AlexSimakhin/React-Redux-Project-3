import {useState} from 'react';

export const useCurrentProgressBarValue = (data = 0) => {
  const [currentProgressBarValue, setProgressBarValue] = useState(data);

  const _setProgressBarValue = (data, isFetching) => {
    if (!isFetching && data) {
      setProgressBarValue(data);
    }
  };

  return {currentProgressBarValue, _setProgressBarValue}
};