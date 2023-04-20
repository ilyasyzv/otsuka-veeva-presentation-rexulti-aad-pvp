import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';

export default {
  title: 'CLM/Pages',
  component: 'R.4.0_Patient_support',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['R_4_0_Patient_support_content'],
};

const content = (): JSX.Element => <div>R.4.0_Patient_support page</div>;

const Template: React.FC = () => {
  return <AppStorybook path='R.4.0_Patient_support' components={content} />;
};

export const R_4_0_Patient_support: React.FC = Template.bind({});
export const R_4_0_Patient_support_content: () => JSX.Element = content.bind({});
