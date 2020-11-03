import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import logout from '../../../assets/icons/logout.svg';
import pen from '../../../assets/icons/pen.svg';
import twitter from '../../../assets/icons/twitter.svg';
import bulb from '../../../assets/icons/bulb.svg';
import logo from '../../../assets/icons/logo.svg';
import withContext from '../../../hoc/withContext';

const StyledWrapper = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 150px;
  background-color: ${({ theme, activeColor }) => (activeColor ? theme[activeColor] : theme.notes)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480px) {
    width: 100px;
  }
`;

const StyledLogo = styled(NavLink)`
  display: block;
  margin-top: 20px;
  margin-bottom: 10vh;
  height: 67px;
  width: 130px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 50%;
  border: none;

  &:hover {
    opacity: 0.8;
  }
`;

const StyledLogout = styled(ButtonIcon)`
  margin-top: auto;
  margin-bottom: 20px;
`;

const LinkWrapper = styled.ul`
  height: 300px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Sidebar = ({ pageContext }) => (
  <StyledWrapper activeColor={pageContext}>
    <StyledLogo to="/" />
    <LinkWrapper>
      <li>
        <ButtonIcon as={NavLink} to="/notes" icon={pen} activeclass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/twitters" icon={twitter} activeclass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/articles" icon={bulb} activeclass="active" />
      </li>
    </LinkWrapper>
    <StyledLogout as={NavLink} to="/login" icon={logout} activeclass="active" />
  </StyledWrapper>
);

export default withContext(Sidebar);

Sidebar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

Sidebar.defaultProps = {
  pageContext: 'notes',
};
