import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';

export default {
  title: 'CLM/Pages',
  component: 'R.3.2_Clinical_studies_overview',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['R_3_2_Clinical_studies_overview_content'],
};

const content = (): JSX.Element => <div>R.3.2_Clinical_studies_overview page</div>;

const Template: React.FC = () => {
  return <AppStorybook path='R.3.2_Clinical_studies_overview' components={content} />;
};

export const R_3_2_Clinical_studies_overview: React.FC = Template.bind({});
export const R_3_2_Clinical_studies_overview_content: () => JSX.Element = content.bind({});
