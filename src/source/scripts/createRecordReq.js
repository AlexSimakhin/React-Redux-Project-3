import { api } from './../api/index';

export const createRecordReq = async (kind, body) => {
  const response = await api.createRecord.fetch(kind, body);

    if (response.status === 201) {
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