import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';
import PageContent from './R.0.1_Popup_isi';

export default {
  title: 'CLM/Pages',
  component: 'R.0.1_Popup_isi',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: React.FC = () => {
  return <AppStorybook path='R.0.1_Popup_isi' components={PageContent} />;
};

export const R_0_1_Popup_isi: React.FC = Template.bind({});
