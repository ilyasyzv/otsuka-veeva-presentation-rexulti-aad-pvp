import React from 'react';
import { Button } from '@atoms/Content/Button/button';
import './SwitchContent.scss';

export const SwitchContent = ({ closeHandler }) => {
  const transferToAntherCLM = () =>
    window.com.veeva.clm.gotoSlide('A_0_Home.zip', '09US22EBP0122');

  return (
    <>
      <div className='switch-title'>Switch to detail another product?</div>
      <div className='buttons-wrapper'>
        <Button
          text='Remain in current detail presentation'
          custom='button__remain'
          callback={closeHandler}
        />
        <Button
          text='Switch to other product detail presentation'
          custom='button__switch'
          callback={transferToAntherCLM}
        />
      </div>
    </>
  );
};

export default SwitchContent;
