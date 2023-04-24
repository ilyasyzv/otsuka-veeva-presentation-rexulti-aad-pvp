import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';
import PageContent from './R.3.1_Mechanism_of_action';

export default {
  title: 'CLM/Pages',
  component: 'R.3.1_Mechanism_of_action',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: React.FC = () => {
  return (
    <AppStorybook path='R.3.1_Mechanism_of_action' components={PageContent} />
  );
};

export const R_3_1_Mechanism_of_action: React.FC = Template.bind({});
