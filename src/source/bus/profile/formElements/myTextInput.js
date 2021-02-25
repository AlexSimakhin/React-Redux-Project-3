import React, { useState, useEffect } from 'react';
import {useField} from 'formik';

export const MyTextInput = ({ label, styles, data, setFieldValue, ...props }) => {
  const [firstInitValue, setInitTrue] = useState(false);
  const [field, meta] = useField({ ...props });


  useEffect(() => {
    if (props.name !== 'password' && firstInitValue === false) {
      setFieldValue(props.name, data);
      setInitTrue(true);
    }
  }, [props.name, firstInitValue, setFieldValue, data]);
  
  return (
    <>
      <div className={styles.inputRow}>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input {...field} {...props} />
      </div>
      {meta.touched && meta.error && (<div className={styles.error}> {meta.error} </div>)}
    </>
  );
};