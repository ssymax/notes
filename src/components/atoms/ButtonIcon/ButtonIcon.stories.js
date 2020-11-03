import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import ButtonIcon from './ButtonIcon';
import bulb from '../../../assets/icons/bulb.svg';
import facebook from '../../../assets/icons/facebook.svg';
import logout from '../../../assets/icons/logout.svg';
import pen from '../../../assets/icons/pen.svg';
import plus from '../../../assets/icons/plus.svg';
import twitter from '../../../assets/icons/twitter.svg';

const PrimaryBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background-color: ${({ theme }) => theme.notes};
`;

storiesOf('atoms/ButtonIcon', module)
  .addDecorator((story) => <PrimaryBackground>{story()}</PrimaryBackground>)
  .add('bulb', () => <ButtonIcon icon={bulb} />)
  .add('active', () => <ButtonIcon icon={bulb} />)
  .add('facebook', () => <ButtonIcon icon={facebook} />)
  .add('logout', () => <ButtonIcon icon={logout} />)
  .add('pen', () => <ButtonIcon icon={pen} />)
  .add('plus', () => <ButtonIcon icon={plus} />)
  .add('twitter', () => <ButtonIcon icon={twitter} />);
