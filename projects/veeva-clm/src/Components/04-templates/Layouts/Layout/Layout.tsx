import React, { useContext } from 'react';
import './Layout.scss';
import { BottomNavigation } from '../BottomNavigation';
import PageContext from '../../../../context/PageContext';

type LayoutProps = {
  pageid?: string;
  children?: JSX.Element;
};

export const Layout = ({ pageid, children = <>Loading</> }: LayoutProps) => {
  const [currentPage] = useContext<string>(PageContext);

  return (
    <div
      className={`page page--${currentPage.replace(/\./g, '_')}`}
      data-currentpage={currentPage}
    >
      <div className='page__wrapper'>{children}</div>
      {/* <div style={{ color: 'white', height: '40px', textAlign: 'center' }}> */}
      {/*  Some new component with text */}
      {/* </div> */}
      <BottomNavigation />
    </div>
  );
};

export default Layout;
