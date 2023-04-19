import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';
import Header from '@/Components/01-atoms/Content/Header/Header';

import SafetyTableImg from '@/Components/05-pages/A.3.3.1_Safety/img/SafetyTable.png?format=webp';
import { Button } from '@/Components/01-atoms/Content/Button/button';

import './A.3.3.1_Safety.scss';
import List from '@/Components/01-atoms/Content/List/List';
import MaintenaLogo from '@/assets/maintena-logo.png';
import { Footer } from '@/Components/03-organisms/Footer/Footer';
import { Link } from '@/Components/03-organisms/Routing/Link/Link';

export default {
  title: 'CLM/Pages',
  component: 'A.3.3.1_Safety',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_3_3_1_Safety_content'],
};

const blockName = 'A-3-3-1_Safety';
const classNames = require('classnames');

const content = () => (
  <div className={`${blockName}_wrapper`}>
    <Header custom='mb-8'>
      The safety profile of ABILIFY ASIMTUFII<sup>®</sup> (aripiprazole) was
      <br />
      based on the 12-week study of patients living with
      <br /> schizophrenia treated with ABILIFY MAINTENA<sup>®</sup>{' '}
      (aripiprazole)
    </Header>
    <Header type='h3' custom='mb-8 text-center'>
      Adverse reactions in ≥2% of ABILIFY MAINTENA–treated adult patients with
      schizophrenia
      <br /> in a 12-week, double-blind, placebo-controlled study
    </Header>
    <img
      src={SafetyTableImg}
      alt='prolactin table'
      className={classNames(`${blockName}-img`, 'mb-5')}
    />
    <Footer
      footnotes={{
        data: [
          {
            supLeft: '*',
            innerText:
              'Table excludes adverse reactions that had an incidence equal to or less than placebo.',
          },
        ],
      }}
      safetyInfo={{
        custom: 'mt-6',
        data: [
          {
            text: (
              <span>
                Please see{' '}
                <Link to='A.7.0_ISI' custom='blue-500'>
                  IMPORTANT SAFETY INFORMATION
                </Link>{' '}
                in this presentation.
              </span>
            ),
          },
          {
            text: 'FOR USE WITH FORMULARY DECISION-MAKERS ONLY. DO NOT DUPLICATE OR DISTRIBUTE. ',
          },
        ],
      }}
      image={<img src={MaintenaLogo} alt='maintena-logo' width='140.2' />}
    />
  </div>
);

const Template = () => {
  return <AppStorybook path='A.3.3.1_Safety' components={content} />;
};

export const A_3_3_1_Safety = Template.bind({});
export const A_3_3_1_Safety_content = content.bind({});
