import React from 'react';
import Header from '@atoms/Content/Header/Header';
import RexultiLogo from '@/assets/rexulti-logo.png';
import { Footer } from '@organisms/Footer/Footer';
import HorizontalLine from '@atoms/Content/HorizontalLine/HorizontalLine';
import Paragraph from '@atoms/Content/Paragraph/Paragraph';
import RexultiLogo2 from '@/assets/rexulti-logo2.png';
import styles from './R.0.0_Home_old.module.scss';

const PageContent = () => {
  return (
    <div className={styles.page}>
      <div className={styles['header-homepage']}>
        <Header type='h1' custom={`${styles.h1} mb-12`}>
          REXULTI® (brexpiprazole) for the
          <br />
          Treatment of Agitation Associated
          <br />
          With Alzheimer's Dementia (AAD)
        </Header>
        <HorizontalLine color='yellow-200' custom='w-135 h-3 mb-5' />
        <Header type='h2' custom={`${styles.h1} mb-12 font-green-600`}>
          The First and Only FDA-Approved
          <br />
          Pharmacologic Treatment for AAD
        </Header>
      </div>

      <Footer
        footnotes={{
          data: [
            {
              innerText: 'FDA, US Food and Drug Administration.',
            },
            {
              innerText:
                '© 2023 Otsuka America Pharmaceutical, Inc. All rights reserved.',
            },
            {
              innerText: 'April 2023 11US22EBY0007',
            },
            {
              innerText:
                'Trademarks used are property of their respective owners.',
            },
          ],
        }}
        safetyInfo={{
          data: [
            {
              text: <strong>INDICATIONS</strong>,
            },
            {
              text: (
                <>
                  REXULTI is indicated for:
                  <ul>
                    <li>
                      Use as an adjunctive therapy to antidepressants for the
                      treatment of major depressive disorder (MDD) in adults
                    </li>
                    <li>
                      Treatment of schizophrenia in adults and pediatric
                      patients ages 13 years and older
                    </li>
                  </ul>
                </>
              ),
            },
            {
              text: (
                <strong className='footerWarning'>
                  WARNING: INCREASED MORTALITY IN ELDERLY PATIENTS WITH
                  DEMENTIA-RELATED PSYCHOSIS and SUICIDAL THOUGHTS AND BEHAVIORS
                  See full prescribing information for complete boxed warning.{' '}
                </strong>
              ),
            },
            {
              text: (
                <strong>
                  Please see IMPORTANT SAFETY INFORMATION in this presentation.
                </strong>
              ),
            },
            {
              text: (
                <span className='footerWarning'>
                  FOR USE WITH FORMULARY DECISION-MAKERS ONLY. DO NOT DUPLICATE
                  OR DISTRIBUTE.
                </span>
              ),
            },
          ],
        }}
        images={[
          <img src={RexultiLogo} alt='rexulti-logo' width='195' />,
          <img src={RexultiLogo2} alt='rexulti-logo' width='216' />,
        ]}
      />
    </div>
  );
};
export default PageContent;
