import React from 'react';
import './FootNote.scss';

const classNames = require('classnames');

export const FootNote = ({ custom, children = <>Loading</> }) => {
  const customClass = custom || '';

  return <div className={classNames('footnote', customClass)}>{children}</div>;
};

export default FootNote;
