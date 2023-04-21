import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';
import PageContent from './R.4.0_Patient_support';

export default {
  title: 'CLM/Pages',
  component: 'R.4.0_Patient_support',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: React.FC = () => {
  return <AppStorybook path='R.4.0_Patient_support' components={PageContent} />;
};

export const R_4_0_Patient_support: React.FC = Template.bind({});
