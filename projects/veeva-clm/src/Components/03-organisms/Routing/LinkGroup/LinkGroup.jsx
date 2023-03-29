import React, { useContext } from 'react';
import { PageContext } from '@/context/PageContext';
import Link from '../Link/Link';
import './LinkGroup.scss';

const classNames = require('classnames');

export const LinkGroup = ({ linkGroup }) => {
  const [currentPage] = useContext(PageContext);

  const linksGroup = () => {
    const urls = [linkGroup.url.replace('/', '')];

    if (linkGroup.children) {
      linkGroup.children.forEach((child) =>
        urls.push(child.url.replace('/', '')),
      );
    }
    return urls;
  };

  const isActive = () => linksGroup().includes(currentPage);

  const isCurrent = (url) => url.replace('/', '') === currentPage;

  const makeSublinks = (children) => {
    if (!children) {
      return null;
    }

    return (
      <ul>
        {children.map((sublink, i) => (
          <li
            key={i}
            className={`main-nav__sublink ${
              isCurrent(sublink.url) ? 'current' : ''
            }`}
          >
            <Link to={sublink.url}>{sublink.name}</Link>
          </li>
        ))}
      </ul>
    );
  };

  const { addClass } = linkGroup;

  const mainLinkClass = classNames({
    'main-nav__link': true,
    active: isActive(),
  });

  return (
    <li className={`${mainLinkClass} ${addClass || ''}`}>
      <Link to={linkGroup.url}>{linkGroup.name}</Link>
      {makeSublinks(linkGroup.children)}
    </li>
  );
};

export default LinkGroup;
