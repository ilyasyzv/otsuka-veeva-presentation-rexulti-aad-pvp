import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';
import { Header } from '@atoms/Content/Header/Header';
import { Footer } from '@/Components/03-organisms/Footer/Footer';
import PageImage from "./img/page-image.png";
import './style.scss';

export default {
  title: 'CLM/Pages',
  component: 'A.2.1.1_S_Overview',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_2_1_1_S_Overview_content'],
};

const baseClass = 'page--A_2_1_1_S_Overview';
const content = () => (
  <>
    <Header custom={`${baseClass}-header-1 mb-35`}>
      Schizophrenia is a chronic and severe psychiatric disorder affecting ~1.1% of US adults<sup>1,2</sup>
    </Header>
    <img className={`${baseClass}-img-1`} src={PageImage} alt='' />
    <Footer
      custom='mb-7'
      references={{
        custom: 'mb-25',
        data: [
          {
            text: 'American Psychiatric Association. https://www.psychiatry.org/patients-families/schizophrenia/what-is-schizophrenia. Accessed March 21, 2023. '
          },
          {
            text: 'Treatment Advocacy Center. Accessed February 15, 2023. https://www.treatmentadvocacycenter.org/evidence-and-research/fast-facts '
          },
        ]
      }}
      safetyInfo={{
        data: [
          {
            text: <span>FOR USE WITH FORMULARY DECISION-MAKERS ONLY. DO NOT DUPLICATE OR DISTRIBUTE. </span>,
          },
        ],
      }}
    />
  </>
);

const Template = () => {
  return <AppStorybook path='A.2.1.1_S_Overview' components={content} />;
};

export const A_2_1_1_S_Overview = Template.bind({});
export const A_2_1_1_S_Overview_content = content.bind({});
