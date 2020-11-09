import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import UserPageTemplate from './UserPageTemplate';
import Heading from '../components/atoms/Heading/Heading';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import Button from '../components/atoms/Button/Button';
import linkIcon from '../assets/icons/link.svg';
import withContext from '../hoc/withContext';

const StyledWrapper = styled.div`
  margin-top: 100px;
  max-width: 550px;
  height: auto;
  padding-left: 100px;
`;

const StyledHeader = styled.div`
  position: relative;
  height: 100px;
`;

const StyledImage = styled.img`
  max-height: 90px;
  max-width: 90px;
  position: absolute;
  left: 362px;
  border-radius: 50%;
  border: 2px dotted ${({ theme }) => theme.twitters};
`;

const StyledLinkButton = styled.a`
  display: block;
  width: 47px;
  height: 47px;
  background: url(${linkIcon}) no-repeat;
  background-size: 60%;
  background-position: 50%;
  position: absolute;
  left: 350px;
  top: 50%;
  transform: translateY(-50%);
`;

const StyledHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

const StyledText = styled(Paragraph)`
  padding-bottom: 20px;
`;

const DetailsTemplate = ({ pageContext, articleUrl, twitterName, content, title }) => (
  <UserPageTemplate>
    <StyledWrapper>
      <StyledHeader>
        {pageContext === 'twitters' && (
          <StyledImage alt={title} src={`https://twitter-avatar.now.sh/${twitterName}`} />
        )}
        {pageContext === 'articles' && (
          <StyledLinkButton target="_blank" rel="noopener norefferer" href={articleUrl} />
        )}
        <StyledHeading>{title}</StyledHeading>
      </StyledHeader>
      <StyledText>{content}</StyledText>
      <Button as={Link} to={`/${pageContext}`} activeColor={pageContext}>
        save / close
      </Button>
    </StyledWrapper>
  </UserPageTemplate>
);

DetailsTemplate.propTypes = {
  pageContext: PropTypes.string.isRequired,
  articleUrl: PropTypes.string.isRequired,
  twitterName: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default withContext(DetailsTemplate);
