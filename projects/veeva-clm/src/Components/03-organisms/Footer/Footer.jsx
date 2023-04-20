import React from 'react';
import './Footer.scss';
import { FootNote } from '@/Components/01-atoms/Content/FootNote/FootNote';
import { References } from '@/Components/01-atoms/Content/References/References';
import { SafetyInfo } from '@/Components/01-atoms/Content/SafetyInfo/SafetyInfo';
import { Logo } from '@/Components/01-atoms/Content/Logo/Logo';

const classNames = require('classnames');

export const Footer = ({
  custom,
  footnotes,
  references,
  safetyInfo,
  image,
}) => {
  const customClass = custom || '';

  return (
    <footer className={classNames('footer', customClass)}>
      {footnotes && (
        <FootNote custom={footnotes.custom} footnotes={footnotes.data} />
      )}
      {references && (
        <References custom={references.custom} references={references.data} />
      )}
      {safetyInfo && (
        <SafetyInfo custom={safetyInfo.custom} safetyInfo={safetyInfo.data} />
      )}
      {image && <Logo image={image} />}
    </footer>
  );
};
