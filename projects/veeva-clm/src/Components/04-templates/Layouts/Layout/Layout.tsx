import React, { useContext, useEffect, useState } from 'react';
import './Layout.scss';
import Navbar from '@/Components/03-organisms/Navbar/Navbar';
import NavArrows from '@/Components/01-atoms/NavArrows/NavArrows';
import UpperNavBar from '@/Components/03-organisms/UpperNavBar/UpperNavBar';
import { findSubMenu, mainMenu } from '@/utils/processNavigation';
import { ISIModalContext, TISIModalValue } from '@/context/ISIModalContext';
import ModalISI from '@/Components/04-templates/Layouts/Modal/ModalISI';
import { PageContext } from '@/context/PageContext';
import { navigateLocal, navigateVeeva } from '@organisms/Routing';

type LayoutProps = {
  pageid?: string;
  children?: JSX.Element;
};

const lsISIModalKey = 'isi_modal';

export const Layout = ({ pageid, children = <>Loading</> }: LayoutProps) => {
  const { currentPage, changePage } = useContext<string>(PageContext);
  const { isiModalParams }: TISIModalValue = useContext(ISIModalContext);
  const [isShowISIModal, setIsShowISIModal] = useState(false);
  const subMenu = findSubMenu(currentPage, mainMenu.data, 0);

  useEffect(() => {
    if (isiModalParams.show) {
      setIsShowISIModal(true);
    }
  }, [isiModalParams.show]);

  const closePopUpHandler = () => {
    setIsShowISIModal(false);
    sessionStorage.setItem(lsISIModalKey, '1');
    if (process.env.NODE_ENV === 'production') {
      navigateVeeva(isiModalParams.pageName);
    } else {
      navigateLocal(changePage, isiModalParams.pageName);
    }
  };

  return (
    <>
      <div
        className={`page page--${currentPage.replace(/\./g, '_')}`}
        data-currentpage={currentPage}
      >
        <div className='page__wrapper'>
          <div className='left-pane'>
            <span className='left-pane__pager' />
            <Navbar />
          </div>
          <div className='right-pane'>{children}</div>
          {subMenu && <UpperNavBar tabs={subMenu} />}
          <NavArrows />
        </div>
      </div>
      <ModalISI isOpen={isShowISIModal} onClose={closePopUpHandler} />
    </>
  );
};

export default Layout;
