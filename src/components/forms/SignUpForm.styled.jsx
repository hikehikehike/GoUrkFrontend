import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 200px;
  gap: 20px;
`;

export const FieldStyled = styled(Field)`
  height: 28px;
`;

export const FormContainer = styled.div`
  padding: 40px;
`;
