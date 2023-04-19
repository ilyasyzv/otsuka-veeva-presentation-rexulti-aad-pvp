import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';
import Header from '@/Components/01-atoms/Content/Header/Header';
import { Footer } from '@/Components/03-organisms/Footer/Footer';
import { Link } from '@/Components/03-organisms/Routing/Link/Link';
import { SeparateAnalysis } from '@/Components/04-templates/Layouts/Modal/Modal.stories';

import PlasmaChartImg from '@/Components/05-pages/A.3.2.3_Efficacy/img/PlasmaChart.png?format=webp';
import PlasmaBannerImg from '@/Components/05-pages/A.3.2.3_Efficacy/img/PlasmaBanner.png?format=webp';
import AsimtufiiLogo from '@/assets/asimtufii-logo.png';

import './A.3.2.3_Efficasy.scss';

export default {
  title: 'CLM/Pages',
  component: 'A.3.2.3_Efficacy',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_3_2_3_Efficacy_content'],
};

const blockName = 'A_3_2_3_Efficacy';
const classNames = require('classnames');

const content = () => (
  <div className={`${blockName}_wrapper`}>
    <Header custom={classNames(`${blockName}-header`, 'mb-33')}>
      Mean plasma concentrations of
      <br /> ABILIFY ASIMTUFII<sup>®</sup> (aripiprazole) remained above the
      efficacy threshold of ≥95 ng/mL for the 2-month dosing interval
      <sup>1</sup>
    </Header>
    <img
      src={PlasmaChartImg}
      alt='plasma chart'
      className={classNames(`${blockName}-chart-img`)}
    />
    <img
      src={PlasmaBannerImg}
      alt='banner'
      className={classNames(`${blockName}-banner-img`, 'mb-50')}
    />
    <SeparateAnalysis {...SeparateAnalysis.args} />
    <Footer
      custom='mb-6'
      footnotes={{
        data: [
          {
            innerText: (
              <span>
                C<sub>min</sub>=minimum aripiprazole plasma concentration.
              </span>
            ),
          },
        ],
      }}
      references={{
        // custom: 'mb-6',
        data: [
          {
            text: (
              <span>
                Harlin M, et al. <em>CNS Drugs.</em>{' '}
                2023;10.1007/s40263-023-00996-8.
              </span>
            ),
          },
        ],
      }}
      safetyInfo={{
        custom: 'mt-20',
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
      image={<img src={AsimtufiiLogo} alt='asimtufii-logo' width='142.5' />}
    />
  </div>
);

const Template = () => {
  return <AppStorybook path='A.3.2.3_Efficacy' components={content} />;
};

export const A_3_2_3_Efficacy = Template.bind({});
export const A_3_2_3_Efficacy_content = content.bind({});
