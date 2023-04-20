import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';

export default {
  title: 'CLM/Pages',
  component: 'R.0.0_Home',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['R_0_0_Home_content'],
};

const content = (): JSX.Element => <div>R.0.0_Home page</div>;

const Template: React.FC = () => {
  return <AppStorybook path='R.0.0_Home' components={content} />;
};

export const R_0_0_Home: React.FC = Template.bind({});
export const R_0_0_Home_content: () => JSX.Element = content.bind({});
