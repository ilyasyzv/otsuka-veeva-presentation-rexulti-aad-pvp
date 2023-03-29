import React, { useRef, useState } from 'react';
import Lottie from 'react-lottie-player';
import lottieJson from '../../../../assets/lottie-animation/badge-animation.json';
import './style.scss';

const Badge = () => {
  const lottieRef = useRef();
  const [animationFrame] = useState(0);
  const [playAnimation] = useState(true);

  return (
    <Lottie
      className={'badge'}
      loop={false}
      ref={lottieRef}
      goTo={animationFrame}
      play={playAnimation}
      animationData={lottieJson}
      rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
    />
  );
};

export default Badge;
