import { api } from '../../../api';

export const useValueProgressBarFetch = async (setProgressBarValue) => {
  const response = await api.getReports.fetch();

  if (response.status === 200) {
    const { data } = await response.json();
    console.log(data);
    setProgressBarValue(data.data);

    return { data };
  } else {
    const error = {
      status: response.status
    };

    console.log(error);
    return { error };
  }
};