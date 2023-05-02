import React, { useContext } from 'react';

import { PageContext } from '@/context/PageContext';
import UpperSubNavBar from '@atoms/UpperSubNavBar/UpperSubNavBar';
import { findPathInMenu, ILink, mainMenu } from '@/utils/processNavigation';
import SlideMenu from '@/Components/03-organisms/SlideMenu/SlideMenu';
import classNames from 'classnames';

import Link from '../Link/Link';
import './LinkGroup.scss';

interface LGLink extends ILink {
  addClass?: string;
  isPdf?: boolean;
}

type LinkGroupProps = {
  linkGroup: LGLink;
  parentNav?: ILink | boolean;
};

export const LinkGroup: React.FC<LinkGroupProps> = ({
  linkGroup,
  parentNav = false,
}) => {
  const { currentPage } = useContext(PageContext);

  const linksGroup = () => {
    const urls = [linkGroup.url.replace('/', '')];

    if (linkGroup.children) {
      linkGroup.children.forEach((child) =>
        urls.push(child.url.replace('/', '')),
      );
    }
    return urls;
  };

  const isActive = () => {
    if (parentNav) {
      const { parent } = findPathInMenu(currentPage, mainMenu.data);
      return linkGroup.url.includes(parent);
    }
    return linksGroup().includes(currentPage);
  };

  const { addClass } = linkGroup;

  const mainLinkClass = classNames({
    'main-nav__link': true,
    active: isActive(),
  });

  return (
    <li className={`${mainLinkClass} ${addClass || ''}`}>
      <div className='main-nav__link__wrapper'>
        {linkGroup.isPdf ? (
          <a
            href='https://www.otsuka-us.com/media/static/Rexulti-PI.pdf'
            target='_blank'
            rel='noreferrer'
          >
            {linkGroup.name}
          </a>
        ) : (
          <>
            <Link to={linkGroup.url}>
              <span dangerouslySetInnerHTML={{ __html: linkGroup.name }} />
            </Link>
            <UpperSubNavBar link={linkGroup.url} />
          </>
        )}
      </div>
    </li>
  );
};

export default LinkGroup;
