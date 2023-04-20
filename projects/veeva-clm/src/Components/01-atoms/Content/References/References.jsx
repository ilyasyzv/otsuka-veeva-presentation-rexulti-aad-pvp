import React from 'react';
import './References.scss';

const classNames = require('classnames');

export const References = ({ custom, references }) => {
  const customClass = custom || '';

  return (
    <div className={classNames('references', customClass)}>
      <strong>{references.length > 1 ? 'References: ' : 'Reference: '}</strong>
      {references.map((ref, index) => {
        const fileClass = (ref.url && 'file') || '';

        return (
          <span key={index}>
            <strong>{index + 1}.</strong>&nbsp;
            <span className={classNames(fileClass)}>{ref.text}</span>{' '}
          </span>
        );
      })}
    </div>
  );
};
