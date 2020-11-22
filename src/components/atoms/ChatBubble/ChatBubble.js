import styled from 'styled-components';
import bubble from '../../../assets/icons/bubble.svg';

const ChatBubble = styled.div`
  height: 100px;
  width: 150px;
  background-image: url(${bubble});
  background-position: 50%;
  background-repeat: no-repeat;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

export default ChatBubble;
