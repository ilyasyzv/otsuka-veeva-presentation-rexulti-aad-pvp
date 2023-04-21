import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';
import PageContent from './R.2.6_AAD_Overview';

export default {
  title: 'CLM/Pages',
  component: 'R.2.6_AAD_Overview',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: React.FC = () => {
  return <AppStorybook path='R.2.6_AAD_Overview' components={PageContent} />;
};

export const R_2_6_AAD_Overview_content: React.FC = Template.bind({});

