import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';
import PageContent from './R.2.2_AAD_Reported';

export default {
  title: 'CLM/Pages',
  component: 'R.2.2_AAD_reported',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: React.FC = () => {
  return <AppStorybook path='R.2.6_AAD_Overview' components={PageContent} />;
};
/**
 * Default usage.
 */
export const R_2_2_AAD_Reported: React.FC = Template.bind({});
