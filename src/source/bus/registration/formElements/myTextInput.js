import React from 'react';
import {useField} from 'formik';

export const MyTextInput = ({ label, styles, ...props }) => {
  const [field, meta] = useField({ ...props });

  return (
    <>
      <div className={styles.inputRow}>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input {...field} {...props}></input>
      </div>
      {meta.touched && meta.error && (<div className={styles.error}> {meta.error} </div>)}
    </>
  );
};
