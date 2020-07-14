import React from 'react';
import {IsMe, Other} from '..';

export default function ChatItem({isMe}) {
  if (isMe) {
    return <IsMe />;
  }
  return <Other />;
}
