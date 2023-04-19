import React from 'react';
import './button.scss';

const classNames = require('classnames');

export const Button = ({ text, callback, custom }) => {
  const btnClass = classNames('button', custom);
  return (
    <div className={btnClass} onClick={callback}>
      <div className={"button__text"}>
        {text}
      </div>
    </div>
  );
};

export default Button;
