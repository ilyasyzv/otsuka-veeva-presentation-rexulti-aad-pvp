import React, { useContext } from 'react';
import { PageContext } from '@/context/PageContext';
import { ISIModalContext, TISIModalValue } from '@/context/ISIModalContext';
import { navigateLocal } from '@/Components/03-organisms/Routing/Link/Link';
import { flatLinksList, mainMenu } from '@/utils/processNavigation';
import styles from './NavArrows.module.scss';

const lsISIModalKey = 'isi_modal';

export const NavArrows: React.FC = () => {
  const { currentPage, changePage } = useContext(PageContext);
  const { setIsiModalParams } = useContext<TISIModalValue>(ISIModalContext);

  const { currentPosition, paths } = flatLinksList(
    { ...mainMenu },
    currentPage,
  );

  const moveToNext = () => {
    const lsISIModal = sessionStorage.getItem(lsISIModalKey);

    const nextPosition =
      paths.length - 1 === currentPosition ? 0 : currentPosition + 1;
    const preparedPageName = paths[nextPosition].url.replace('/', '');

    if (!lsISIModal) {
      setIsiModalParams({
        show: true,
        pageName: preparedPageName,
      });
    } else if (process.env.NODE_ENV === 'production') {
      (window as any).com.veeva.clm.nextSlide();
    } else {
      navigateLocal(changePage, preparedPageName);
    }
  };

  const moveToPrev = () => {
    const lsISIModal = sessionStorage.getItem(lsISIModalKey);

    const prevPosition =
      currentPosition === 0 ? paths.length - 1 : currentPosition - 1;
    const preparedPageName = paths[prevPosition].url.replace('/', '');

    if (!lsISIModal) {
      setIsiModalParams({
        show: true,
        pageName: preparedPageName,
      });
    } else if (process.env.NODE_ENV === 'production') {
      (window as any).com.veeva.clm.prevSlide();
    } else {
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
