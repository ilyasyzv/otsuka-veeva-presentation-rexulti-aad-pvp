import React from 'react';
import './Logo.scss';
import { LogoProps } from '@/types';

export const Logo: React.FC<LogoProps> = ({ images }) => (
  <div className='logo'>
    {images && images.map((image: React.ReactNode) => image)}
  </div>
);

export default Logo;
