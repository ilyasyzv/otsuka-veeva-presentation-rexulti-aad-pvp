import React from 'react';
import './SafetyInfo.scss';

const classNames = require('classnames');

export const SafetyInfo = ({ custom, safetyInfo }) => {
  const customClass = custom || '';

  return (
    <div className={classNames('safetyInfo', customClass)}>
      {safetyInfo.map((info, index) => (
        <p key={index}>{info.text}</p>
      ))}
    </div>
  );
};
