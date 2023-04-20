import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';

export default {
  title: 'CLM/Pages',
  component: 'R.3.5_Study_6&7_safety',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['R_3_5_Study_6_and_7_safety_content'],
};

const content = (): JSX.Element => <div>R.3.5_Study_6&7_safety page</div>;

const Template: React.FC = () => {
  return <AppStorybook path='R.3.5_Study_6&7_safety' components={content} />;
};

export const R_3_5_Study_6_and_7_safety: React.FC = Template.bind({});
export const R_3_5_Study_6_and_7_safety_content: () => JSX.Element = content.bind({});
