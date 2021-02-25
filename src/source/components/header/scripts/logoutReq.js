import { api } from '../../../api';
import { history } from './../../../navigation/history';
import { book } from './../../../navigation/book';

export const logoutReq = async () => {
  const response = await api.logout.fetch();

  if (response.status === 204) {
    console.log('Logout');
    
    history.push(book.login);
  } else {
    const error = {
      status: response.status
    };

    console.log(error);
    return { error };
  }
};