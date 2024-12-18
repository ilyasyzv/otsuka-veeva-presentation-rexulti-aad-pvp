import React from 'react';
import Header from '@atoms/Content/Header/Header';
import {
  ModalSelectionCriteria2,
  ModalDemographics2,
} from '@templates/Layouts';
import { Link } from '@organisms/Routing';
import { Footer } from '@/Components/03-organisms/Footer/Footer';
import Paragraph from '@atoms/Content/Paragraph/Paragraph';

import RexultiLogo from '@/assets/rexulti-logo.png';
import PageImage from './img/Image1.png';

import styles from './R.3.4.1_Study_7.module.scss';

const PageContent = () => {
  return (
    <div className={styles.page}>
      <Header custom={`${styles.h1} mb-12 mt-30`}>
        Study Design<sup>1</sup>
      </Header>
      <div className={`${styles.study_design_points} mb-60`}>
        <Paragraph>
          <strong>Study objective:</strong> To assess the efficacy, safety, and
          tolerability of 2 fixed doses of REXULTI® (brexpiprazole) in patients
          with AAD
        </Paragraph>
        <Paragraph>
          <strong>Study design:</strong> Phase 3, randomized, double-blind,
          multicenter, placebo-controlled, parallel-arm, fixed-dose trial
        </Paragraph>
        <Paragraph>
          <strong>Primary endpoint:</strong> Change from baseline in{' '}
          <strong>CMAI score</strong> at week 12
        </Paragraph>
      </div>
      <img className={`mb-10 ${styles.image_1}`} src={PageImage} alt='' />
      <div className={styles.button_container}>
        <ModalSelectionCriteria2 />
        <ModalDemographics2 />
      </div>
      <Footer
        custom={styles.footer}
        footnotes={{
          custom: `mb-8 ${styles.footnote}`,
          data: [
            {
              innerText: (
                <>
                  <sup className='sup-left sup-left-asterisk'>*</sup>Efficacy
                  sample contained n=224 for REXULTI 2 mg/day or 3 mg/day and
                  n=116 for placebo.
                </>
              ),
            },
            {
              innerText:
                'AAD, agitation associated with Alzheimer’s dementia; CMAI, Cohen-Mansfield Agitation Inventory.',
            },
          ],
        }}
        references={{
          custom: 'mb-10',
          data: [
            {
              text: (
                <span>
                  Grossberg GT, et al. Poster presented at: Psych Congress;
                  September 17-20, 2022; New Orleans, LA.
                </span>
              ),
            },
          ],
        }}
        safetyInfo={{
          custom: styles.safety_info,
          data: [
            {
              text: (
                <span>
                  Please see{' '}
                  <Link to='R.6.0_ISI'>IMPORTANT SAFETY INFORMATION</Link> in
                  this presentation.
                </span>
              ),
            },
            {
              text: 'FOR USE WITH FORMULARY DECISION-MAKERS ONLY. DO NOT DUPLICATE OR DISTRIBUTE.',
            },
          ],
        }}
        images={[<img src={RexultiLogo} alt='rexulti-logo' width='154.2' />]}
      />
    </div>
  );
};
export default PageContent;
