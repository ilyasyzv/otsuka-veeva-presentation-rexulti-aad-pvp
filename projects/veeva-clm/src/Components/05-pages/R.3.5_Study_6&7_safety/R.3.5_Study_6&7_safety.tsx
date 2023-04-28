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
        greater than placebo from two 12-week pivotal trials across all doses
      </Header>

      <img src={RexultiTable} alt='' width='815' />
      <List
        content={{
          custom: `${styles.list} mt-2`,
          type: 'circle',
          markerColor: 'green-300' /* optional */,
          data: [
            {
              customStyle: 'mb-1',
              text: 'In clinical studies of 641 geriatric patients aged ≥65 years who received REXULTI for the treatment of AAD: ',
            },
            {
              customStyle: 'mb-1',
              text: (
                <>
                  <p>
                    <strong>Falls:</strong> Incidence of{' '}
                    <strong>falls and dizziness</strong> in patients treated
                    with REXULTI was <strong>similar</strong> compared to
                    patients treated with placebo
                  </p>
                  <p className={styles.list_subtext}>
                    <span> – </span>{' '}
                    <span>
                      Incidence of falls pooled from trials of REXULTI (0.5
                      mg/day or 1 mg/day fixed, 2 mg/day or 3 mg/day fixed, or
                      0.5-2 mg/ day&nbsp;flexible) vs placebo:{' '}
                      <strong>1.7%</strong> vs <strong>2.6%</strong>
                      <sup>1</sup>
                    </span>
                  </p>
                </>
              ),
            },
            {
              customStyle: 'mb-1',
              text: (
                <>
                  <strong>Cognitive Decline:</strong> No evidence of worsening
                  or rapid cognitive decline based on a Mini-Mental State
                  Examination (MMSE) score&nbsp;in comparison to placebo was
                  observed
                </>
              ),
            },
            {
              customStyle: 'mb-1',
              text: (
                <>
                  <p>
                    No QTc interval prolongation at 4x maximum recommended human
                    dose (MRHD)
                  </p>
                  <p className={`${styles.list_subtext} mt-0`}>
                    <span> – </span>{' '}
                    <span>
                      At a dose 4 times the MRHD, REXULTI does not prolong QTc
                      interval to any clinically relevant extent
                    </span>
                  </p>
                </>
              ),
            },
            {
              customStyle: 'mb-1',
              text: (
                <>
                  <p>
                    A total of 5.6% (28/503) of patients treated with REXULTI
                    and 4.8% (12/251) of patients treated with placebo
                    discontinued due&nbsp;to&nbsp;ARs
                  </p>
                  <p className={styles.list_subtext}>
                    <span> – </span>{' '}
                    <span>
                      Approximately <strong>95%</strong> of patients{' '}
                      <strong>
                        remained on treatment without discontinuation
                      </strong>{' '}
                      due to adverse reactions, whether
                      treated&nbsp;with&nbsp;REXULTI or placebo
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
          custom: 'mb-2',
          data: [
            {
              innerText:
                'AAD, agitation associated with Alzheimer’s dementia; QTc, corrected QT interval.',
            },
          ],
        }}
        references={{
          data: [
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
