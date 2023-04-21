import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';
import PageContent from './R.3.4.2_Study_7';

export default {
  title: 'CLM/Pages',
  component: 'R.3.4.2_Study_7',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: React.FC = () => {
  return <AppStorybook path='R.3.4.2_Study_7' components={PageContent} />;
};

export const R_3_4_2_Study_7: React.FC = Template.bind({});
