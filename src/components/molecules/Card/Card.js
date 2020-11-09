import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Heading from '../../atoms/Heading/Heading';
import Button from '../../atoms/Button/Button';
import linkIcon from '../../../assets/icons/link.svg';
import { removeItem as removeItemAction } from '../../../actions';
import withContext from '../../../hoc/withContext';

const StyledWrapper = styled.div`
  min-height: 350px;
  box-shadow: 0 10px 30px -5px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  padding: 0;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
  font-family: 'Poppins';
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: 20px 30px;
  background-color: ${({ theme, activeColor }) => (activeColor ? theme[activeColor] : 'white')};

  :first-of-type {
    z-index: 9999;
  }

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const Info = styled(Paragraph)`
  padding-bottom: 20px;
  margin: 0;
  font-weight: ${({ theme }) => theme.light};
`;

const StyledAvatar = styled.img`
  width: 86px;
  height: 86px;
  border: 3px solid ${({ theme }) => theme.twitters};
  border-radius: 50px;
  position: absolute;
  right: 20px;
  top: 20px;
`;

const StyledLinkButton = styled.a`
  display: block;
  width: 47px;
  height: 47px;
  background: url(${linkIcon}) no-repeat;
  background-size: 60%;
  background-position: 50%;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
`;

const Card = ({ id, pageContext, title, twitterName, articleUrl, content, removeItem }) => {
  const [redirect, setDirect] = useState(false);

  const handleCardClick = () => setDirect(true);

  if (redirect) {
    return <Redirect to={`${pageContext}/${id}`} />;
  }

  return (
    <StyledWrapper>
      <InnerWrapper onClick={handleCardClick} activeColor={pageContext}>
        <Heading>{title}</Heading>
        {pageContext === 'twitters' && (
          <StyledAvatar src={`https://twitter-avatar.now.sh/${twitterName}`} />
        )}
        {pageContext === 'articles' && <StyledLinkButton href={articleUrl} />}
      </InnerWrapper>
      <InnerWrapper flex>
        <Info>{content}</Info>
        <Button onClick={() => removeItem(pageContext, id)} small>
          Remove
        </Button>
      </InnerWrapper>
    </StyledWrapper>
  );
};

Card.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
};

Card.defaultProps = {
  pageContext: 'notes',
  twitterName: null,
  articleUrl: null,
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (itemType, id) => dispatch(removeItemAction(itemType, id)),
});

export default connect(null, mapDispatchToProps)(withContext(Card));
