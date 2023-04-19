import { AppStorybook } from '@pages/AppStorybook';

export default {
  title: 'CLM/Pages',
  component: 'A.6.2_Apendix_MOA',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_6_2_Apendix_MOA_content'],
};

const content = () => <div>Place components here</div>;

const Template = () => {
  return <AppStorybook path='A.6.2_Apendix_MOA' components={content} />;
};

export const A_6_2_Apendix_MOA = Template.bind({});
export const A_6_2_Apendix_MOA_content = content.bind({});
