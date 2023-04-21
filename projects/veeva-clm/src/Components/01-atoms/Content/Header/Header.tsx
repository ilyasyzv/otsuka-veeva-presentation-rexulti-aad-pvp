import React, { HTMLAttributes, FC } from 'react';
import classNames from 'classnames';
import styles from './Header.module.scss';

type TagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type HeadingType = HTMLAttributes<HTMLHeadingElement>;

export type HeaderProps = HeadingType & {
  type?: TagType;
  custom?: string;
};

const Header: FC<HeaderProps> = ({
  children,
  type = 'h1',
  custom,
  ...props
}) => {
  const Tag = type;

  return (
    <Tag {...props} className={classNames(styles.heading, custom)}>
      {children}
    </Tag>
  );
};

export default Header;
