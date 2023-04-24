import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';
import PageContent from './R.5.0_Appendix';

export default {
  title: 'CLM/Pages',
  component: 'R.5.0_Appendix',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: React.FC = () => {
  return <AppStorybook path='R.5.0_Appendix' components={PageContent} />;
};

export const R_5_0_Appendix: React.FC = Template.bind({});
