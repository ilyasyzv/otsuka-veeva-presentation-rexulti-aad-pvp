import React, { Fragment, useContext } from 'react';

import { LinkGroup } from '@organisms/Routing/LinkGroup/LinkGroup';
import './Navbar.scss';
import Link from '@organisms/Routing/Link/Link';
import { PageContext } from '@/context/PageContext';
import { mainMenu, bottomMenu, flapMenu } from '@/utils/processNavigation';

export const Navbar = () => {
  const { currentPage } = useContext(PageContext);
  const isHomepage =
    currentPage === '01_Launch_screen' || currentPage === 'A.0.Home'
      ? 'navigation__homepage--active'
      : 'navigation__homepage';
  const links = flapMenu(mainMenu.data, 0);

  return (
    <div className='navigation'>
      <div className='navigation__head'>
        <Link to='A.0.Home' custom='navigation__homepage-link' />
        <span className={isHomepage} />
      </div>
      <ul className='main-nav'>
        {links.map((link, i) => (
          <LinkGroup linkGroup={link} key={link.url} parentNav={true} />
        ))}
      </ul>
      <ul className='main-bottom-nav'>
        {bottomMenu.data.map((link, i) => (
          <Fragment key={link.url}>
            <LinkGroup linkGroup={link} />
            <span className='main-bottom-nav__splitter' />
          </Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
