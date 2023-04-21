import React from 'react';
import { LinkGroup } from '@organisms/Routing/LinkGroup/LinkGroup';
import './UpperNavBar.scss';

export const UpperNavBar = ({ tabs }) => {
  const upperNavClass =
    tabs.length === 1 && tabs[0].name === ''
      ? 'upper_nav_bar--sub'
      : 'upper_nav_bar';
  return (
    <div className={upperNavClass}>
      <ul className='upper_nav_bar__submenu'>
        {tabs.map((link) => (
          <LinkGroup linkGroup={link} key={link.url} />
        ))}
      </ul>
    </div>
  );
};

export default UpperNavBar;
