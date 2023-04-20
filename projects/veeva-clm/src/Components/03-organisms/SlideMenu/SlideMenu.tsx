import React, { useState } from 'react';
import Link from '@/Components/03-organisms/Routing/Link/Link';
import { ILink } from '@/utils/processNavigation';

import './SlideMenu.scss';

type TSlideMenu = {
  data: ILink;
};

const SlideMenu = ({ data }: TSlideMenu) => {
  const [isSlideOpen, setIsSlideOpen] = useState(false);

  return (
    <>
      <div className={`button-wrapper ${isSlideOpen ? 'active' : ''}`}>
        <button type='button' onClick={() => setIsSlideOpen((prev) => !prev)}>
          {data.name}
        </button>
      </div>
      {data.children && (
        <div className={`slide-menu ${isSlideOpen ? 'open' : ''}`}>
          <div className='slide-menu-inner'>
            {data.children.map((link) => (
              <Link key={link.url} to={link.url} custom=''>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SlideMenu;
