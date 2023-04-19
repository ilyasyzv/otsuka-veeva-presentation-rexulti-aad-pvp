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
const HeaderDefault = <h1>Header content</h1>;
const FooterDefault = <p className='footnote'>Footer content</p>;

export const Modal = ({
  id = null,
  link = LinkDefault,
  children,
  openByDefault = false,
  showPlus = false,
  isExpanded = false,
  withHeader = false,
  header = HeaderDefault,
  withFooter = false,
  footer = FooterDefault,
  isSwitchPopup = false,
  customClass = '',
}) => {
  const [shouldShow, setShouldShow] = useState(openByDefault);
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
    <>
      <div className='modal-header' onClick={(e) => e.stopPropagation()}>
        {header}
      </div>
      <div className='modal-body' onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
      <div className='modal-footer' onClick={(e) => e.stopPropagation()}>
        {footer}
      </div>
    </>
  );

  const modalOuterClass = classNames(customClass, {
    modal: true,
    'modal-background': !isExpanded || withFooter,
    'modal-expanded': isExpanded,
    'modal-with-header': withHeader,
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
