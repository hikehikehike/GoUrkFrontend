/* eslint-disable no-console */
import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
// import axios from 'axios';
import {
  ButtonSubmitCentered, FieldStyledBorder, FormContainer,
  FormStyled,
} from './EditProfileForm.styled';

export const EditProfileForm = () => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).max(16).required(),
  });

  const initialValues = {
    name: 'username',
    email: 'useremail',
    password: 'userpassword',
  };

  const SubmitHandler = async(values, actions) => {
  };

  return (
    <FormContainer>
      <Formik
        validationSchema={schema}
        initialValues={initialValues}
        onSubmit={SubmitHandler}
      >
        <FormStyled>
          <label htmlFor="name">
            <FieldStyledBorder
              id="name"
              type="name"
              name="name"
              placeholder="name"
            />
            <ErrorMessage name="name" component="div" />
          </label>
          <label htmlFor="email">
            <FieldStyledBorder
              id="email"
              type="email"
              name="email"
              placeholder="Email"
            />
            <ErrorMessage name="email" component="div" />
          </label>

          <label htmlFor="password">
            <FieldStyledBorder
              id="password"
              type="password"
              name="password"
              placeholder="Password"
            />
            <ErrorMessage name="password" component="div" />
          </label>

          <ButtonSubmitCentered type="submit">
            Save
          </ButtonSubmitCentered>

        </FormStyled>
      </Formik>
    </FormContainer>
  );
};
