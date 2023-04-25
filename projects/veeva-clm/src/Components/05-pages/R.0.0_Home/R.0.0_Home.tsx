import React from 'react';
import Header from '@atoms/Content/Header/Header';
import RexultiLogo from '@/assets/rexulti-logo.png';
import { Footer } from '@organisms/Footer/Footer';
import HorizontalLine from '@atoms/Content/HorizontalLine/HorizontalLine';
import Paragraph from '@atoms/Content/Paragraph/Paragraph';
import RexultiLogo2 from '@/assets/rexulti-logo2.png';
import styles from './R.0.0_Home.module.scss';

const PageContent = () => {
  return (
    <div className={styles.page}>
      <Paragraph custom={styles['header-homepage']}>
        <Header type='h1' custom={`${styles.h1} mb-12`}>
          REXULTI<sup>®</sup> (brexpiprazole) for the 
          <br />Treatment of Agitation Associated 
          <br />With Alzheimer's Dementia (AAD)
        </Header>
        <HorizontalLine color='yellow-200' custom='w-135 h-3 mb-10' />
        <Header type='h2' custom={`${styles.h1} mb-12 font-green-600`}>
          The First and Only FDA-Approved
          <br />Pharmacologic Treatment for AAD
        </Header>
      </Paragraph>

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
        // references={{
        //   custom: 'mb-4 mt-8',
        //   data: [
        //     {
        //       text: (
        //         <>
        //           Jones E, et al. <strong>J Alzheimers Dis.</strong>{' '}
        //           2021;83(1):89-101.
        //         </>
        //       ),
        //     },
        //   ],
        // }}
        // safetyInfo={{
        //   data: [
        //     {
        //       text: (
        //         <strong>
        //           Please see{' '}
        //           <Link to='R.6.0_ISI' custom='blue-500'>
        //             IMPORTANT SAFETY INFORMATION
        //           </Link>{' '}
        //           in this presentation.
        //         </strong>
        //       ),
        //     },
        //     {
        //       text: (
        //         <span className='footerWarning'>
        //           WARNING: INCREASED MORTALITY IN ELDERLY PATIENTS WITH DEMENTIA-RELATED PSYCHOSIS and SUICIDAL THOUGHTS AND BEHAVIORS
        //           See full prescribing information for complete boxed warning.
        //           Elderly patients with dementia-related psychosis treated with antipsychotic drugs are at increased risk of death. REXULTI is not approved for the treatment of patientswith dementia-related psychosis without symptoms of agitation associated with Alzheimer's dementia. Antidepressants increased the risk of suicidal thoughts and behaviors in patients aged 24 years and younger. Monitor for clinical worsening and emergence of suicidal thoughts and behaviors. Safety and effectiveness of REXULTI have not been established in pediatric patientswith MDD.
        //         </span>
        //       ),
        //     },
        //     {
        //       text: (
        //         <span className='footerWarning'>
        //           FOR USE WITH FORMULARY DECISION-MAKERS ONLY. DO NOT DUPLICATE
        //           OR DISTRIBUTE.
        //         </span>
        //       ),
        //     },
        //   ],
        // }}
        images={[
          <img src={RexultiLogo} alt='rexulti-logo' width='154.2' />,
          <img src={RexultiLogo2} alt='rexulti-logo' width='200' />,
        ]}
      />
    </div>
  );
};
export default PageContent;
