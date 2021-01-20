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

const LoginPage = ({ userID, authenticate, register, error }) => {
  const [viewChange, setView] = useState(false);

  const [viewBubble, setBubble] = useState(false);

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  const onSubmit = (values, { resetForm }) => {
    if (!viewChange) {
      authenticate(values.username, values.password);
      resetForm({});
    } else {
      sleep(500);
      register(values.username, values.password);
      resetForm({});
      setBubble(true);
    }
  };

  return (
    <AuthTemplate viewBubble={viewBubble} error={error}>
      <StyledHeading>sign in</StyledHeading>
      <Formik initialValues={{ username: '', password: '', viewChange: false }} onSubmit={onSubmit}>
        {({ values }) => {
          if (userID) {
            return <Redirect to={routes.notes} />;
          }
          return (
            <StyledAuthWrapper>
              <Field
                as={StyledInput}
                name="username"
                type="text"
                placeholder="name"
                autoFocus
                value={values.username}
              />
              <Field
                as={StyledInput}
                name="password"
                type="password"
                autoComplete="true"
                placeholder={viewChange ? 'new password' : 'password'}
                value={values.password}
              />

              <Button activeColor="notes" type="submit">
                {viewChange ? 'register' : 'sign in'}
              </Button>

              <StyledChangeViewLink onClick={() => setView(!viewChange)}>
                {viewChange ? 'Back to login' : 'New? Just register!'}
              </StyledChangeViewLink>
            </StyledAuthWrapper>
          );
        }}
      </Formik>
    </AuthTemplate>
  );
};

LoginPage.propTypes = {
  error: PropTypes.string,
  userID: PropTypes.string,
  authenticate: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
};

LoginPage.defaultProps = {
  userID: null,
  error: null,
};

const mapStateToProps = ({ userID = null, error }) => ({ userID, error });

const mapDispatchToProps = (dispatch) => ({
  authenticate: (username, password) => dispatch(authenticateAction(username, password)),
  register: (username, password) => dispatch(registerAction(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
