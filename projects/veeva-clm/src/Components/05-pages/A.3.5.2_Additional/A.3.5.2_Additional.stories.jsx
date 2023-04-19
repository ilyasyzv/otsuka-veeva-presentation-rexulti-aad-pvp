import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';

import { Header } from '@atoms/Content/Header/Header';
import {
  StudyDesignSup,
  UnderstandPANSS,
} from '@templates/Layouts/Modal/Modal.stories';
import { Default } from '@organisms/CollapsibleGroup/CollapsibleGroup.stories';
import './style.scss';
import MaintenaLogo from '@/assets/maintena-logo.png';
import { Footer } from '@/Components/03-organisms/Footer/Footer';
import { Link } from '@/Components/03-organisms/Routing/Link/Link';

export default {
  title: 'CLM/Pages',
  component: 'A.3.5.2_Additional',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_3_5_2_Additional_content'],
};

const baseClass = 'page--A_3_5_2_Additional';

const content = () => (
  <>
    <Header type='h3' custom={`${baseClass}-header-1 heading-alter`}>
      PIVOTAL 12-WEEK SCHIZOPHRENIA SHORT-TERM STUDY
    </Header>
    <Header custom={`${baseClass}-header-2 mb-19`}>
      ABILIFY MAINTENA<sup>®</sup> (aripiprazole) demonstrated early
      <br /> and continued symptom improvement<sup>1</sup>
    </Header>
    <StudyDesignSup {...StudyDesignSup.args} />
    <Default {...Default.args} />
    <UnderstandPANSS {...UnderstandPANSS.args} />
    <Footer
      footnotes={{
        data: [
          {
            supLeft: '*',
            innerText:
              'Baseline characteristics: PANSS total score ≥80 and specific psychotic symptoms on the PANSS score >4 on each of 4 specific psychotic symptoms (conceptual disorganization, hallucinatory behavior, suspiciousness/persecution, and unusual thought content) at screening and baseline; diagnosis of schizophrenia ≥1 year.',
          },
          {
            supLeft: '†',
            innerText: 'P<0.001.',
          },
          {
            supLeft: '‡',
            innerText: 'P<0.0001.',
          },
          {
            innerText:
              'CGI-S=Clinical Global Impression-Severity of Illness Scale; PANSS=Positive and Negative Syndrome Scale; SD=standard deviation.',
          },
        ],
      }}
      references={{
        custom: 'mt-5',
        data: [
          {
            text: (
              <span>
                Kane JM, et al. <em>J Clin Psychiatry.</em>{' '}
                2014;75(11):1254-1260.
              </span>
            ),
          },
        ],
      }}
      safetyInfo={{
        custom: 'mt-5',
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
  </>
);

const Template = () => {
  return <AppStorybook path='A.3.5.2_Additional' components={content} />;
};

export const A_3_5_2_Additional = Template.bind({});
export const A_3_5_2_Additional_content = content.bind({});
