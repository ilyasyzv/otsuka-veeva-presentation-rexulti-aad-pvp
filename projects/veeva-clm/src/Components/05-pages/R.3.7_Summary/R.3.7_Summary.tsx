import React from 'react';
import Header from '@atoms/Content/Header/Header';
import Paragraph from '@atoms/Content/Paragraph/Paragraph';
import Footer from '@organisms/Footer/Footer';
import { Link } from '@organisms/Routing';
import List from '@atoms/Content/List/List';

import styles from './R.3.7_Summary.module.scss';
import RexultiBanner from './img/Rexulti_banner.png';
import RexultiLogo from '@/assets/rexulti-logo.png';
import Icon_1 from './img/icon_1.png';

const PageContent: React.FC = () => {
  return (
    <div className={styles.page}>
      <Header custom={`${styles.h1} mt-22 mb-13`}>
        REXULTI<sup className={'big'}>®</sup> (brexpiprazole) Was Studied in Two
        Phase 3,
        <br />
        Randomized, Double-blind, Placebo-Controlled,
        <br />
        Parallel-Arm, Fixed-Dose Clinical Trials
        <sup className={`${styles.small}`}>1,2</sup>
      </Header>
      <div className={`${styles.description} bg-gray-200`}>
        <Header type='h3' custom={`${styles.h3} mb-0`}>
          REXULTI demonstrated<sup>1,2</sup>:
        </Header>
        <Paragraph custom={'mb-17'}>
          Statistically significant reductions in agitation symptom frequency vs
          placebo at Week 12
        </Paragraph>
        <List
          content={{
            type: 'circle',
            marker_color: 'green-300' /*optional*/,
            data: [
              {
                custom_style: 'mb-5',
                text: (
                  <>
                    <strong>Study 6:</strong> REXULTI 2 mg/day demonstrated a
                    3.8-point greater reduction in the CMAI score compared with
                    placebo
                  </>
                ),
              },
              {
                custom_style: 'mb-5',
                text: (
                  <>
                    <strong>Study 7:</strong> REXULTI 2 mg or 3 mg/day
                    demonstrated a 5.3-point greater reduction in the CMAI score
                    compared with placebo
                  </>
                ),
              },
            ],
          }}
        />

        <img className={styles.icon_1} src={Icon_1} alt='' width='168' />
      </div>
      <div className={`${styles.heading} bg-gray-200 mt-12`}>
        <Header type='h3' custom={styles.h3}>
          Most common adverse reactions with REXULTI vs placebo were
          nasopharyngitis (3% vs 2%), urinary tract infection (3% vs 1%),
          dizziness (3% vs 2%), somnolence (3% vs 1%), and insomnia (4% vs 3%).
        </Header>
      </div>
      <div className={`${styles.heading} bg-gray-200 mt-12 mb-16`}>
        <Header type='h3' custom={styles.h3}>
          A total of 5.6% (28/503) of patients treated with REXULTI and 4.8%
          (12/251) of patients treated with placebo discontinued due to adverse
          reactions.
        </Header>
      </div>
      <img
        className={styles.rexulti_banner}
        src={RexultiBanner}
        alt=''
        width='823'
      />

      <Footer
        custom={styles.footer}
        footnotes={{
          custom: 'mb-6',
          data: [
            {
              innerText:
                'AAD, agitation with Alzheimer’s dementia; CMAI, Cohen-Mansfield Agitation Inventory; FDA, US Food and Drug Administration.',
            },
          ],
        }}
        references={{
          data: [
            {
              text: (
                <>
                  Grossberg GT, et al. <strong>Am J Geriatr Psychiatry.</strong>{' '}
                  2020;28(4):383-4003.
                </>
              ),
            },
            {
              text: 'Data on file. Otsuka.',
            },
          ],
        }}
        safetyInfo={{
          custom: `mt-8 ${styles.safety_info}`,
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
        image={<img src={RexultiLogo} alt='maintena-logo' width='154' />}
      />
    </div>
  );
};
export default PageContent;
