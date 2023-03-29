import React from 'react';
import ButtonBack from '@atoms/Content/ButtonBack/ButtonBack';
import Link from '@organisms/Routing/Link/Link';
import classNames from 'classnames';
import './ButtonBackNavigation.scss';

export const ButtonBackNavigation = ({ to, custom }) => {
  const customClass = custom || '';

  const navigationClass = classNames('button-back-navigation', customClass);

  return (
    <Link to={to} custom={navigationClass}>
      <ButtonBack />
    </Link>
  );
};

export default ButtonBackNavigation;
