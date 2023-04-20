import React, { useContext } from 'react';
import './NavArrows.scss';
import { PageContext } from '@/context/PageContext';
import { navigateLocal } from '@organisms/Routing/Link/Link';
import { mainMenu, flatLinksList } from '@/utils/processNavigation';

export const NavArrows = () => {
  const { currentPage, changePage } = useContext(PageContext);

  const { currentPosition, paths } = flatLinksList(
    { ...mainMenu },
    currentPage,
  );

  const moveToNext = () => {
    if (process.env.NODE_ENV === 'production') {
      window.com.veeva.clm.nextSlide();
    } else {
      const nextPosition =
        paths.length - 1 === currentPosition ? 0 : currentPosition + 1;
      const preparedPageName = paths[nextPosition].url.replace('/', '');
      navigateLocal(changePage, preparedPageName);
    }
  };

  const moveToPrev = () => {
    if (process.env.NODE_ENV === 'production') {
      window.com.veeva.clm.prevSlide();
    } else {
      const prevPosition =
        currentPosition === 0 ? paths.length - 1 : currentPosition - 1;
      const preparedPageName = paths[prevPosition].url.replace('/', '');
      navigateLocal(changePage, preparedPageName);
    }
  };

  return (
    <div className='arrows-nav'>
      <button type='button' onClick={moveToPrev} className='arrows-nav__prev'>
        Prev
      </button>
      <button type='button' onClick={moveToNext} className='arrows-nav__next'>
        Next
      </button>
    </div>
  );
};

export default NavArrows;
