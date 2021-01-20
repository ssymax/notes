import styled from 'styled-components';

const ChatBubble = styled.div`
  height: 130px;
  width: 120px;
  background-image: url(${({ bubble }) => bubble});
  background-color: ${({ theme }) => theme.notes};
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80% 80%;
  position: absolute;
  display: block;
  z-index: 2000;
`;

export default ChatBubble;
