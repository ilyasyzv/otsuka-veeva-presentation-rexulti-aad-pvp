import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';

export default {
  title: 'CLM/Pages',
  component: 'R.1.0_Executive_summary',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['R_1_0_Executive_summary_content'],
};

const content = (): JSX.Element => <div>R.1.0_Executive_summary page</div>;

const Template: React.FC = () => {
  return <AppStorybook path='R.1.0_Executive_summary' components={content} />;
};

export const R_1_0_Executive_summary: React.FC = Template.bind({});
export const R_1_0_Executive_summary_content: () => JSX.Element = content.bind({});
