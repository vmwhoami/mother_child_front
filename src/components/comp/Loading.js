import React from 'react';
import { Heart } from 'react-awesome-spinners';

const Loading = () => {
  const heart = { color: '#000fff' };
  return (
    <div>
      <Heart color={heart.color} />
      {' '}
      :
    </div>
  );
};

export default Loading;
