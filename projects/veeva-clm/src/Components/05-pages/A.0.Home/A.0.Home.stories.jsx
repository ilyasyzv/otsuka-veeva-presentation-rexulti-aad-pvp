import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';
import Header from '@/Components/01-atoms/Content/Header/Header';
import HorizontalLine from '@/Components/01-atoms/Content/HorizontalLine/HorizontalLine';
import '@/Components/00-base/variables.scss';

import OtsukaSignature from './img/Signature.svg?format=webp';
import LogoAdilify from './img/Ability.svg?format=webp';

import './style.scss';
import { Footer } from '@/Components/03-organisms/Footer/Footer';

export default {
  title: 'CLM/Pages',
  component: 'A.0.Home',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_0_Home_content'],
};

const blockName = 'A-0-Home';
const classNames = require('classnames');

const content = () => (
  <div className={`${blockName}_wrapper`}>
    <Header type='h1' custom={classNames('mb-21', `${blockName}-header`)}>
      ABILIFY ASIMTUFII<sup className={`${blockName}-sup`}>®</sup>
      (aripiprazole) Extended-
      <br />
      Release Injectable Suspension for the Treatment
      <br /> of Schizophrenia and Maintenance Monotherapy <br />
      Treatment of Bipolar I Disorder in Adults
    </Header>
    <HorizontalLine
      color='warning'
      custom={classNames(`${blockName}-underline`, 'mb-16')}
    />
    <Header
      type='h2'
      custom={classNames(`${blockName}-secondary-header`, 'mb-35')}
    >
      The First and Only Once-Every-2-Months Long-Acting Injectable Suspension
      Indicated for Treatment of Both Schizophrenia and Bipolar I Disorder in
      Adults
    </Header>
    <p className={classNames(`${blockName}-trademark`, ' mb-8')}>
      © 2023 Otsuka America Pharmaceutical, Inc. All rights reserved.
      <br /> April 2023 23US23EBY0005 <br />
      Trademarks used are property of their respective owners.
    </p>
    <div className={classNames(`${blockName}-sign__wrapper`, ' mb-8')}>
      <img src={OtsukaSignature} alt='signature' width='214' />
    </div>
    <div className={classNames(`${blockName}-logo__wrapper`, ' mb-35')}>
      <img src={LogoAdilify} alt='logo' width='246' />
    </div>
    {/* <div> */}
    {/*  <p className='footer-txt'> */}
    {/*    Please see FULL PRESCRIBING INFORMATION including BOXED WARNING */}
    {/*    available in this presentation. */}
    {/*  </p> */}
    {/*  <p className='footer-txt'> */}
    {/*    WARNING: INCREASED MORTALITY IN ELDERLY PATIENTS WITH DEMENTIA-RELATED */}
    {/*    PSYCHOSIS Elderly patients with dementia-related psychosis treated with */}
    {/*    antipsychotic drugs are at increased risk of death (1.6 to 1.7 times) */}
    {/*    compared to placebo-treated patients. ABILIFY MAINTENA is not approved */}
    {/*    for the treatment of patients with dementia-related psychosis. */}
    {/*  </p> */}
    {/*  <p className='footer-txt'> */}
    {/*    FOR USE WITH FORMULARY DECISION-MAKERS ONLY. DO NOT DUPLICATE OR */}
    {/*    DISTRIBUTE. */}
    {/*  </p> */}
    {/* </div> */}
    <Footer
      custom='bottom-20'
      safetyInfo={{
        data: [
          {
            text: (
              <span>
                Please see <a href='/'>FULL PRESCRIBING INFORMATION</a>{' '}
                including BOXED WARNING available in this presentation.
              </span>
            ),
          },
          {
            text: 'WARNING: INCREASED MORTALITY IN ELDERLY PATIENTS WITH DEMENTIA-RELATED PSYCHOSIS',
          },
          {
            text: 'Elderly patients with dementia-related psychosis treated with antipsychotic drugs are at increased risk of death (1.6 to 1.7 times) compared to placebo-treated patients. ABILIFY MAINTENA is not approved for the treatment of patients with dementia-related psychosis.',
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
  return <AppStorybook path='A.0.Home' background='b' components={content} />;
};

export const A_0_Home = Template.bind({});
export const A_0_Home_content = content.bind({});
