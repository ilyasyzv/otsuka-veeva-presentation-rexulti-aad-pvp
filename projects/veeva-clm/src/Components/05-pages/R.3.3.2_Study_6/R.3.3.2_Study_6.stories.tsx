import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';

export default {
  title: 'CLM/Pages',
  component: 'R.3.3.2_Study_6',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['R_3_3_2_Study_6_content'],
};

const content = (): JSX.Element => <div>R.3.3.2_Study_6 page</div>;

const Template: React.FC = () => {
  return <AppStorybook path='R.3.3.2_Study_6' components={content} />;
};

export const R_3_3_2_Study_6: React.FC = Template.bind({});
export const R_3_3_2_Study_6_content: () => JSX.Element = content.bind({});
