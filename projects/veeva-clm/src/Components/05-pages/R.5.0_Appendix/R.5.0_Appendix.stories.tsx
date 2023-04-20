import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';

export default {
  title: 'CLM/Pages',
  component: 'R.5.0_Appendix',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['R_5_0_Appendix_content'],
};

const content = (): JSX.Element => <div>R.5.0_Appendix page</div>;

const Template: React.FC = () => {
  return <AppStorybook path='R.5.0_Appendix' components={content} />;
};

export const R_5_0_Appendix: React.FC = Template.bind({});
export const R_5_0_Appendix_content: () => JSX.Element = content.bind({});
