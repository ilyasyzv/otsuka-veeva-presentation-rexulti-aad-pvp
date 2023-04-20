import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';

export default {
  title: 'CLM/Pages',
  component: 'R.2.4_AAD_Overview',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['R_2_4_AAD_Overview_content'],
};

const content = (): JSX.Element => <div>R.2.4_AAD_Overview page</div>;

const Template: React.FC = () => {
  return <AppStorybook path='R.2.4_AAD_Overview' components={content} />;
};

export const R_2_4_AAD_Overview: React.FC = Template.bind({});
export const R_2_4_AAD_Overview_content: () => JSX.Element = content.bind({});
