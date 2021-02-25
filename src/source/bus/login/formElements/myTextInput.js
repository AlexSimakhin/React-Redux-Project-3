import React from 'react';

export const MyTextInput = ({ label, type, name, placeholder, styles, error, ...props }) => {
  return (
    <>
      <div className={styles.inputRow}>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input type={type} name={name} placeholder={placeholder} onChange={props.onChange}/>
      </div>
      {error ? <p className={styles.error}>{error}</p> : null}
    </>
  );
};