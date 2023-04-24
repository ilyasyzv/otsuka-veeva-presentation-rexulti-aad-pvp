import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';
import PageContent from './R.3.3.3_Study_6';

export default {
  title: 'CLM/Pages',
  component: 'R.3.3.3_Study_6',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: React.FC = () => {
  return <AppStorybook path='R.3.3.3_Study_6' components={PageContent} />;
};

export const R_3_3_3_Study_6: React.FC = Template.bind({});
