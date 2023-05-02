import React, { Fragment, useContext } from 'react';
import classNames from 'classnames';

import { LinkGroup } from '@/Components/03-organisms/Routing/LinkGroup/LinkGroup';
import Link from '@/Components/03-organisms/Routing/Link/Link';
import { PageContext } from '@/context/PageContext';
import { bottomMenu, flapMenu, mainMenu } from '@/utils/processNavigation';
import styles from './Navbar.module.scss';

export const Navbar: React.FC = () => {
  const { currentPage } = useContext(PageContext);
  const isHomepage = !!(currentPage === 'R.0.0_Home');
  const links = flapMenu(mainMenu.data, 0);
  const bem = (mainClass: string, isActive: boolean): string => {
    return isActive
      ? classNames(styles[`${mainClass}`], styles[`${mainClass}--active`])
      : styles[`${mainClass}`];
  };

  return (
    <div className={styles.navigation}>
      <div className={styles.navigation__head}>
        <Link
          to='R.0.0_Home'
          custom={bem('navigation__homepage-link', isHomepage)}
        />
        <span className={bem('navigation__homepage', isHomepage)} />
      </div>
      <ul className={styles['main-nav']}>
        {links.map((link, i) => (
          <LinkGroup linkGroup={link} key={link.url} parentNav />
        ))}
      </ul>
      <ul className={styles['main-bottom-nav']}>
        {bottomMenu.data.map((link, i) => (
          <Fragment key={link.url}>
            <LinkGroup linkGroup={link} />
            <span className={styles['main-bottom-nav__splitter']} />
          </Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
