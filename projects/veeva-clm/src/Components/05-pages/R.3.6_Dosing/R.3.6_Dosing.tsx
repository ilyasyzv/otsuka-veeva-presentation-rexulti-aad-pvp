import React from 'react';
import Header from '@/Components/01-atoms/Content/Header/Header';
import RexultiLogo from '@/assets/rexulti-logo.png';
import { Link } from '@/Components/03-organisms/Routing/Link/Link';
import { Footer } from '@/Components/03-organisms/Footer/Footer';
import PageImage from './img/Image1.png';
import styles from './R.3.6_Dosing.module.scss';

const PageContent = () => {
  return (
    <div className={styles.page}>
      <Header custom={`${styles.h1} mb-24 mt-24`}>
        Dosing and Administration
      </Header>
      <ul className={`mb-37 ${styles.rexulti_list}`}>
        <li className='mb-10'>
          REXULTI® (brexpiprazole) is a once-daily therapy for patients with AAD
        </li>
        <li>
          REXULTI has a target dose of 2 mg, with the following titration
          schedule:
        </li>
      </ul>
      <img className={styles.image_1} src={PageImage} alt='' width='852' />
      <Footer
        custom={styles.footer}
        footnotes={{
          custom: styles.footnotes,
          data: [
            {
              innerText:
                'AAD, agitation associated with Alzheimer’s dementia; AchEI, acetyl-cholinesterase-inhibitor; NMDA, N-methyl-D-aspartate; SNRI, serotonin and' +
                '\n' +
                'norepinephrine reuptake inhibitors; SSRI, selective serotonin reuptake inhibitor.',
            },
          ],
        }}
        safetyInfo={{
          custom: `mt-6 ${styles.safety_info}`,
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
        image={<img src={RexultiLogo} alt='maintena-logo' width='140.2' />}
      />
    </div>
  );
};
export default PageContent;
