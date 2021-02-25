import { useState } from 'react';

export const useProgressBar = () => {
  const [currentProgressBarValue, setProgressBarValue] = useState(0);

  return { currentProgressBarValue, setProgressBarValue };
}