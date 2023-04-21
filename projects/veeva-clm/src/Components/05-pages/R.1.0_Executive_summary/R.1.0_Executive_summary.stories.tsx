import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';
import PageContent from './R.1.0_Executive_summary';

export default {
  title: 'CLM/Pages',
  component: 'R.1.0_Executive_summary',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: React.FC = () => {
  return (
    <AppStorybook path='R.1.0_Executive_summary' components={PageContent} />
  );
};

export const R_1_0_Executive_summary: React.FC = Template.bind({});
