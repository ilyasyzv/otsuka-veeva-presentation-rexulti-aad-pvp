import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';
import PageContent from './R.3.6_Dosing';

export default {
  title: 'CLM/Pages',
  component: 'R.3.6_Dosing',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: React.FC = () => {
  return <AppStorybook path='R.3.6_Dosing' components={PageContent} />;
};

export const R_3_6_Dosing: React.FC = Template.bind({});
