import React, { useState } from 'react';
import ButtonContinue from '@/Components/01-atoms/Content/ButtonContinue/ButtonContinue';
import Header from '@/Components/01-atoms/Content/Header/Header';
import { Scrollbar } from 'react-scrollbars-custom';

import './Modal.scss';
import './ModalISI.scss';

import HCEIContent from '@/content/hcei/hcei.mdx';
import ISIContent from '@/content/isi/index.mdx';

type TModalISI = {
  isOpen: boolean;
  onClose: () => void;
};

type TUpdateEvent = {
  clientHeight: number;
  scrollHeight: number;
  scrollTop: number;
};

const activateContinueOffset = 15;

const ModalISI = ({ isOpen = false, onClose }: TModalISI) => {
  const [isButtonCloseDisabled, setIsButtonCloseDisabled] = useState(true);
  const [activePage, setActivePage] = useState(0);

  const updateHandler = (event: TUpdateEvent) => {
    const { clientHeight, scrollHeight, scrollTop } = event;

    if (clientHeight + scrollTop > scrollHeight - activateContinueOffset) {
      setIsButtonCloseDisabled(false);
    }
  };

  return (
    <div>
      {isOpen && (
        <div className='modal modal-background modal-isi'>
          <div className='modal-wrapper'>
            {activePage === 0 && (
              <div className='modal-page page-1'>
                <div className='modal-content'>
                  <Scrollbar
                    minimalThumbSize={156}
                    maximalThumbSize={156}
                    noScrollX
                    onScroll={updateHandler}
                    style={{ height: '523px' }}
                  >
                    <div className='modal-isi'>
                      <Header type='h2' custom='mb-10'>
                        <span>
                          INDICATIONS and IMPORTANT SAFETY INFORMATION
                          <br />
                          for REXULTI® (brexpiprazole)
                        </span>
                      </Header>
                      <ISIContent />
                    </div>
                  </Scrollbar>
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
                    onClick={() => onClose()}
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
