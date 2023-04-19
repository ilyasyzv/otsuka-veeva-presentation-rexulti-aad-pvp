import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';
import { Header } from '@atoms/Content/Header/Header';
import { Footer } from '@/Components/03-organisms/Footer/Footer';
import PageImage from './img/page-image.png';

export default {
  title: 'CLM/Pages',
  component: 'A.2.2.3_B_Overview',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_2_2_3_B_Overview_content'],
};

const baseClass = 'page--A_1_0_Executive_summary';
const content = () => (
  <>
    <Header custom={`${baseClass}-header-1 mt-5 mb-70`}>
      Bipolar I disorder (BP-I) is associated with a considerable,
      disproportionate economic burden<sup>1</sup>
    </Header>
    <img
      className={`${baseClass}-img-1 m-0`}
      src={PageImage}
      alt=''
      width='820'
    />
    <Footer
      custom='mb-8'
      footnotes={{
        custom: 'mb-3',
        data: [
          {
            supLeft: '*',
            innerText: (
              <span>
                The difference between costs incurred by individuals living with
                and without BP-I (based on estimated prevalence in 2015).
              </span>
            ),
          },
          {
            supLeft: '†',
            innerText: (
              <span>Percentages do not add up to 100% due to rounding.</span>
            ),
          },
        ],
      }}
      references={{
        custom: 'mb-25',
        data: [
          {
            text: (
              <span>Cloutier M, et al. J Affect Disord. 2018;226:45-51.</span>
            ),
          },
        ],
      }}
      distance='18px'
      safetyInfo={{
        custom: 'mt-9',
        data: [
          {
            text: (
              <span>
                FOR USE WITH FORMULARY DECISION-MAKERS ONLY. DO NOT DUPLICATE OR
                DISTRIBUTE.
              </span>
            ),
          },
        ],
      }}
    />
  </>
);

const Template = () => {
  return <AppStorybook path='A.2.2.3_B_Overview' components={content} />;
};

export const A_2_2_3_B_Overview = Template.bind({});
export const A_2_2_3_B_Overview_content = content.bind({});
