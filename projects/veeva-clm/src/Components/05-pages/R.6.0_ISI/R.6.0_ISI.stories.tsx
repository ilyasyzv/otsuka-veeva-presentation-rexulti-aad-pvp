import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';
import PageContent from './R.6.0_ISI';

export default {
  title: 'CLM/Pages',
  component: 'R.6.0_ISI',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: React.FC = () => {
  return <AppStorybook path='R.6.0_ISI' components={PageContent} />;
};

export const R_6_0_ISI: React.FC = Template.bind({});
