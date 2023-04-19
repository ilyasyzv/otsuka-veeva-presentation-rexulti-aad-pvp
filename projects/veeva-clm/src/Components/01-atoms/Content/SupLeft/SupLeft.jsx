import React from 'react';
import './SupLeft.scss';

export const SupLeft = ({ text, big }) => {
  return <sup className={`sup-left ${big ? 'big' : ''}`}>{text}</sup>;
};

export default SupLeft;
