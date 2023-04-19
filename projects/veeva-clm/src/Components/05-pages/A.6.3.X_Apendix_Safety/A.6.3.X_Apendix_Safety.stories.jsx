import { AppStorybook } from '@pages/AppStorybook';

export default {
  title: 'CLM/Pages',
  component: 'A.6.3.X_Apendix_Safety',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_6_3_X_Apendix_Safety_content'],
};

const content = () => <div>Place components here</div>;

const Template = () => {
  return <AppStorybook path='A.6.3.X_Apendix_Safety' components={content} />;
};

export const A_6_3_X_Apendix_Safety = Template.bind({});
export const A_6_3_X_Apendix_Safety_content = content.bind({});
