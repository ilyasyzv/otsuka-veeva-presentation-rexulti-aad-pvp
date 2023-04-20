import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';

export default {
  title: 'CLM/Pages',
  component: 'R.3.1_Mechanism_of_action',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['R_3_1_Mechanism_of_action_content'],
};

const content = (): JSX.Element => <div>R.3.1_Mechanism_of_action page</div>;

const Template: React.FC = () => {
  return <AppStorybook path='R.3.1_Mechanism_of_action' components={content} />;
};

export const R_3_1_Mechanism_of_action: React.FC = Template.bind({});
export const R_3_1_Mechanism_of_action_content: () => JSX.Element = content.bind({});
