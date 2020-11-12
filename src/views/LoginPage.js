import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Input from '../components/atoms/Input/Input';
import Button from '../components/atoms/Button/Button';
import Heading from '../components/atoms/Heading/Heading';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import AuthTemplate from '../templates/AuthTemplate';
import { authenticate as authenticateAction, register as registerAction } from '../actions';
import { routes } from '../routes';

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

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const LoginPage = ({ userID, authenticate, register }) => {
  const [viewChange, setView] = useState(false);

  const handleRegisterChange = () => setView(true);
  const handleLoginChange = () => setView(false);

  return (
    <AuthTemplate>
      <StyledHeading>sign in</StyledHeading>
      <Formik
        initialValues={{ username: '', password: '', viewChange: false }}
        onSubmit={(values, { resetForm }) => {
          if (!viewChange) {
            sleep(500);
            authenticate(values.username, values.password);
            resetForm({});
            alert('Login OK');
          } else {
            sleep(500);
            register(values.username, values.password);
            resetForm({});
            alert('Register OK');
          }
        }}
      >
        {({ values }) => {
          if (userID) {
            return <Redirect to={routes.home} />;
          }

          return (
            <StyledAuthWrapper>
              <Field
                as={StyledInput}
                name="username"
                type="text"
                placeholder="name"
                autofocus="autofocus"
                value={values.username}
              />
              <Field
                as={StyledInput}
                name="password"
                type="password"
                placeholder={viewChange ? 'new password' : 'password'}
                value={values.password}
              />

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
                <StyledChangeViewLink onClick={handleLoginChange}>
                  Back to login
                </StyledChangeViewLink>
              ) : (
                <StyledChangeViewLink onClick={handleRegisterChange}>
                  New? Just register!
                </StyledChangeViewLink>
              )}
            </StyledAuthWrapper>
          );
        }}
      </Formik>
    </AuthTemplate>
  );
};

LoginPage.propTypes = {
  userID: PropTypes.string,
  authenticate: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
};

LoginPage.defaultProps = {
  userID: null,
};

const mapStateToProps = ({ userID = null }) => ({ userID });

const mapDispatchToProps = (dispatch) => ({
  authenticate: (username, password) => dispatch(authenticateAction(username, password)),
  register: (username, password) => dispatch(registerAction(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
