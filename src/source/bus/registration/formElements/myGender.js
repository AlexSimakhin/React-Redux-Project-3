import React from 'react';

export const MyGender = ({ setFieldValue, styles, ...props }) => {
  return (
    <div className={styles.gender}>
      <div {...props} className={`${styles.female} ${props.value === 'f' ? styles.selected : ''}`} key={'Женщина'} onClick={() => setFieldValue(props.name, 'f')} >
        <span name={props.name}>
          {'Женщина'}
        </span>
      </div>
      <div {...props} className={`${styles.male} ${props.value === 'm' ? styles.selected : ''}`} key={'Мужчина'} onClick={() => setFieldValue(props.name, 'm')} >
        <span name={props.name}>
          {'Мужчина'}
        </span>
      </div>
    </div>
  )
};
