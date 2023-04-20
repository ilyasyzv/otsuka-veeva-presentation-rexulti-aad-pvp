import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';

export default {
  title: 'CLM/Pages',
  component: 'R.3.0_Clinical_profile',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['R_3_0_Clinical_profile_content'],
};

const content = (): JSX.Element => <div>R.3.0_Clinical_profile page</div>;

const Template: React.FC = () => {
  return <AppStorybook path='R.3.0_Clinical_profile' components={content} />;
};

export const R_3_0_Clinical_profile: React.FC = Template.bind({});
export const R_3_0_Clinical_profile_content: () => JSX.Element = content.bind({});
