import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';

export default {
  title: 'CLM/Pages',
  component: 'R.0.1_Popup_isi',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['R_0_1_Popup_isi_content'],
};

const content = (): JSX.Element => <div>R.0.1_Popup_isi page</div>;

const Template: React.FC = () => {
  return <AppStorybook path='R.0.1_Popup_isi' components={content} />;
};

export const R_0_1_Popup_isi: React.FC = Template.bind({});
export const R_0_1_Popup_isi_content: () => JSX.Element = content.bind({});
