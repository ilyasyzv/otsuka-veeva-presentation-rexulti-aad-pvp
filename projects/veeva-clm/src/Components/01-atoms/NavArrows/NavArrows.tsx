import React, { useContext } from 'react';
import { PageContext } from '@/context/PageContext';
import { navigateLocal } from '@/Components/03-organisms/Routing/Link/Link';
import { flatLinksList, mainMenu } from '@/utils/processNavigation';
import styles from './NavArrows.module.scss';

export const NavArrows: React.FC = () => {
  const { currentPage, changePage } = useContext(PageContext);

  const { currentPosition, paths } = flatLinksList(
    { ...mainMenu },
    currentPage,
  );

  const moveToNext = () => {
    if (process.env.NODE_ENV === 'production') {
      (window as any).com.veeva.clm.nextSlide();
    } else {
      const nextPosition =
        paths.length - 1 === currentPosition ? 0 : currentPosition + 1;
      const preparedPageName = paths[nextPosition].url.replace('/', '');
      navigateLocal(changePage, preparedPageName);
    }
  };

  const moveToPrev = () => {
    if (process.env.NODE_ENV === 'production') {
      (window as any).com.veeva.clm.prevSlide();
    } else {
      const prevPosition =
        currentPosition === 0 ? paths.length - 1 : currentPosition - 1;
      const preparedPageName = paths[prevPosition].url.replace('/', '');
      navigateLocal(changePage, preparedPageName);
    }
  };

  return (
    <div className={styles['arrows-nav']}>
      <button type='button' onClick={moveToPrev} className='arrows-nav__prev'>
        Prev
      </button>
      <button
        type='button'
        onClick={moveToNext}
        className={styles['arrows-nav__next']}
      >
        Next
      </button>
    </div>
  );
};

export default NavArrows;
