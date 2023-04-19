import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';
import PageContent from './A.3.1_Clinical_overview';

export default {
  title: 'CLM/Pages',
  component: 'A.3.1_Clinical_overview',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_3_1_Clinical_overview_content'],
};

const Template = () => {
  return (
    <AppStorybook path='A.3.1_Clinical_overview' components={PageContent} />
  );
};

export const A_3_1_Clinical_overview = Template.bind({});
