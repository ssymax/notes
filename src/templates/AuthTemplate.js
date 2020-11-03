import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from '../components/atoms/Heading/Heading';
import logoIcon from '../assets/icons/logo.svg';

const StyledWrapper = styled.div`
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${({ theme }) => theme.notes};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoWrapper = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 20px;
`;

const StyledAuthWrapper = styled.div`
  margin-top: 50px;
  width: 400px;
  height: 400px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

const AuthTemplate = ({ children }) => (
  <StyledWrapper>
    <LogoWrapper src={logoIcon} />
    <Heading>Your new notes experience</Heading>
    <StyledAuthWrapper>{children}</StyledAuthWrapper>
  </StyledWrapper>
);

AuthTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AuthTemplate;
