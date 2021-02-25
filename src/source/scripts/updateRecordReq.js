import { api } from './../api/index';

export const updateRecordReq = async (kind, body, hash) => {
  const response = await api.createRecord.fetch(kind, body, hash);

    if (response.status === 204) {
      console.log('Updated');
    } else {
      const error = {
        status: response.status
      };

      console.log(error);
      return { error };
    }
};