import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';
import PageContent from './R.3.2_Clinical_studies_overview';

export default {
  title: 'CLM/Pages',
  component: 'R.3.2_Clinical_studies_overview',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: React.FC = () => {
  return (
    <AppStorybook
      path='R.3.2_Clinical_studies_overview'
      components={PageContent}
    />
  );
};

export const R_3_2_Clinical_studies_overview: React.FC = Template.bind({});
