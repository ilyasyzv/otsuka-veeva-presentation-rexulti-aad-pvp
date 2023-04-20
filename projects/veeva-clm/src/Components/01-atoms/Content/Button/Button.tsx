import React from 'react';
import './Button.scss';

interface ButtonProps {
  text: string;
  callback?: () => void;
  custom?: string;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  callback,
  custom = '',
}) => {
  const buttonClass = `button ${custom}`;

  const handleClick = () => {
    if (callback) {
      callback();
    }
  };

  return (
    <div className={buttonClass} onClick={handleClick}>
      <div className='button__text'>{text}</div>
    </div>
  );
};

export default Button;
