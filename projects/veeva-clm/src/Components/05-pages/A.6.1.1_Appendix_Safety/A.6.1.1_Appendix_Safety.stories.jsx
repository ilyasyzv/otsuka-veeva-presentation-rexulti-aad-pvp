import { AppStorybook } from '@pages/AppStorybook';

export default {
  title: 'CLM/Pages',
  component: 'A.6.1.1_Appendix_Safety',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_6_1_1_Appendix_Safety_content'],
};

const content = () => <div>Place components here</div>;

const Template = () => {
  return (
    <AppStorybook
      path='A.6.1.1_Appendix_Safety'
      background='a'
      components={content}
    />
  );
};

export const A_6_1_1_Appendix_Safety = Template.bind({});
export const A_6_1_1_Appendix_Safety_content = content.bind({});
