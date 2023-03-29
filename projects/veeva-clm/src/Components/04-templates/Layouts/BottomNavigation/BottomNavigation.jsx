import React from 'react';
import { Modal } from '@templates/Layouts/Modal';
import './BottomNavigation.scss';

import { Page } from '@pages/Page';
import ISIContent from '@/content/isi/isi-full.mdx';

const classNames = require('classnames');

export const BottomNavigation = () => {
  const bottomNavClass = classNames({
    'bottom-nav__item': true,
  });

  const openEmail = () => {
    const callback = (result) => {
      console.log('result', result);
    };

    window.com.veeva.clm.launchApprovedEmail('', '', callback);
  };

  return (
    <div className='bottom-nav'>
      <div className={bottomNavClass}>
        <a
          href='https://www.otsuka-us.com/media/static/ABILIFY-MYCITE-PI.pdf?_ga=2.173395299.1526009820.1611183941-2033576871.1535760228'
          target='_blank'
        >
          FULL PRESCRIBING INFORMATION
        </a>
      </div>
      <div className={bottomNavClass}>
        <div className='isi-modal-wrapper'>
          <Modal
            link={<span>INDICATIONS and IMPORTANT SAFETY INFORMATION</span>}
            showPlus={false}
            isExpanded
            withFooter
          >
            <Page component={ISIContent} />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;
