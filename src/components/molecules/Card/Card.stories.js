import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';

storiesOf('Molecules/Card', module)
  .add('Note', () => <Card />)
  .add('Twitter', () => <Card cardType="twitters" />)
  .add('Article', () => <Card cardType="articles" />);
