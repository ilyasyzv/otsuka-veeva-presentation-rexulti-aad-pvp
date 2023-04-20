import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';

export default {
  title: 'CLM/Pages',
  component: 'R.3.4.1_Study_7',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['R_3_4_1_Study_7_content'],
};

const content = (): JSX.Element => <div>R.3.4.1_Study_7 page</div>;

const Template: React.FC = () => {
  return <AppStorybook path='R.3.4.1_Study_7' components={content} />;
};

export const R_3_4_1_Study_7: React.FC = Template.bind({});
export const R_3_4_1_Study_7_content: () => JSX.Element = content.bind({});
