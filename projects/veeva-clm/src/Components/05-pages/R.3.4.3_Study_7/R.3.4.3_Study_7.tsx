import React from 'react';
import { Link } from '@/Components/03-organisms/Routing/Link/Link';
import { Footer } from '@/Components/03-organisms/Footer/Footer';
import RexultiLogo from '@/assets/rexulti-logo.png';
import Header from '@atoms/Content/Header/Header';
import Paragraph from '@atoms/Content/Paragraph/Paragraph';
import styles from './R.3.4.3_Study_7.module.scss';
import PageImage from './img/Image1.png';

const PageContent = () => {
  return (
    <div className={styles.page}>
      <Header custom={`${styles.h1} mb-10 mt-24`}>
        REXULTI<sup>®</sup> (brexpiprazole): Change in Frequency Across
        Subscales of Agitation Symptoms
      </Header>
      <Paragraph
        custom={`mb-24 ${styles.pivotal_trials}`}
        children={
          <>
            <strong>Secondary endpoint:</strong> Change from baseline at Week 12
            in CMAI subscale scores.
          </>
        }
      />
      <img className={styles.image_1} src={PageImage} alt='' width='852' />
      <Footer
        custom={styles.footer}
        footnotes={{
          data: [
            {
              innerText: 'CMAI, Cohen-Mansfield Agitation Inventory.',
            },
          ],
        }}
        references={{
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
          custom: `mt-6 ${styles.safety_info}`,
          data: [
            {
              text: (
                <span className='highlighted'>
                  Please see{' '}
                  <Link to='R.6.0_ISI' custom='green-200'>
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
        images={[
          <img
            src={RexultiLogo}
            alt='maintena-logo'
            width='154.2'
            className={styles.logo}
          />,
        ]}
      />
    </div>
  );
};
export default PageContent;
