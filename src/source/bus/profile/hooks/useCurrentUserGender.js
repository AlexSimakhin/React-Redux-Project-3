import { useState } from 'react';

export const useCurrentUserGender = () => {
  const [currentGender, setGender] = useState('');

  const _setGender = (value) => {
    setGender(value);
  };

  return { currentGender, _setGender };
};