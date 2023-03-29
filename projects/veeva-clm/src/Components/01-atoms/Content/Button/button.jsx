import React from 'react';
import './button.scss';

const classNames = require('classnames');

export const Button = ({ text, callback, custom }) => {
  const btnClass = classNames('button', custom);
  return (
    <div className={btnClass} onClick={callback}>
      {text}
    </div>
  );
};

export default Button;
