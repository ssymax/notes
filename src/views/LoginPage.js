import React, { useState } from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import Input from '../components/atoms/Input/Input';
import Button from '../components/atoms/Button/Button';
import Heading from '../components/atoms/Heading/Heading';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import AuthTemplate from '../templates/AuthTemplate';

const StyledAuthWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled(Input)`
  margin-bottom: 20px;
  outline: none;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 50px;
  text-transform: uppercase;
`;

const StyledChangeViewLink = styled(Paragraph)`
  display: block;
  margin-top: 10px;
  cursor: pointer;
  opacity: 0.7;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};

  &:hover {
    opacity: 1;
    transition: opacity 0.1s ease-in;
  }
`;

const LoginPage = () => {
  const [viewChange, setView] = useState(false);

  const handleRegisterChange = () => setView(true);
  const handleLoginChange = () => setView(false);

  return (
    <AuthTemplate>
      <StyledHeading>sign in</StyledHeading>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={({ username, password }) => {
          axios
            .post('http://localhost:9000/api/user/login', {
              username,
              password,
            })
            .then(() => console.log('Login successful'))
            .catch((err) => console.log(err));
        }}
      >
        {() => (
          <StyledAuthWrapper>
            <Field
              as={StyledInput}
              name="username"
              type="text"
              placeholder="name"
              autofocus="autofocus"
            />
            <Field as={StyledInput} name="password" type="password" placeholder="password" />
            {viewChange && (
              <Field
                as={StyledInput}
                name="passwordConfirm"
                type="password"
                placeholder="repeat password"
              />
            )}

            {viewChange ? (
              <Button activeColor="notes" type="submit">
                register
              </Button>
            ) : (
              <Button activeColor="notes" type="submit">
                sign in
              </Button>
            )}

            {viewChange ? (
              <StyledChangeViewLink onClick={handleLoginChange}>Back to login</StyledChangeViewLink>
            ) : (
              <StyledChangeViewLink onClick={handleRegisterChange}>
                New? Just register!
              </StyledChangeViewLink>
            )}
          </StyledAuthWrapper>
        )}
      </Formik>
    </AuthTemplate>
  );
};

export default LoginPage;
