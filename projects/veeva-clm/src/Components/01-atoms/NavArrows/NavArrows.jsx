import React from 'react';
import './NavArrows.scss';
import ArrowPrev from './img/arrow_prev.png?format=webp';
import ArrowNext from './img/arrow_next.png?format=webp';

export const NavArrows = () => {
  const moveToNext = () => {
    console.log('move to next');
    window.com.veeva.clm.nextSlide();
  };

  const moveToPrev = () => {
    console.log('move to prev');
    window.com.veeva.clm.prevSlide();
  };

  return (
  <div className='arrows-nav'>
    <img src={ArrowPrev} onClick={moveToPrev} className='arrows-nav__prev'/> |
    <img src={ArrowNext} onClick={moveToNext} className='arrows-nav__next'/>
  </div>
  )
};

export default NavArrows;
