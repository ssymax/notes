import styled, { css } from 'styled-components';
import searchbarIcon from '../../../assets/icons/search.svg';

const Input = styled.input`
  padding: 15px 30px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
  background-color: ${({ theme }) => theme.grey90};
  border: none;
  border-radius: 50px;

  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.grey80};
  }

  ${({ search }) =>
    search &&
    css`
      padding: 10px 20px 10px 40px;
      font-size: ${({ theme }) => theme.fontSize.xs};
      background-image: url(${searchbarIcon});
      background-size: 20px;
      background-repeat: no-repeat;
      background-position: 10px;
      margin-bottom: 20px;
    `}
`;

export default Input;
