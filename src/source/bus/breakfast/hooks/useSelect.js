import { useState } from 'react';

export const useSelect = () => {
  const [currentSelect, setSelect] = useState('');

  return { currentSelect, setSelect };
};