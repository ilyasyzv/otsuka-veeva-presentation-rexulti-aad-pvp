import React from 'react';
import './SupLeft.scss';
import { SupLeftProps } from '@/types';

export const SupLeft: React.FC<SupLeftProps> = ({ text, big }) => {
  return <sup className={`sup-left ${big ? 'big' : ''}`}>{text}</sup>;
};

export default SupLeft;
