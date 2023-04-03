import React, { useContext } from 'react';
import './Layout.scss';
import PageContext from '../../../../context/PageContext';
import Navbar from "@/Components/03-organisms/Navbar/Navbar";
import EndIcon from './img/end-icon.png?format=webp';
import StartIcon from './img/start-icon.png?format=webp';
import NavArrows from "@/Components/01-atoms/NavArrows/NavArrows";

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
      <div className='page__wrapper'>
        <div className='left-pane'>
          <Navbar />
        </div>
        <div className='right-pane'>{children}</div>
        <NavArrows />
        <img className='icon-start' src={StartIcon.src} alt="end icon"/>
        <img className='icon-end' src={EndIcon.src} alt="end icon"/>
      </div>
    </div>
  )
};

export default Layout;
