import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';

export default {
  title: 'CLM/Pages',
  component: 'R.6.0_ISI',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['R_6_0_ISI_content'],
};

const content = (): JSX.Element => <div>R.6.0_ISI page</div>;

const Template: React.FC = () => {
  return <AppStorybook path='R.6.0_ISI' components={content} />;
};

export const R_6_0_ISI: React.FC = Template.bind({});
export const R_6_0_ISI_content: () => JSX.Element = content.bind({});
