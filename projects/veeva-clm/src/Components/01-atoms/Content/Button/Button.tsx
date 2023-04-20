import React from 'react';
import './Button.scss';

interface ButtonProps {
  text: string;
  callback: () => void;
  custom?: string;
}

export const Button: React.FC<ButtonProps> = ({ text, callback, custom }) => {
  const buttonClass = `button ${custom}`;
  return (
    <div className={buttonClass} onClick={callback}>
      <div className='button__text'>{text}</div>
    </div>
  );
};

export default Button;
