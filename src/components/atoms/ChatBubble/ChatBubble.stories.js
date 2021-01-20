import React from 'react';
import ChatBubble from './ChatBubble';
import successBubble from '../../../assets/icons/success.png';
import registerBubble from '../../../assets/icons/register.png';

export const Primary = () => <ChatBubble bubble={successBubble} />;
export const Secondary = () => <ChatBubble bubble={registerBubble} />;
