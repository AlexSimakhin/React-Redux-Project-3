import { useSelector } from 'react-redux';

export const useUserGender = (profileGender) => {
  const { data } = useSelector((state) => state.login);

  if (profileGender) {
    return { gender: profileGender };
  } else {
    const { sex } = data;

    return { gender: sex };
  }
};

