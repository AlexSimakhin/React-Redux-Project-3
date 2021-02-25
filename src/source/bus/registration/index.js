import React from 'react';
import {Formik, Form} from 'formik';

import Styles from './styles/index.module.scss';

import { initialValues } from './initialValues';
import { validationSchema } from './validationSchema';

import { MyTextInput } from './formElements/myTextInput';
import { MyGender } from './formElements/myGender';
import { userRegistrationReq } from './scripts/userRegistrationReq';

export const Registration = () => {
  return (
    <section className={Styles.registration}>
      
      <div className={Styles.left}>
        <Formik
          initialValues={initialValues}
          onSubmit={value => userRegistrationReq(value)}
          validationSchema={validationSchema}
        >

          {props => (
            <Form className={Styles.content}>
              <h1>Регистрация</h1>

              <MyGender
                name="sex"
                styles={Styles}
                setFieldValue={props.setFieldValue}
                {...props.getFieldProps('sex')} />

              <MyTextInput
                label="Электропочта"
                type="email"
                name="email"
                placeholder="Введите свой email"
                styles={Styles} />
              
              <MyTextInput
                label="Имя"
                type="text"
                name="fname"
                placeholder="Введите свое имя"
                styles={Styles} />

              <MyTextInput
                label="Фамилия"
                type="text"
                name="lname"
                placeholder="Введите свою фамилию"
                styles={Styles} />

              <MyTextInput
                label="Пароль"
                type="password"
                name="password"
                placeholder="Введите свой пароль"
                styles={Styles} />

              <MyTextInput
                label="Возраст"
                type="number"
                name="age"
                placeholder="Введите свой возраст"
                styles={Styles} />

              <MyTextInput
                label="Рост"
                type="number"
                name="height"
                placeholder="Введите свой рост"
                styles={Styles} />

              <MyTextInput
                label="Вес"
                type="number"
                name="weight"
                placeholder="Введите свой вес"
                styles={Styles} />

              <button type="submit">Зарегистрироваться</button>
            </Form>
          )}
        </Formik>

      </div>

      <div className={Styles.right}>

      </div>
    </section>
  );
};
