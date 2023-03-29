import React, { useEffect } from 'react';
import './PageWrapper.scss';

//Todo: Delete this unused component
const classNames = require('classnames');

export const PageWrapper = ({
  type,
  stickyContent,
  scroll = true,
  bgTransparent = false,
  children,
  pageWrapperDidMount,
}) => {
  const typeClass = type ? `phone-${type}` : 'none';
  const scrollClass = scroll ? '' : 'screen-no-scroll';
  const bgTransparentClass = bgTransparent ? 'bg-transparent' : '';

  const wrapperClass = classNames(typeClass, scrollClass, bgTransparentClass);

  useEffect(() => {
    if (typeof pageWrapperDidMount == 'function') {
      pageWrapperDidMount();
    }
  }, []);

  return (
    <>
      <div className={wrapperClass}>
        <div className='sticky-content'>{stickyContent}</div>
        <div className='screen'>{children}</div>
        <div className='horizontal-btn' />
        <div className={'illustrative-data'}>
          Illustrative data. Not from a real patient.
        </div>
        <div className={'info-text'}>
          Only functions related to tracking<br/> drug ingestion
          have been<br/> evaluated or approved by FDA.
        </div>
      </div>
    </>
  );
};

export default PageWrapper;
