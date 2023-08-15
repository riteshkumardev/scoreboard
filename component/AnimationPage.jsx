// src/AnimationPage.js
import React from 'react';
import { useSpring, animated } from 'react-spring';

const AnimationPage = () => {
  const animationProps = useSpring({
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    from: { opacity: 0, transform: 'translate3d(0, 100px, 0)' },
    config: { duration: 1000 },
  });

  return (
    <div className="animation-container">
      <animated.div style={animationProps} className="animation-element">
        <h4>कोठरा जमीन कैलक्यूलेटर</h4>
      </animated.div>
    </div>
  );
};

export default AnimationPage;
