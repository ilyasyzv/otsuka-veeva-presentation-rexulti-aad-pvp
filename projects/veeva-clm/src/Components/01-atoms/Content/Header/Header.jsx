import React from 'react';
import './Header.scss';

const classNames = require('classnames');

export const Header = ({
  color,
  type,
  bgcolor,
  custom,
  children = <>Loading</>,
}) => {
  const HeaderTag = type ?? 'h1';
  const colorClass = color ? `font-${color}` : '';
  const bgColorClass = bgcolor ? `font-bg-color-${bgcolor}` : '';
  const customClass = custom || '';

  const headerClass = classNames(
    'heading',
    colorClass,
    bgColorClass,
    customClass,
  );

  return <HeaderTag className={headerClass}>{children}</HeaderTag>;
};

export default Header;
