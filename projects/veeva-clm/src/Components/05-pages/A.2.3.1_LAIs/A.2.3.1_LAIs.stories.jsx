import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';

import { Header } from '@atoms/Content/Header/Header';
import {
  StudyDesignLAIs1,
  StudyDesignLAIs2,
} from '@templates/Layouts/Modal/Modal.stories';
import { SplitScreen } from '@templates/Layouts/Grid/TwoColumns';
import Chart1 from './img/LAIs.png?format=webp';
import './style.scss';
import { Footer } from '@/Components/03-organisms/Footer/Footer';

export default {
  title: 'CLM/Pages',
  component: 'A.2.3.1_LAIs',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_2_3_1_LAIs_content'],
};

const baseClass = 'page--A_2_3_1_LAIs';

const modalOne = () => <StudyDesignLAIs1 {...StudyDesignLAIs1.args} />;
const modalTwo = () => <StudyDesignLAIs2 {...StudyDesignLAIs2.args} />;

const content = () => (
  <>
    <Header custom={`${baseClass}-header-1 mb-27`}>
      Long-acting injectables (LAIs) may help address relapse and
      adherence/persistence in schizophrenia and bipolar disorder<sup>1-3</sup>
    </Header>
    <Header type='h3' custom={`${baseClass}-header-3 mb-32 text-center`}>
      LAIs are concentrated injections formulated to slowly release
      antipsychotic medications over specific periods
      <br /> of time, allowing for an effective maintenance dose to be delivered
      with each injection<sup>1</sup>
    </Header>
    <img className={`${baseClass}-chart-1`} src={Chart1} alt='' />
    <SplitScreen
      className={`${baseClass}-grid-1`}
      left={modalOne}
      right={modalTwo}
    />
    <Footer
      custom='bottom-3'
      footnotes={{
        data: [
          {
            supLeft: '*',
            innerText:
              'Medication adherence was measured by the proportion of days covered in the 1 year immediately post-index. The adjusted mean proportion of days covered was higher in LAI users than in oral users.',
            supRight: '2',
          },
          {
            innerText: 'CI=confidence interval; HR=hazard ratio.',
          },
        ],
      }}
      references={{
        data: [
          {
            text: (
              <span>
                Zolezzi M, et al. <em>Neuropsychiatr Dis Treat.</em>{' '}
                2021;17:1917-1926.
              </span>
            ),
          },
          {
            text: (
              <span>
                Greene M, et al. <em>J Med Econ.</em> 2018;21(2):127-134.
              </span>
            ),
          },
          {
            text: (
              <span>
                Lafeuille M-H, et al. <em>BMC Psychiatry.</em> 2013;13:221.
              </span>
            ),
          },
        ],
      }}
      safetyInfo={{
        custom: 'mt-44',
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
  return <AppStorybook path='A.2.3.1_LAIs' components={content} />;
};

export const A_2_3_1_LAIs = Template.bind({});
export const A_2_3_1_LAIs_content = content.bind({});
