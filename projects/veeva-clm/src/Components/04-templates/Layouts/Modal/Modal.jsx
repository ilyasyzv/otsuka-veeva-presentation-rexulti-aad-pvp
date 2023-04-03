import React, { useState, useCallback } from 'react';
import { useLongPress } from 'use-long-press';
import './Modal.scss';
import { SwitchContent } from '@molecules/SwitchContent/SwitchContent';
import { useBetween } from 'use-between';

const useModalManager = () => {
  const [modals, setModals] = useState([]);
  return {
    modals,
    setModals,
  };
};

const useSharedModalManager = () => useBetween(useModalManager);

const classNames = require('classnames');

const LinkDefault = <p>Show Modal</p>;

export const Modal = ({
  id = null,
  link = LinkDefault,
  children,
  showPlus = false,
  isExpanded = false,
  withFooter = false,
  isSwitchPopup = false,
}) => {
  const [shouldShow, setShouldShow] = useState(false);
  const { modals, setModals } = useSharedModalManager();
  modals.push({ link, setShouldShow });
  setModals(modals);

  const openHandler = () => {
    modals.forEach((e) => e.setShouldShow(false));
    setShouldShow(true);
  };
  const closeHandler = () => setShouldShow(false);

  const openSwitchPopup = useLongPress(() => {
    openHandler();
  });

  const simpleContent = (
    <div className='modal-body' onClick={(e) => e.stopPropagation()}>
      {children}
    </div>
  );

  const modalOuterClass = classNames({
    modal: true,
    'modal-background': !isExpanded || withFooter,
    'modal-expanded': isExpanded,
    'modal-with-footer': withFooter,
  });

  const modalLinkWrapperClass = classNames({
    'modal-link-wrapper': true,
    active: shouldShow,
  });

  const modalClass = classNames({
    'modal-wrapper': true,
    'modal-wrapper__small': isSwitchPopup,
  });

  return (
    <>
      <div
        className={modalLinkWrapperClass}
        onClick={
          !isSwitchPopup ? (shouldShow ? closeHandler : openHandler) : null
        }
        {...(isSwitchPopup ? { ...openSwitchPopup() } : '')}
      >
        {link}
        {showPlus && <span className='overflow-open-element' />}
      </div>
      {shouldShow && (
        <div
          className={modalOuterClass}
          id={id ? `modal-${id}` : null}
          onClick={closeHandler}
        >
          <div className={modalClass}>
            <div className='modal-hide' onClick={closeHandler} />
            {isSwitchPopup ? (
              <SwitchContent closeHandler={closeHandler} />
            ) : (
              simpleContent
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
