import React from 'react';
import './Footer.scss';
import { FootNote } from '@/Components/01-atoms/Content/FootNote/FootNote';
import { References } from '@/Components/01-atoms/Content/References/References';
import { SafetyInfo } from '@/Components/01-atoms/Content/SafetyInfo/SafetyInfo';
import { Logo } from '@/Components/01-atoms/Content/Logo/Logo';
import { FooterProps } from '@/types';
import classNames from 'classnames';

export const Footer: React.FC<FooterProps> = ({
  custom = '',
  footnotes,
  references,
  safetyInfo,
  image,
  footerArrow,
}) => {
  return (
    <footer className={classNames('footer', custom)}>
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
      {footerArrow && <div className='footer__arrow' />}
    </footer>
  );
};

export default Footer;
