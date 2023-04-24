import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';
import PageContent from './R.2.5_AAD_agitation_in_dementia';

export default {
  title: 'CLM/Pages',
  component: 'R.2.5_AAD_agitation_in_dementia',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: React.FC = () => {
  return (
    <AppStorybook
      path='R.2.5_AAD_agitation_in_dementia'
      components={PageContent}
    />
  );
};

export const R_2_5_AAD_agitation_in_dementia: React.FC = Template.bind({});
