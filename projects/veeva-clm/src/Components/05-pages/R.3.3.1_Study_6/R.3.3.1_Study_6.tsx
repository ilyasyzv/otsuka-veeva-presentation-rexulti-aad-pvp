import React from 'react';
import Header from '@atoms/Content/Header/Header';
import Paragraph from '@atoms/Content/Paragraph/Paragraph';
import Footer from '@organisms/Footer/Footer';
import { Link } from '@organisms/Routing';
import { ModalSelectionCriteria } from '@templates/Layouts/Modal/ModalSelectionCriteria/ModalSelectionCriteria';
import { ModalDemographics1 } from '@templates/Layouts/Modal/ModalDemographics1/ModalDemographics1';

import RexultiImage from './img/rexulti_image.png';
import RexultiLogo from '@/assets/rexulti-logo.png';

import styles from './R.3.3.1_Study_6.module.scss';

const PageContent: React.FC = () => {
  return (
    <div className={styles.page}>
      <Header custom={`${styles.h1} mt-31 mb-13`}>
        Study Design<sup>1</sup>
      </Header>

      <Paragraph custom={'mb-54'} size='small'>
        <strong>Study objective:</strong> To assess the efficacy, safety, and
        tolerability of REXULTI<sup>®</sup> (brexpiprazole) in patients with AAD
        <br />
        <strong>Study design:</strong> hase 3, randomized, double-blind,
        placebo-controlled, parallel-arm, fixed-dose trial
        <br />
        <strong>Primary endpoint:</strong> Change from baseline in{' '}
        <strong>CMAI score</strong> at week 12
      </Paragraph>

      <img src={RexultiImage} alt='' width='831' />

      <div className={styles.button_container}>
        <ModalSelectionCriteria />
        <ModalDemographics1 />
      </div>

      <Footer
        custom={styles.footer}
        footnotes={{
          custom: `mb-8 ${styles.footnote}`,
          data: [
            {
              supLeft: '*',
              innerText: (
                <span>
                  The study initially included a REXULTI 0.5 mg/day treatment
                  arm; this was removed under a protocol amendment in response
                  to new information from <br />
                  completed studies that indicated this dose was nonefficacious.
                  <sup>1</sup>
                </span>
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
                  Grossberg GT, et al. <b>Am J Geriatr Psychiatry. </b>
                  2020;28(4):383-400.
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
                <span className={'highlighted'}>
                  Please see{' '}
                  <Link to='R.6.0_ISI' custom={'green-200'}>
                    IMPORTANT SAFETY INFORMATION
                  </Link>{' '}
                  in this presentation.
                </span>
              ),
            },
            {
              text: 'FOR USE WITH FORMULARY DECISION-MAKERS ONLY. DO NOT DUPLICATE OR DISTRIBUTE.',
            },
          ],
        }}
        image={<img src={RexultiLogo} alt='maintena-logo' width='154.2' />}
      />
    </div>
  );
};
export default PageContent;
