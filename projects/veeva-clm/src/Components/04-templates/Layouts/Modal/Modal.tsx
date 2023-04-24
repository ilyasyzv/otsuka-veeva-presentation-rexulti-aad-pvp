import React, { ReactNode, useState } from 'react';
import { useBetween } from 'use-between';
import classNames from 'classnames';
import { useLongPress } from 'use-long-press';

import { SwitchContent } from '@/Components/02-molecules/SwitchContent';

import './Modal.scss';

interface ModalProps {
  id?: string;
  link?: JSX.Element;
  openByDefault?: boolean;
  showPlus?: boolean;
  isExpanded?: boolean;
  withHeader?: boolean;
  header?: JSX.Element;
  withFooter?: boolean;
  footer?: JSX.Element;
  isSwitchPopup?: boolean;
  customClass?: string;
  children: ReactNode;
}

interface ModalContent {
  link?: JSX.Element;
  setShouldShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const useModalManager = () => {
  const [modals, setModals] = useState<ModalContent[]>([]);
  return {
    modals,
    setModals,
  };
};

const useSharedModalManager = () => useBetween(useModalManager);

const LinkDefault = <p>Show Modal</p>;
const HeaderDefault = <h1>Header content</h1>;
const FooterDefault = <p className='footnote'>Footer content</p>;

export const Modal = ({
  id,
  link = LinkDefault,
  openByDefault = false,
  showPlus = false,
  isExpanded = false,
  withHeader = false,
  header = HeaderDefault,
  withFooter = false,
  footer = FooterDefault,
  isSwitchPopup = false,
  customClass = '',
  children,
}: ModalProps) => {
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

  const modalHandler = shouldShow ? closeHandler : openHandler;

  return (
    <>
      <div
        className={modalLinkWrapperClass}
        onClick={modalHandler}
        {...(isSwitchPopup ? { ...openSwitchPopup() } : '')}
      >
        {link}
        {showPlus && <span className='overflow-open-element' />}
      </div>
      {shouldShow && (
        <div
          className={modalOuterClass}
          id={id ? `modal-${id}` : ''}
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
