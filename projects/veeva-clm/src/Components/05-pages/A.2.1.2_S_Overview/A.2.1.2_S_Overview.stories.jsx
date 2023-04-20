import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';
import Header from '@/Components/01-atoms/Content/Header/Header';
import { FootNote } from '@/Components/01-atoms/Content/FootNote/FootNote';
import SchizophreniaImg1 from './img/Component 40 – 12.png?format=webp';
import SchizophreniaImg2 from './img/Component 41 – 13.png?format=webp';

import './A.2.1.2_S_Overview.scss';
import { Footer } from '@/Components/03-organisms/Footer/Footer';

export default {
  title: 'CLM/Pages',
  component: 'A.2.1.2_S_Overview',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_2_1_2_S_Overview_content'],
};

const blockName = 'A-2-1-2_S_Overview';

const content = () => (
  <div className={`${blockName}_wrapper`}>
    <Header custom='mb-18'>
      In schizophrenia, relapses and nonadherence are common and lead to higher
      costs of care<sup>1-3</sup>
    </Header>
    <Header type='h3' custom='mb-10'>
      Patients with schizophrenia experience relapsing episodes<sup>1</sup>
    </Header>
    <img src={SchizophreniaImg1} alt='' className='mb-40' />
    <Header type='h3' custom='mb-6'>
      Fewer than 50% of patients took their antipsychotic medication 80% or more
      of the time*<sup>2</sup>
    </Header>
    <p className={`${blockName}-text`}>
      Those who were not adherent to antipsychotic treatment had nearly:
    </p>
    <img src={SchizophreniaImg2} alt='' className={`${blockName}-img2`} />
    <Footer
      custom='mt-120'
      footnotes={{
        data: [
          {
            supLeftBig: '*',
            innerText: (
              <>
                Thirty-three studies assessed patient adherence to oral
                antipsychotic medications.<sup>2</sup>
              </>
            ),
          },
        ],
      }}
      references={{
        custom: 'mt-6',
        data: [
          {
            text: (
              <span>
                Ascher-Svanum H, et al. <em>BMC Psychiatry.</em> 2010:10:2.
              </span>
            ),
          },
          {
            text: (
              <span>
                Martin A, et al. <em>Adv Ther.</em> 2022,39(9):3933-3956.
              </span>
            ),
          },
          {
            text: (
              <span>
                Desai R, et al. <em>J Manag Care Spec Pharm.</em>{' '}
                2019;25(1):37-46.
              </span>
            ),
          },
        ],
      }}
      safetyInfo={{
        custom: 'mt-30',
        data: [
          {
            text: 'FOR USE WITH FORMULARY DECISION-MAKERS ONLY. DO NOT DUPLICATE OR DISTRIBUTE.',
          },
        ],
      }}
    />
  </div>
);

const Template = () => {
  return <AppStorybook path='A.2.1.2_S_Overview' components={content} />;
};

export const A_2_1_2_S_Overview = Template.bind({});

export const A_2_1_2_S_Overview_content = content.bind({});
