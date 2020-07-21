import React from 'react';
import {IsMe, Other} from '..';

export default function ChatItem({isMe, text, date, photo}) {
  if (isMe) {
    return <IsMe text={text} date={date} />;
  }
  return <Other text={text} date={date} photo={photo}/>;
}
