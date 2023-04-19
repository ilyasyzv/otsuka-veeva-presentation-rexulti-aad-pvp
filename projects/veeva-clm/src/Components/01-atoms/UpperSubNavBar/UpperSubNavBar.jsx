import React, { Fragment, useContext } from 'react';
import './UpperSubNavBar.scss';
import { PageContext } from '@/context/PageContext';
import { mainMenu, findSubMenu } from '@/utils/processNavigation';

export const UpperSubNavBar = ({ link }) => {
  const { currentPage } = useContext(PageContext);
  const subMenu = findSubMenu(link, mainMenu.data, 1);
  if (!subMenu) return <ul />;
  const isActive = (url) => (url.includes(currentPage) ? 'active' : '');

  return (
    <ul>
      {subMenu.map((subLink) => (
        <li key={subLink.url} className={isActive(subLink.url)} />
      ))}
    </ul>
  );
};

export default UpperSubNavBar;
