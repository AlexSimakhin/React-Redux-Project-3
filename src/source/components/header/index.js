import { Link, useLocation } from 'react-router-dom';
import {useSelector} from 'react-redux';
import cx from 'classnames';

import { logoutReq } from './scripts/logoutReq';
import { book } from './../../navigation/book';

export const Header = ({ styles }) => {
  const location = useLocation();
  const { data } = useSelector((state) => state.login);

  const fullName = `${data.fname} ${data.lname}`;

  const profileClassName = {
    'm': 'male',
    'f': 'female',
  };

  return (
    <div className={styles.header}>
      
      {location.pathname === book.dashboard ? <div/> : <Link to={book.dashboard} className={styles.homeLink}>На главную</Link>}

      <div className={cx([styles.avatar, styles[profileClassName[data.sex]]])}>
        <div className={styles.column}>
          <Link to={book.profile} className={styles.name}>{fullName}</Link>
          <button className={styles.logout} onClick={logoutReq}>Выйти</button>
        </div>
      </div>
    </div>
  );
};
