import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { FormStyled, FieldStyled, FormContainer,
  FormHeader, LabelRememberMe, SpanLine, SpanText,
  SpanWrap, ButtonSubmit, InnerWrapMedia,
  InnerSpanQuestion, InnerButtonLink,
  InnerTextWrap } from './SignUpForm.styled';
import { SocialMediaEnter } from './SocialMediaEnter';

export const LoginForm = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(16).required(),
  });

  const initialValues = {
    email: '',
    password: '',
  };

  const SubmitHandler = (values, actions) => {
    actions.resetForm();
  };

  return (
    <FormContainer>
      <FormHeader>Welcome Back</FormHeader>
      <Formik
        validationSchema={schema}
        initialValues={initialValues}
        onSubmit={SubmitHandler}
      >
        <FormStyled>
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
            />
            <ErrorMessage name="password" component="div" />
          </label>
          <LabelRememberMe htmlFor="rememberMe" className="rememberMe">
            <FieldStyled
              className="rememberMe"
              id="rememberMe"
              type="checkbox"
              name="rememberMe"
            />
            {' '}
            Remember me
            <ErrorMessage name="rememberMe" component="div" />
          </LabelRememberMe>
          <InnerWrapMedia>
            <SpanWrap>
              <SpanLine />
              <SpanText>Or Log In With</SpanText>
              <SpanLine />
            </SpanWrap>
            <SocialMediaEnter />
            <ButtonSubmit type="submit">
              Log In
            </ButtonSubmit>
            <InnerTextWrap>
              <InnerSpanQuestion>
                Don`t have an account?
              </InnerSpanQuestion>
              <InnerButtonLink type="button">
                Sign Up here
              </InnerButtonLink>
            </InnerTextWrap>
          </InnerWrapMedia>
        </FormStyled>
      </Formik>
    </FormContainer>
  );
};
