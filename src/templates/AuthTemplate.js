import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from '../components/atoms/Heading/Heading';
import ChatBubble from '../components/atoms/ChatBubble/ChatBubble';
import logoIcon from '../assets/icons/logo.svg';
import successBubble from '../assets/icons/successBubble.svg';
import registerBubble from '../assets/icons/registerBubble.svg';

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

const ImageWrapper = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 20px;
  position: relative;
`;

const StyledChatBubble = styled(ChatBubble)`
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

const AuthTemplate = ({ children, viewBubble, error }) => (
  <StyledWrapper>
    <StyledLogoWrapper>
      <ImageWrapper src={logoIcon} />
      {viewBubble && <StyledChatBubble bubble={successBubble} />}
      {error && <StyledChatBubble bubble={registerBubble} />}
    </StyledLogoWrapper>
    <Heading>Your new notes experience</Heading>
    <StyledAuthWrapper>{children}</StyledAuthWrapper>
  </StyledWrapper>
);

AuthTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  viewBubble: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

AuthTemplate.defaultProps = {
  error: null,
};

export default AuthTemplate;
