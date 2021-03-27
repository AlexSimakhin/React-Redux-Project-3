import { useState, useEffect } from 'react';

export const useSelect = (data) => {
  const [currentSelect, setSelect] = useState('');

  useEffect(() => {
    if (data) {
      setSelect(data.data);
    }
  }, [setSelect, data]);

  return { currentSelect, setSelect };
};