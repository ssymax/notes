import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import UserPageTemplate from './UserPageTemplate';
import Heading from '../components/atoms/Heading/Heading';
import ButtonIcon from '../components/atoms/ButtonIcon/ButtonIcon';
import NewItemBar from '../components/organisms/NewItemBar/NewItemBar';
import plus from '../assets/icons/plus.svg';
import withContext from '../hoc/withContext';

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;

  @media (max-width: 1450px) {
    margin: 0 auto;
    max-width: 700px;
    display: flex;
    flex-direction: column;
  }
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 15px;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledButttonIcon = styled(ButtonIcon)`
  height: 50px;
  width: 50px;
  background-color: ${({ activeColor, theme }) => theme[activeColor]};
  border-radius: 50px;
  background-position: center;
  background-image: url(${plus});
  background-size: 100%;
  cursor: pointer;
  bottom: 30px;
  right: 30px;
  position: fixed;
  z-index: 10000;
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const GridTemplate = ({ children, pageContext }) => {
  const [isNewItemBarVisible, setVisible] = useState(false);

  return (
    <UserPageTemplate>
      <StyledWrapper>
        <StyledPageHeader>
          <StyledHeading big>{pageContext}</StyledHeading>
        </StyledPageHeader>
        <StyledGrid>{children}</StyledGrid>
        <StyledButttonIcon
          onClick={() => setVisible((visable) => !visable)}
          activeColor={pageContext}
        />
        <NewItemBar
          handleClose={() => setVisible((visable) => !visable)}
          isVisible={isNewItemBarVisible}
        />
      </StyledWrapper>
    </UserPageTemplate>
  );
};

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

GridTemplate.defaultProps = {
  pageContext: 'notes',
};

export default withContext(GridTemplate);
