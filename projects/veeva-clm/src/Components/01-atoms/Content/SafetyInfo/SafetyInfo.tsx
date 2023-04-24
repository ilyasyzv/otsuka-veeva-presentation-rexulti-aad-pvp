import React from 'react';
import './SafetyInfo.scss';
import { SafetyInfoProps, SafetyInfoType } from '@/types';

const classNames = require('classnames');

export const SafetyInfo: React.FC<SafetyInfoProps> = ({
  custom = '',
  safetyInfo,
}) => {
  return (
    <div className={classNames('safetyInfo', custom)}>
      {safetyInfo.map((info: SafetyInfoType, index: number) => (
        <p key={index}>{info.text}</p>
      ))}
    </div>
  );
};
