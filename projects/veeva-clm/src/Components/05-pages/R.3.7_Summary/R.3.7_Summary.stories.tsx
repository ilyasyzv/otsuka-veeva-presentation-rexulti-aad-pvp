import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';

export default {
  title: 'CLM/Pages',
  component: 'R.3.7_Summary',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['R_3_7_Summary_content'],
};

const content = (): JSX.Element => <div>R.3.7_Summary page</div>;

const Template: React.FC = () => {
  return <AppStorybook path='R.3.7_Summary' components={content} />;
};

export const R_3_7_Summary: React.FC = Template.bind({});
export const R_3_7_Summary_content: () => JSX.Element = content.bind({});
