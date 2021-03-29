import React from 'react';
import { Heart } from 'react-awesome-spinners';

const Loading = () => {
  const heart = { color: '#10BBB5' };
  return (
    <div className="container">
      <span>Loading ...</span>
      <Heart color={heart.color} />
      {' '}
      :
    </div>
  );
};

export default Loading;
