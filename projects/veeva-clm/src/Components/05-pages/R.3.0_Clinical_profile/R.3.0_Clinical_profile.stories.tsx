import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';
import PageContent from './R.3.0_Clinical_profile';

export default {
  title: 'CLM/Pages',
  component: 'R.3.0_Clinical_profile',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: React.FC = () => {
  return (
    <AppStorybook path='R.3.0_Clinical_profile' components={PageContent} />
  );
};

export const R_3_0_Clinical_profile: React.FC = Template.bind({});
