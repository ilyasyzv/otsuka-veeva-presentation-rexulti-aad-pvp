import { AppStorybook } from '@pages/AppStorybook';

export default {
  title: 'CLM/Pages',
  component: 'A.5.2_Patients_support_providers',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_5_2_Patients_support_providers_content'],
};

const content = () => <div>Place components here</div>;

const Template = () => {
  return <AppStorybook path='A.5.2_Patients_support_providers' components={content} />;
};

export const A_5_2_Patients_support_providers = Template.bind({});
export const A_5_2_Patients_support_providers_content = content.bind({});
