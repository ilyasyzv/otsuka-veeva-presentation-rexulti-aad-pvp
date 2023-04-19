import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';

import { Header } from '@atoms/Content/Header/Header';
import B_Overview from './img/B_Overview.png?format=webp';
import './style.scss';
import { Footer } from '@/Components/03-organisms/Footer/Footer';

export default {
  title: 'CLM/Pages',
  component: 'A.2.2.1_B_Overview',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_2_2_1_B_Overview_content'],
};

const baseClass = 'page--A_2_2_1_B_Overview';

const content = () => (
  <>
    <Header custom='mb-22'>
      Bipolar I disorder (BP-I) is a recurrent episodic mood
      <br />
      disorder affecting ~2.3% of US adults<sup>1-3</sup>
    </Header>
    <img className={`${baseClass}-chart-1`} src={B_Overview} alt='' />
    <Footer
      custom='bottom-7'
      references={{
        data: [
          {
            text: (
              <span>
                American Psychiatric Association.{' '}
                <em>Diagnostic and Statistical Manual of Mental Disorders.</em>{' '}
                5th ed. Washington, DC: American Psychiatric Association; 2013.
              </span>
            ),
          },
          {
            text: (
              <span>
                Grande I, et al. <em>Lancet.</em> 2016;387(10027):1561-1572.
              </span>
            ),
          },
          {
            text: 'Treatment Advocacy Center. https://www.treatmentadvocacycenter.org/evidence-and-research/fast-facts. Accessed January 31, 2023.',
          },
        ],
      }}
      safetyInfo={{
        custom: 'mt-26',
        data: [
          {
            text: 'FOR USE WITH FORMULARY DECISION-MAKERS ONLY. DO NOT DUPLICATE OR DISTRIBUTE. ',
          },
        ],
      }}
    />
  </>
);

const Template = () => {
  return <AppStorybook path='A.2.2.1_B_Overview' components={content} />;
};

export const A_2_2_1_B_Overview = Template.bind({});
export const A_2_2_1_B_Overview_content = content.bind({});
