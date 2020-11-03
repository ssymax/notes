import React from 'react';
import DetailsTemplate from '../templates/DetailsTemplate';

const shityShit = {
  id: 1,
  title: 'Hello shithead',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit',
  twitterName: 'donaldtusk',
  articleUrl: 'https://twitter.com',
  created: '1 day',
};

const DetailsPage = () => (
  <DetailsTemplate
    title={shityShit.title}
    created={shityShit.created}
    content={shityShit.content}
    articleUrl={shityShit.articleUrl}
    twitterName={shityShit.twitterName}
  />
);

export default DetailsPage;
