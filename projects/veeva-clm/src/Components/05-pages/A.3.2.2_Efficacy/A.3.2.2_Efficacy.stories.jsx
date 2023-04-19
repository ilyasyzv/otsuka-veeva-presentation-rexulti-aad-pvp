import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';
import Header from '@/Components/01-atoms/Content/Header/Header';

import TableImg from '@/Components/05-pages/A.3.2.2_Efficacy/img/Table.png?format=webp';
import TableBannerImg from '@/Components/05-pages/A.3.2.2_Efficacy/img/TableBanner.png?format=webp';

import './A.3.2.2_Efficacy.scss';
import { Footer } from '@/Components/03-organisms/Footer/Footer';
import { Link } from '@/Components/03-organisms/Routing/Link/Link';

export default {
  title: 'CLM/Pages',
  component: 'A.3.2.2_Efficacy',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_3_2_2_Efficacy_content'],
};

const blockName = 'A_3_2_2_Efficacy';
const classNames = require('classnames');

const content = () => (
  <div className={`${blockName}_wrapper`}>
    <Header custom={classNames(`${blockName}-header`, 'mb-20')}>
      ABILIFY ASIMTUFII<sup>®</sup> (aripiprazole) and <br />
      ABILIFY MAINTENA
      <sup>®</sup> (aripiprazole) showed similar
      <br /> aripiprazole concentrations
    </Header>
    <img src={TableImg} alt='ratio table' className='mb-40' />
    <img
      src={TableBannerImg}
      alt='banner'
      className='mb-20'
      style={{
        marginLeft: '-20px',
        width: 'calc(100% + 20px)',
        maxWidth: 'none',
      }}
    />
    <Footer
      custom='mb-5'
      footnotes={{
        data: [
          {
            supLeftBig: '*',
            innerText: (
              <>
                AUC<sub>0-56</sub> following the fourth administration of
                ABILIFY ASIMTUFII 960 mg or the sum of AUC<sub>0-28</sub>
                following the seventh and eighth administrations of ABILIFY
                MAINTENA 400 mg.
              </>
            ),
          },
          {
            supLeft: '†',
            innerText: (
              <>
                Aripiprazole plasma concentrations following the fourth
                administration of ABILIFY ASIMTUFII 960 mg (C<sub>56</sub>) or
                the eighth administration of ABILIFY MAINTENA 400 mg (C
                <sub>28</sub>).
              </>
            ),
          },
          {
            supLeft: '‡',
            innerText: (
              <>
                ABILIFY ASIMTUFII 960 mg (n=34), ABILIFY MAINTENA 400 mg (n=32).
              </>
            ),
          },
          {
            supLeft: '§',
            innerText: (
              <>
                ABILIFY ASIMTUFII 960 mg (n=96), ABILIFY MAINTENA 400 mg (n=82).
              </>
            ),
          },
          {
            innerText: (
              <>
                AUC=area under curve; C=concentration; CI=confidence interval; C
                <sub>max</sub>=maximum concentration.
              </>
            ),
          },
        ],
      }}
      safetyInfo={{
        custom: 'mt-25',
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
    />
  </div>
);

const Template = () => {
  return <AppStorybook path='A.3.2.2_Efficacy' components={content} />;
};

export const A_3_2_2_Efficacy = Template.bind({});
export const A_3_2_2_Efficacy_content = content.bind({});
