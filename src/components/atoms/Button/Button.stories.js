import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Atoms/Button', module)
  .add('Primary', () => <Button activeColor="notes">Hello simon</Button>)
  .add('Secondary', () => <Button activeColor="twitters">Hello simon</Button>)
  .add('Tertiary', () => <Button activeColor="articles">Hello simon</Button>)
  .add('Small', () => <Button small>Hello simon</Button>);
