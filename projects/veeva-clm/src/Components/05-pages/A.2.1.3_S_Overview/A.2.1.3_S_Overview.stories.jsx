import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';
import Header from '@/Components/01-atoms/Content/Header/Header';
import { Footer } from '@/Components/03-organisms/Footer/Footer';
import SchizophreniaCostImg from './img/costImage.png?format=webp';

import './A.2.1.3_S_Overview.scss';

export default {
  title: 'CLM/Pages',
  component: 'A.2.1.3_S_Overview',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_2_1_3_S_Overview_content'],
};
const blockName = 'A-2-1-3_S_Overview';
const classNames = require('classnames');

const content = () => (
  <div className={`${blockName}_wrapper`}>
    <Header custom='mb-75'>
      Schizophrenia is associated with a considerable, disproportionate economic
      burden1<sup>1</sup>
    </Header>
    <img
      src={SchizophreniaCostImg}
      alt='cost distribution'
      className={classNames(`${blockName}-img`, 'mb-20')}
    />
    <Footer
      footnotes={{
        data: [
          {
            supLeft: '*',
            innerText:
              'The difference between costs incurred by individuals living with and without schizophrenia (estimated based on prevalence in 2019).',
          },
        ],
      }}
      references={{
        data: [
          {
            text: (
              <span>
                Kadakia A, et al. <em>J Clin Psychiatry.</em>{' '}
                2022;83(6):22m14458.
              </span>
            ),
          },
        ],
      }}
      safetyInfo={{
        custom: 'mt-30',
        data: [
          {
            text: 'FOR USE WITH FORMULARY DECISION-MAKERS ONLY. DO NOT DUPLICATE OR DISTRIBUTE. ',
          },
        ],
      }}
    />
    {/* <Footer */}
    {/*  footnotes=' The difference between costs incurred by individuals living with and */}
    {/*  without schizophrenia (estimated based on prevalence in 2019).' */}
    {/*  references='Kadakia A, et al. J Clin Psychiatry. 2022;83(6):22m14458.' */}
    {/* /> */}
  </div>
);

const Template = () => {
  return <AppStorybook path='A.2.1.3_S_Overview' components={content} />;
};

export const A_2_1_3_S_Overview = Template.bind({});
export const A_2_1_3_S_Overview_content = content.bind({});
