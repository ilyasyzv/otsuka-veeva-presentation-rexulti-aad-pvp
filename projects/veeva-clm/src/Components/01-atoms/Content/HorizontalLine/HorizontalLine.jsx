import React from 'react';
import './HorizontalLine.scss';

const classNames = require('classnames');

export const HorizontalLine = ({ color, custom }) => {
  const colorClass = color ? `line-${color}` : '';
  const customClass = custom || '';

  return (
    <hr className={classNames('horizontal-line', colorClass, customClass)} />
  );
};

export default HorizontalLine;
