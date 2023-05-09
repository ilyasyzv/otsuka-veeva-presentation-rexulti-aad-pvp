import React from 'react';
import Header from '@atoms/Content/Header/Header';
import List from '@atoms/Content/List/List';
import Footer from '@organisms/Footer/Footer';
import { Link } from '@organisms/Routing';

import RexultiLogo from '@/assets/rexulti-logo.png';
import RexultiTable from './img/rexulti_table.png';

import styles from './R.3.5_Study_6&7_safety.module.scss';

const PageContent: React.FC = () => {
  return (
    <div className={styles.page}>
      <Header custom={`${styles.h1} mt-29 mb-13`}>
        REXULTI<sup className='big'>®</sup> (brexpiprazole) Safety Profile vs
        Placebo in AAD
      </Header>
      <Header type='h3' custom='mt-10 mb-13 pr-40'>
        Adverse reactions (ARs) in ≥2% of patients treated with REXULTI and
        greater than placebo from two 12-week pivotal trials across all doses.
      </Header>

      <img src={RexultiTable} alt='' width='815' />
      <List
        content={{
          custom: `${styles.list}`,
          type: 'circle',
          markerColor: 'green-300' /* optional */,
          data: [
            {
              customStyle: 'mb-1',
              text: 'The total number of patients 65 years of age and older in the clinical studies for AAD was 641 (85%)',
            },
            {
              customStyle: 'mb-1',
              text: (
                <>
                  <p className='mb-10'>
                    <strong>
                      In clinical studies of geriatric patients (65 years of age
                      and older) for the treatment of AAD, incidence of falls
                      and
                      <br />
                      dizziness in patients treated with REXULTI was similar
                      compared to patients treated with placebo:
                    </strong>
                  </p>
                  <p>
                    <strong>Falls</strong>
                  </p>
                  <p className={styles.list_subtext}>
                    <span> – </span>{' '}
                    <span>
                      Study 6: REXULTI=1.7% vs placebo=1.5%
                      <sup>1</sup>
                    </span>
                  </p>
                  <p className={styles.list_subtext}>
                    <span> – </span>{' '}
                    <span>
                      Study 7: REXULTI=1.8% vs placebo=1.7%
                      <sup>2</sup>
                    </span>
                  </p>
                </>
              ),
            },
            {
              customStyle: 'mb-1',
              text: (
                <>
                  No evidence of worsening or rapid{' '}
                  <strong>cognitive decline</strong> based on a Mini-Mental
                  State Examination (MMSE) score in comparison to placebo was
                  observed
                </>
              ),
            },
            {
              customStyle: 'mb-1',
              text: (
                <>
                  At a dose 4 times the MRHD, REXULTI does not prolong{' '}
                  <strong>QTc interval</strong> to any clinically relevant
                  extent
                </>
              ),
            },
            {
              customStyle: 'mb-1',
              text: (
                <>
                  <p>
                    Similar discontinuation rates due to adverse reactions from
                    two 12-week pivotal trials across all doses
                  </p>
                  <p className={styles.list_subtext}>
                    <span> – </span>{' '}
                    <span>
                      Approximately <strong>95%</strong> of patients{' '}
                      <strong>
                        remained on treatment without discontinuation
                      </strong>{' '}
                      due to ARs, whether treated with
                      <br /> REXULTI or placebo
                    </span>
                  </p>
                </>
              ),
            },
          ],
        }}
      />
      <Footer
        custom={styles.footer}
        footnotes={{
          data: [
            {
              innerText:
                'AAD, agitation associated with Alzheimer’s dementia; MRHD, maximum recommended human dose; QTc, corrected QT interval.',
            },
          ],
        }}
        references={{
          data: [
            {
              text: 'Data on file. Rex-502.',
            },
            {
              text: 'Grossberg GT, et al. Poster presented at: Psych Congress; September 17-20, 2022; New Orleans, LA.',
            },
          ],
        }}
        safetyInfo={{
          custom: `mt-5 ${styles.safety_info}`,
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
        images={[<img src={RexultiLogo} alt='maintena-logo' width='154' />]}
      />
    </div>
  );
};
export default PageContent;
