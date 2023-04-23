import React from 'react';
import './References.scss';
import { ReferencesProps, ReferencesType } from '@/types';

const classNames = require('classnames');

export const References: React.FC<ReferencesProps> = ({
  custom = '',
  references,
}) => {
  return (
    <div className={classNames('references', custom)}>
      <strong>{references.length > 1 ? 'REFERENCES: ' : 'REFERENCE: '}</strong>
      {references.map((ref: ReferencesType, index: number) => {
        return (
          <span key={index}>
            <strong>{index + 1}.</strong> <span>{ref.text}</span>{' '}
          </span>
        );
      })}
    </div>
  );
};
