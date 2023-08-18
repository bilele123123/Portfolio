import React from 'react';
import Typewriter from 'typewriter-effect';

function TypewriterComponent() {
  return (
    <Typewriter
      options={{
        strings: ['Software Developer.', 'Web Designer.', 'Computer Enthusiast.', 'One Piece Fan.'],
        autoStart: true,
        loop: true,
      }}
    />
  );
}

export default TypewriterComponent;