import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';
import Header from '@/Components/01-atoms/Content/Header/Header';

import ProlactinTableImg from '@/Components/05-pages/A.3.3.2_Safety/img/ProlactinTable.png?format=webp';
import { Button } from '@/Components/01-atoms/Content/Button/button';

import './A.3.3.2_Safety.scss';
import List from '@/Components/01-atoms/Content/List/List';
import MaintenaLogo from '@/assets/maintena-logo.png';
import { Footer } from '@/Components/03-organisms/Footer/Footer';
import { Link } from '@/Components/03-organisms/Routing/Link/Link';

export default {
  title: 'CLM/Pages',
  component: 'A.3.3.2_Safety',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_3_3_2_Safety_content'],
};

const blockName = 'A-3-3-2_Safety';
const classNames = require('classnames');

const content = () => (
  <div className={`${blockName}_wrapper`}>
    <Header custom='mb-0'>
      Prolactin and extrapyramidal symptom-related
      <br />
      events in patients with schizophrenia receiving
      <br />
      ABILIFY MAINTENA<sup>®</sup> (aripiprazole)<sup>1,2</sup>
    </Header>
    <List
      content={{
        columns: 'columns-1',
        type: 'circle',
        custom: 'mb-5',
        data: [
          {
            text: (
              <>
                Prolactin levels and extrapyramidal symptoms<sup>1</sup>
              </>
            ),
          },
          {
            text: (
              <>
                Prolactin levels and incidence of an extrapyramidal
                symptom–related event among patients with schizophrenia
                receiving ABILIFY MAINTENA vs those taking placebo<sup>1</sup>
              </>
            ),
          },
        ],
      }}
    />
    <img
      src={ProlactinTableImg}
      alt='prolactin table'
      className={classNames(`${blockName}-img`, 'mb-5')}
    />
    <Button
      text={
        <>
          ABILIFY ASIMTUFII<sup>®</sup> (aripiprazole) Safety
        </>
      }
      custom={classNames(
        `${blockName}-btn`,
        'button__type-c',
        ' button__type-c-large',
      )}
    />
    <Footer
      custom='mb-5'
      footnotes={{
        data: [
          {
            innerText:
              'Note: n=number of patients with event; N=number of patients treated.',
            supRight: '2',
          },
          {
            supLeftBig: '*',
            innerText: 'ABILIFY MAINTENA N=99, placebo N=66.',
            supRight: '2',
          },
          {
            supLeft: '†',
            innerText:
              'Incidence for ABILIFY MAINTENA vs placebo in female subjects (6.3% vs 13.8%) and male subjects (1.8% vs 10.8%).',
            supRight: '2',
          },
          {
            innerText: 'EPS=extrapyramidal symptoms; SD=standard deviation.',
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
          {
            text: '[Data on file. Otsuka].',
          },
        ],
      }}
      safetyInfo={{
        custom: 'mt-10',
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
  return <AppStorybook path='A.3.3.2_Safety' components={content} />;
};

export const A_3_3_2_Safety = Template.bind({});
export const A_3_3_2_Safety_content = content.bind({});
