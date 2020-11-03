import styled, { css } from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: inherit;
  background-color: ${({ theme, activeColor }) => (activeColor ? theme[activeColor] : 'white')};
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;
  text-decoration: none;

  ${({ small }) =>
    small &&
    css`
      background-color: ${({ theme }) => theme.grey90};
      width: 105px;
      height: 30px;
      font-size: 10px;
    `};
`;

export default Button;
