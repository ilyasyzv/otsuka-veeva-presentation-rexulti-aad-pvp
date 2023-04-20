import React, { useState } from 'react';
import './Popup.scss';

export interface PopupProps {
  link: React.ReactNode;
  content: React.ReactNode;
}

export function Popup({ link, content }: PopupProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openPopup = () => {
    setIsOpen(!isOpen);
  };

  if (isOpen) {
    const phoneVertical = document.getElementsByClassName('phone-vertical')[0];
    if (phoneVertical) {
      phoneVertical.classList.add('screen-no-scroll');
    }
  }

  return (
    <>
      <div className='popup--button' onClick={openPopup}>
        {link}
      </div>

      {isOpen && <div className='popup--box'>{content}</div>}
    </>
  );
}

export default Popup;
