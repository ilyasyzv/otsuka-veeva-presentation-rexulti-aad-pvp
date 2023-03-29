import React from 'react';
import Content from '@/content/page-not-found/index.mdx';
import { Page } from '@pages';

export const PageNotFound = () => (
  <section id='page-not-found' className='page page-not-found'>
    <Page component={Content} />
  </section>
);

export default PageNotFound;
