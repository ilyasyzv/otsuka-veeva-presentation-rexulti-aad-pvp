import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';
import PageContent from './A.3.0_Clinical_profile';

export default {
  title: 'CLM/Pages',
  component: 'A.3.0_Clinical_profile',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = () => {
  return (
    <AppStorybook
      path='A.3.0_Clinical_profile'
      background='a'
      components={PageContent}
    />
  );
};

export const A_3_0_Clinical_profile = Template.bind({});
