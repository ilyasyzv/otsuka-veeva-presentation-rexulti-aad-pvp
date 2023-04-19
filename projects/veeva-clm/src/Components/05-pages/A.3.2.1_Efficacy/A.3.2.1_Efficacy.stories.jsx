import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';
import Header from '@/Components/01-atoms/Content/Header/Header';
import AsimtufiiLogo from '@assets/asimtufii-logo.png';
import { Link } from '@/Components/03-organisms/Routing/Link/Link';

import './A.3.2.1_Efficacy.scss';
import { Footer } from '@/Components/03-organisms/Footer/Footer';
import EfficacyDiagramImg from './img/efficacyDiagram.png?format=webp';

export default {
  title: 'CLM/Pages',
  component: 'A.3.2.1_Efficacy',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_3_2_1_Efficacy_content'],
};

const blockName = 'A_3_2_1_Efficacy';
const classNames = require('classnames');

const content = () => (
  <div className={`${blockName}_wrapper`}>
    <Header custom={classNames(`${blockName}-header`, 'mb-30')}>
      The efficacy of ABILIFY ASIMTUFII <sup>®</sup> (aripiprazole) in adult
      patients with schizophrenia or bipolar I disorder was established in part
      on the basis of pharmacokinetic bridging study
    </Header>
    <Header type='h3' custom='mb-13'>
      Open-label, multiple-dose, randomized, parallel-arm, multicenter,
      pharmacokinetic bridging study
    </Header>
    <img
      src={EfficacyDiagramImg}
      alt='Efficacy Diagram'
      className={classNames(`${blockName}-img`, 'mb-5')}
    />
    <Footer
      footnotes={{
        data: [
          {
            innerText:
              'One of the primary objectives of the trial was to establish similarity of aripiprazole concentrations between ABILIFY ASIMTFUll and ABILIFY MAINTENA® (aripiprazole).',
            supRight: '1',
          },
          {
            supLeft: '*',
            innerText:
              'Patients with no history of tolerating Ari received 3 single oral doses of Ari of 10 mg on 3 consecutive days (total of 30 mg) in addition to their current medication prior to Day 15 to establish tolerability.',
            supRight: '2',
          },
          {
            supLeft: '†',
            innerText:
              'Administered as a single injection in the gluteal muscle. A onetime dose reduction was allowed, for Ari 2MRTU 960, the dose was reduced to 660 mg (a onetime increase back to 960 mg was then allowed); for AOM 400, the dose was reduced to 300 mg (a onetime increase back to 400 mg was then allowed).',
            supRight: '2',
          },
          {
            supLeft: '‡',
            innerText:
              'Randomization stratification factors included sampling schedule (robust or sparse) and disease type (schizophrenia or BP-1).',
            supRight: '2',
          },
          {
            supLeft: '§',
            innerText:
              'Blood samples for pharmacokinetic analyses were drawn throughout the study according to a robust (n=84) or a sparse (n=182) sampling schedule, with the robust sampling schedule providing more frequent sampling data.',
            supRight: '2',
          },
          {
            innerText:
              '2MRTU=2-month ready-to-use; AOM-ABILIFY MAINTENA once monthly; AP=antipsychotic; Ari=aripiprazole; BP-|=bipolar I; DSM-5-Diagnostic and Statistical Manual of Mental Disorders, 5th edition; ET=early termination.',
          },
        ],
      }}
      references={{
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
        custom: 'mt-15',
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
  return <AppStorybook path='A.3.2.1_Efficacy' components={content} />;
};

export const A_3_2_1_Efficacy = Template.bind({});
export const A_3_2_1_Efficacy_content = content.bind({});
