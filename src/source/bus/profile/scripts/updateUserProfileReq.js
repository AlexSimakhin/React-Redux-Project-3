import { api } from '../../../api';

export const updateUserProfileReq = async (body) => {
  const response = await api.userUpdateProfile.fetch(body);

  if (response.status === 200) {
    const { data } = await response.json();
    console.log(data);

    return { data };
  } else {
    const error = {
      status: response.status
    };

    console.log(error);
    return { error };
  }
};