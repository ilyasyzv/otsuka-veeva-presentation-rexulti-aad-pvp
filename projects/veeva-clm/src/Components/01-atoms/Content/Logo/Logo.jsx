import React from 'react';
import './Logo.scss'

export const Logo = ({ image }) => {
  return (
    <div className='logo'>
      { image }
    </div>
  );
};