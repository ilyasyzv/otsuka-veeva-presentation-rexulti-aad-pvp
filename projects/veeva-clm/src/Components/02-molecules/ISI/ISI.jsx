import React from 'react';
import IsiContent from '@/content/isi/index.mdx';
import Page from '@pages/Page';
import './ISI.scss';

export const ISI = () => (
  <section
    id='drawer-isi'
    className='isi-tray jsIsiContainer isi-drawer-collapsed'
  >
    <Page component={IsiContent} />
  </section>
);

export default ISI;
