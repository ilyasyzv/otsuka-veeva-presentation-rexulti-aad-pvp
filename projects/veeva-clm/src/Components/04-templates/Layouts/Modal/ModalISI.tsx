import React, { useState } from 'react';
import ButtonContinue from '@/Components/01-atoms/Content/ButtonContinue/ButtonContinue';
import Header from '@/Components/01-atoms/Content/Header/Header';
import { Scrollbars } from 'react-custom-scrollbars-2';

import './Modal.scss';
import './ModalISI.scss';

import HCEIContent from '@/content/hcei/hcei.mdx';
import ISIContent from '@/content/isi/index.mdx';

type TModalISI = {
  openByDefault: boolean;
};

type TUpdateEvent = {
  clientHeight: number;
  scrollHeight: number;
  scrollTop: number;
};

const lsISIModalKey = 'isi_modal';

const ModalISI = ({ openByDefault }: TModalISI) => {
  const [isModalOpen, setIsModalOpen] = useState(openByDefault);
  const [isButtonCloseDisabled, setIsButtonCloseDisabled] = useState(true);
  const [activePage, setActivePage] = useState(0);

  const updateHandler = (event: TUpdateEvent) => {
    const { clientHeight, scrollHeight, scrollTop } = event;

    if (clientHeight + scrollTop > scrollHeight - 350) {
      setIsButtonCloseDisabled(false);
    }
  };

  const closePopUpHandler = () => {
    setIsModalOpen(false);
    sessionStorage.setItem(lsISIModalKey, '1');
  };

  return (
    <div>
      {isModalOpen && (
        <div className='modal modal-background modal-isi'>
          <div className='modal-wrapper'>
            {activePage === 0 && (
              <div className='modal-page page-0'>
                <div className='modal-content'>
                  <Header
                    type='h2'
                    color='blue-600'
                    custom='mb-20'
                    bgcolor='transparent'
                  >
                    <span>Health Care Economic Information</span>
                  </Header>
                  <HCEIContent />
                </div>
                <div className='modal-actions'>
                  <p>Please accept and review the HCEI information above.</p>
                  <ButtonContinue
                    onClick={() => setActivePage((prev) => prev + 1)}
                  >
                    Accept and
                    <br />
                    Continue
                  </ButtonContinue>
                </div>
              </div>
            )}
            {activePage === 1 && (
              <div className='modal-page page-1'>
                <div className='modal-content'>
                  <Header
                    type='h2'
                    color='blue-600'
                    custom='mb-2'
                    bgcolor='transparent'
                  >
                    <span>
                      INDICATIONS and IMPORTANT SAFETY INFORMATION
                      <br />
                      for ABILIFY ASIMTUFII<sup>®</sup> (aripiprazole) and
                      <br />
                      ABILIFY MAINTENA<sup>®</sup> (aripiprazole)
                    </span>
                  </Header>
                  <Scrollbars
                    className='custom-scrollbar'
                    thumbMinSize={30}
                    onUpdate={updateHandler}
                    thumbSize={43}
                    style={{ height: '510px' }}
                  >
                    <div className='modal-isi'>
                      <ISIContent />
                    </div>
                  </Scrollbars>
                </div>
                <div className='modal-actions'>
                  <p>
                    Scroll to review{' '}
                    <strong>
                      Indications and Important Safety Information
                    </strong>
                    .
                  </p>
                  <ButtonContinue
                    onClick={closePopUpHandler}
                    disabled={isButtonCloseDisabled}
                  >
                    Continue
                  </ButtonContinue>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalISI;
