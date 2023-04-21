import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';
import PageContent from './R.3.5_Study_6&7_safety';

export default {
  title: 'CLM/Pages',
  component: 'R.3.5_Study_6&7_safety',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: React.FC = () => {
  return <AppStorybook path='R.3.5_Study_6&7_safety' components={PageContent} />;
};

export const R_3_5_Study_6_and_7_safety: React.FC = Template.bind({});
