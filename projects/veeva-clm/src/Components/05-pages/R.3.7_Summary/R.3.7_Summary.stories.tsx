import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';
import PageContent from './R.3.7_Summary';

export default {
  title: 'CLM/Pages',
  component: 'R.3.7_Summary',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: React.FC = () => {
  return <AppStorybook path='R.3.7_Summary' components={PageContent} />;
};

export const R_3_7_Summary: React.FC = Template.bind({});
