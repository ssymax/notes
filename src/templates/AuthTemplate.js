import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import Heading from '../components/atoms/Heading/Heading';
import ChatBubble from '../components/atoms/ChatBubble/ChatBubble';
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

const StyledLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const fadeIn = keyframes`
  0%, {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ImageWrapper = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 20px;
  position: relative;
`;

const StyledChatBubble = styled(ChatBubble)`
  animation: 0.5s ${fadeIn} ease-in-out;
  transform: translate(130px, -30px);
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

const AuthTemplate = ({ children, viewChatBubble, textInBubble, error }) => (
  <StyledWrapper>
    <StyledLogoWrapper>
      <ImageWrapper src={logoIcon} />
      {viewChatBubble && <StyledChatBubble>{textInBubble}</StyledChatBubble>}
      {error && <StyledChatBubble>Register first!</StyledChatBubble>}
    </StyledLogoWrapper>
    <Heading>Your new notes experience</Heading>
    <StyledAuthWrapper>{children}</StyledAuthWrapper>
  </StyledWrapper>
);

AuthTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  viewChatBubble: PropTypes.bool.isRequired,
  textInBubble: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
};

export default AuthTemplate;
