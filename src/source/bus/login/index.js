import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Styles from './styles/index.module.scss';
import { MyTextInput } from './formElements/myTextInput';
import { useLoginFetch } from './hooks/useLoginFetch';

import { Link } from 'react-router-dom';

export const Login = () => {
  const { setSubmitValue } = useLoginFetch();

  const initialValues = {
    login: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    login: Yup.string().email('Неверный формат электроной почты').required('Электропочта является обязательной'),
    password: Yup.string().required('Пароль является обязательным'),
  });

  const onSubmit = (value) => {
    console.log(value);

    const username = 'alex@alex.alex';
    const password = '12345678';
    const auth = 'Basic ' + new Buffer(username + ':' + password).toString('base64');

    setSubmitValue(auth);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  });

  return (
    <section className={Styles.login}>
      <form className={Styles.content} onSubmit={formik.handleSubmit}>
        <h1>Добро пожаловать!</h1>

        <MyTextInput
          label="Электропочта"
          type="email"
          name="login"
          placeholder="Введите свой email"
          styles={Styles}
          {...formik.getFieldProps('login')}
          error={formik.errors.login}
        />

        <MyTextInput
          label="Пароль"
          type="password"
          name="password"
          placeholder="Введите свой пароль"
          styles={Styles}
          {...formik.getFieldProps('password')}
          error={formik.errors.password}
        />

        <button type="submit" disabled={Object.keys(formik.errors).length !== 0 ? true : false}>Войти в систему</button>
      </form>

      <Link to={'/'} style={{width: 100, height: 100, zIndex: 3}}>Clockkc</Link>

    </section>
  );
};
