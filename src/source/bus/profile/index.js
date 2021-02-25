import React from 'react';
import {Formik, Form} from 'formik';

import Styles from './styles/index.module.scss';
import { Header } from '../../components/header';

import { initialValues } from './initialValues';
import { validationSchema } from './validationSchema';

import { MyTextInput } from './formElements/myTextInput';
import { MyGender } from './formElements/myGender';
import { Sidebar } from './../../components/sidebar';
import { useProfileFetch } from './hooks/useProfileFetch';
import { useCurrentUserGender } from './hooks/useCurrentUserGender';

import { resetUsersStatsReq } from './scripts/resetUsersStatsReq';
import { updateUserProfileReq } from './scripts/updateUserProfileReq';

export const Profile = () => {
  const { data, isFetching } = useProfileFetch();
  const { currentGender, _setGender } = useCurrentUserGender();
  
  return (
    <section className={Styles.profile}>
      
      <Sidebar styles={Styles} profileGender={currentGender} />

      <div className={Styles.wrap}>
        
        <Header styles={Styles} />

        {!isFetching && data && (
          <Formik
            initialValues={initialValues}
            onSubmit={value => updateUserProfileReq(value)}
            validationSchema={validationSchema}
          >

            {props => (
              <Form className={Styles.content}>
                <h1>Профиль</h1>

                <MyGender
                  name="sex"
                  styles={Styles}
                  data={data.sex}
                  setGender={_setGender}
                  setFieldValue={props.setFieldValue}
                  {...props.getFieldProps('sex')} />

                <MyTextInput
                  label="Электропочта"
                  type="email"
                  name="email"
                  placeholder="Введите свой email"
                  data={data.email}
                  setFieldValue={props.setFieldValue}
                  styles={Styles} />
              
                <MyTextInput
                  label="Имя"
                  type="text"
                  name="fname"
                  placeholder="Введите свое имя"
                  data={data.fname}
                  setFieldValue={props.setFieldValue}
                  styles={Styles} />

                <MyTextInput
                  label="Фамилия"
                  type="text"
                  name="lname"
                  placeholder="Введите свою фамилию"
                  data={data.lname}
                  setFieldValue={props.setFieldValue}
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
                  data={data.age}
                  setFieldValue={props.setFieldValue}
                  styles={Styles} />

                <MyTextInput
                  label="Рост"
                  type="number"
                  name="height"
                  placeholder="Введите свой рост"
                  data={data.height}
                  setFieldValue={props.setFieldValue}
                  styles={Styles} />

                <MyTextInput
                  label="Вес"
                  type="number"
                  name="weight"
                  placeholder="Введите свой вес"
                  data={data.weight}
                  setFieldValue={props.setFieldValue}
                  styles={Styles} />

                <div className={Styles.formBtns}>
                  <button type="reset" className={Styles.clearData}>Сбросить форму</button>
                  <button type="submit" className={Styles.btnSubmit}>Обновить профиль</button>
                </div>
              </Form>
            )}
          </Formik>
        )}
        
        <button className={Styles.clearData} onClick={resetUsersStatsReq}>Сбросить всю статистику за все дни</button>
      </div>
      
    </section>
  );
};
