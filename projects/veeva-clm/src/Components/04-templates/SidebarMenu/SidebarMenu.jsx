import React from 'react';
import './SidebarMenu.scss';
import Link from '@organisms/Routing/Link/Link';

const classNames = require('classnames');

const { useState } = React;

export const SidebarMenu = ({ custom }) => {
  const customClass = custom || '';
  const sidebarMenuClass = classNames('sidebar-menu', customClass);

  const [bar, setBar] = useState({ isHidden: true });
  const style = { display: bar.isHidden ? 'none' : 'block' };

  function toggleHidden() {
    setBar({ isHidden: !bar.isHidden });
  }

  return (
    <>
      <div className={sidebarMenuClass}>
        <div className='hamburger'>
          <span className={'icon'} onClick={toggleHidden} />
        </div>
        <div className='menu' style={style}>
          <ul>
            <li className='home'>
              <span>
                <span className={'icon'} />
                Home
              </span>
            </li>
          </ul>
          <ul>
            <li className='weekly-view'>
              <Link to={'13_Weekly_view'}>
                <span className={'icon'} />
                Weekly View
              </Link>
            </li>
            <li className='monthly-view'>
              <Link to={'14_Monthly_view'}>
                <span className={'icon'} />
                Monthly View
              </Link>
            </li>
          </ul>
          <ul>
            <li className='profile'>
              <span>
                <span className={'icon'} />
                Profile
              </span>
            </li>
            <li className='healthcare-providers'>
              <Link to={'15_Healthcare_providers'}>
                <span className={'icon'} />
                Healthcare Providers
              </Link>
            </li>
            <li className='family-friends'>
              <Link to={'16_Family_friends'}>
                <span className={'icon'} />
                Family & Friends
              </Link>
            </li>
          </ul>
          <ul>
            <li className='sign_out'>
              <span>
                <span className={'icon'} />
                Sign out
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SidebarMenu;
