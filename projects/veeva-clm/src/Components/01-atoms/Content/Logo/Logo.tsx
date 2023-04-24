import React from 'react';
import './Logo.scss';
import { LogoProps } from '@/types';

export const Logo: React.FC<LogoProps> = ({ image }) => {
  return <div className='logo'>{image}</div>;
};
