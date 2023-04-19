import React from 'react';

import './ButtonContinue.scss';

type TButtonContinue = {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
};

const ButtonContinue = ({
  children,
  onClick,
  disabled = false,
}: TButtonContinue) => {
  return (
    <button
      className='button-continue'
      type='button'
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ButtonContinue;
