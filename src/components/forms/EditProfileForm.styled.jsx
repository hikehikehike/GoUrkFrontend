import styled from 'styled-components';
import { Form } from 'formik';
import { ButtonSubmit, FieldStyled } from './SignUpForm.styled';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const FormContainer = styled.div`
  text-align: center;
`;

export const ButtonSubmitCentered = styled(ButtonSubmit)`
margin: auto;
margin-top: 62px;
margin-bottom: 62px;
`;

export const FieldStyledBorder = styled(FieldStyled)`
border: solid 2px black;
border-radius: 5px;
`;
