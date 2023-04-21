import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';
import PageContent from './R.0.0_Home';

export default {
  title: 'CLM/Pages',
  component: 'R.0.0_Home',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: React.FC = () => {
  return <AppStorybook path='R.0.0_Home' components={PageContent} />;
};

export const R_0_0_Home: React.FC = Template.bind({});
