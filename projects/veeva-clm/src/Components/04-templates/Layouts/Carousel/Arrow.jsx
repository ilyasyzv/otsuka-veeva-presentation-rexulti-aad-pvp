import React from 'react';

const RightSlide = ({ color, ...props }) => (
  <svg
    {...props}
    width='15'
    height='15'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 129 129'
    xlink='http://www.w3.org/1999/xlink'
    enableBackground='new 0 0 129 129'
  >
    <g stroke={color} strokeWidth='13' fill='none' fillRule='evenodd'>
      <path
        /* eslint-disable max-len */
        d='m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z'
        /* eslint-enable max-len */
      />
    </g>
  </svg>
);

const LeftSlide = ({ color, ...props }) => (
  <svg
    {...props}
    width='15'
    height='15'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
    xlink='http://www.w3.org/1999/xlink'
    viewBox='0 0 477.175 477.175'
  >
    <g stroke={color} strokeWidth='50' fill='none' fillRule='evenodd'>
      <path
        /* eslint-disable max-len */
        d='M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z'
        /* eslint-disable max-len */
      />
    </g>
  </svg>
);

export { LeftSlide, RightSlide };
