import React from 'react';
import styled from 'styled-components';

const MyButton = styled.button`
  border: 2px solid red;
  padding: 40px;
`;

const Root = () => (
  <div>
    <MyButton>Click me!</MyButton>
  </div>
);
export default Root;
