/* eslint-disable no-console */
import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { FormStyled, FieldStyled, FormContainer } from './SignUpForm.styled';
import { SocialMediaEnter } from './SocialMediaEnter';

export const SignUpForm = () => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).max(16).required(),
  });

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const SubmitHandler = (values, actions) => {
    console.log(values, actions);
    actions.resetForm();
  };

  return (
    <FormContainer>
      <h1>Log In</h1>
      <Formik
        validationSchema={schema}
        initialValues={initialValues}
        onSubmit={SubmitHandler}
      >
        <FormStyled>
          <label htmlFor="name">
            <FieldStyled
              id="name"
              type="text"
              name="name"
              placeholder="Name"
            />
            <ErrorMessage name="name" component="div" />
          </label>
          <label htmlFor="email">
            <FieldStyled
              id="email"
              type="email"
              name="email"
              placeholder="Email"
            />
            <ErrorMessage name="email" component="div" />
          </label>

          <label htmlFor="password">
            <FieldStyled
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              // onChange={handleChange}
              // onBlur={handleBlur}
              // value={values.password}
            />
            <ErrorMessage name="password" component="div" />
          </label>
          <label htmlFor="rememberMe">
            <FieldStyled
              id="rememberMe"
              type="checkbox"
              name="rememberMe"
            />
            {' '}
            Remember me
            <ErrorMessage name="rememberMe" component="div" />
          </label>
          <div>
            <span>Or Log In With</span>
            <SocialMediaEnter />
            <button type="submit">
              Sign Up
            </button>
          </div>
        </FormStyled>
      </Formik>
    </FormContainer>
  );
};
