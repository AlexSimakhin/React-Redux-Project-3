import cx from 'classnames';

import { useUserGender } from './hooks/useUserGender';

export const Sidebar = ({ styles, ...props }) => {
  const { gender } = useUserGender(props.profileGender);
  
  const sidebarClassName = {
    'm': 'male',
    'f': 'female',
  };

  return (
    <div className={cx([styles.sidebar, styles[`${sidebarClassName[gender]}`]])}></div>
  );
};