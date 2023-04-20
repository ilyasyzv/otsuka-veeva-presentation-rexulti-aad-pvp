import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';

export default {
  title: 'CLM/Pages',
  component: 'R.3.6_Dosing',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['R_3_6_Dosing_content'],
};

const content = (): JSX.Element => <div>R.3.6_Dosing page</div>;

const Template: React.FC = () => {
  return <AppStorybook path='R.3.6_Dosing' components={content} />;
};

export const R_3_6_Dosing: React.FC = Template.bind({});
export const R_3_6_Dosing_content: () => JSX.Element = content.bind({});
