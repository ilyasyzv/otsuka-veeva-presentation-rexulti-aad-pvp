import React from 'react';
import { LinkGroup } from '@organisms/Routing/LinkGroup/LinkGroup';
import './UpperNavBar.scss';

export const UpperNavBar = ({ tabs }) => {
  return (
    <div className='upper_nav_bar'>
      <ul className='upper_nav_bar__submenu'>
        {tabs.map((link) => (
          <LinkGroup linkGroup={link} key={link.url} />
        ))}
      </ul>
    </div>
  );
};

export default UpperNavBar;
