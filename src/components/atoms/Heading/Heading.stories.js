import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from './Heading';

storiesOf('Atoms/Heading', module)
  .add('Normal', () => <Heading>Hello simon</Heading>)
  .add('big', () => <Heading big>Hello simon</Heading>);
