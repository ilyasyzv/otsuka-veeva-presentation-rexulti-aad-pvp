import React from 'react';
import './ButtonBack.scss';

const classNames = require('classnames');

export const ButtonBack = ({ callback, custom }) => {
  const btnClass = classNames('button-back', custom);
  return <span className={btnClass} onClick={callback}></span>;
};

export default ButtonBack;
