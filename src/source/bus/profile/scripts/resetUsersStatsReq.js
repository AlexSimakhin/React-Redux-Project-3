import { api } from '../../../api';

export const resetUsersStatsReq = async () => {
  const response = await api.clearReports.fetch();

  if (response.status === 204) {
    console.log('Stats cleaned');
  } else {
    const error = {
      status: response.status
    };

    console.log(error);
    return { error };
  }
};