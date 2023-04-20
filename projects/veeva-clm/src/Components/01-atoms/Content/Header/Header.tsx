import React from 'react';
import './Header.scss';
import classNames from 'classnames';

interface HeaderProps {
  color?: string;
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  bgcolor?: string;
  custom?: string;
  children?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({
  color,
  type = 'h1',
  bgcolor,
  custom = '',
  children = <>Loading</>,
}) => {
  const colorClass = color ? `font-${color}` : '';
  const bgColorClass = bgcolor ? `font-bg-color-${bgcolor}` : '';
  const headerClass = classNames('heading', colorClass, bgColorClass, custom);

  return <type className={headerClass}>{children}</type>;
};

export default Header;
