import React from 'react';
import OuestionIcon from './img/question_icon.png?format=webp';
import './style.scss';

const Indicator = () => {
  return (
    <div className='block--patch'>
      <div>Patch Ok</div>
      <img src={OuestionIcon} width={32} />
    </div>
  );
};

export default Indicator;
