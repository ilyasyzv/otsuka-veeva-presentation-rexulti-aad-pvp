import React, { useState } from 'react';

import './Popup.scss';

function Popup(props) {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(!isOpen);
  };

  if (isOpen) {
    document
      .getElementsByClassName('phone-vertical')[0]
      .classList.add('screen-no-scroll');
  }

  return (
    <>
      <div className='popup--button' onClick={openPopup}>
        {props.link}
      </div>

      {isOpen && <div className='popup--box'>{props.content}</div>}
    </>
  );
}

export default Popup;
