import './ScrollToTop.scss';
import React, { useRef, useState } from 'react';

const classNames = require('classnames');

const ScrollToTopThreeScreens = ({
  start = (
    <>
      Scroll
      <br />
      for more
    </>
  ),
  end = 'Back to top',
  children,
  middle,
}) => {
  const [isTopPosition, setIsTopPosition] = useState(true);
  const myRefTop = useRef(null);
  const myRefBottom = useRef(null);

  const scrollUp = () => {
    const scrollPosition = document.querySelector(
      'div.scroll-container',
    ).scrollTop;
    if (scrollPosition < 520) {
      const element = document.querySelector(`.${middle}`);
      const scrollContainer = document.querySelector('div.scroll-container');
      scrollContainer.scrollTo({
        top: element.offsetTop - 46,
        left: 0,
        behavior: 'smooth',
      });
    } else if (scrollPosition >= 520 && scrollPosition <= 720) {
      myRefBottom.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else if (scrollPosition > 720) {
      const scrollContainer = document.querySelector('div.scroll-container');
      scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const checkIsTop = (e) => {
    const scrollPosition = e.target.scrollTop;

    if (scrollPosition <= 720) {
      setIsTopPosition(true);
    } else {
      setIsTopPosition(false);
    }
  };

  const buttonClass = classNames({
    'scroll-container__button': true,
    'scroll-container__button--on-top': isTopPosition,
    'scroll-container__button--on-bottom': !isTopPosition,
  });

  return (
    <>
      <div className='scroll-container' onScroll={checkIsTop}>
        <div className='topAnchor' ref={myRefTop} />
        {children}
        <div className='bottomAnchor' ref={myRefBottom} />
      </div>
      <div className={buttonClass} onClick={scrollUp}>
        <svg
          width='19px'
          height='11px'
          viewBox='0 0 19 11'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g
            stroke='none'
            strokeWidth='1'
            fill='none'
            fillRule='evenodd'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <g
              transform='translate(-3.000000, -6.000000)'
              stroke='#42711E'
              strokeWidth='2'
            >
              <polyline
                transform='translate(12.125000, 11.577881) rotate(-270.000000) translate(-12.125000, -11.577881) '
                points='8.20039062 3.57788086 16.0496094 11.5649902 8.20039062 19.5778809'
              />
            </g>
          </g>
        </svg>
        {isTopPosition ? start : end}
      </div>
    </>
  );
};

export default ScrollToTopThreeScreens;
