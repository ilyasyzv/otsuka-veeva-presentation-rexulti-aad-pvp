import React from 'react';
import { LinkGroup } from '@organisms/Routing/LinkGroup/LinkGroup';
import { ILink } from '@/utils/processNavigation';
import styled from './UpperNavBar.module.scss';

export const UpperNavBar: React.FC<{ tabs: ILink[] }> = ({ tabs }) => {
  const upperNavClass =
    tabs.length === 1 && tabs[0].name === ''
      ? styled['upper_nav_bar--sub']
      : styled.upper_nav_bar;
  return (
    <div className={upperNavClass}>
      <ul className={styled.upper_nav_bar__submenu}>
        {tabs.map((link) => (
          <LinkGroup linkGroup={link} key={link.url} />
        ))}
      </ul>
    </div>
  );
};

export default UpperNavBar;
