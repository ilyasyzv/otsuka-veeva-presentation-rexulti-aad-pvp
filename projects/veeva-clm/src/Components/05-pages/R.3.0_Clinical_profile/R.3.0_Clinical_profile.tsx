import React from 'react';
import Header from '@/Components/01-atoms/Content/Header/Header';
import RexultiLogo from '@/assets/rexulti-logo.png';
import { Link } from '@/Components/03-organisms/Routing/Link/Link';
import { Footer } from '@/Components/03-organisms/Footer/Footer';
import Item1 from './img/Item1.png';
import Item2 from './img/Item2.png';
import Item3 from './img/Item3.png';
import Item4 from './img/Item4.png';
import Item5 from './img/Item5.png';
import Item6 from './img/Item6.png';
import Item7 from './img/Item7.png';

import PageImage from './img/Image1.png';

import styles from './R.3.0_Clinical_profile.module.scss';

const PageContent: React.FC = () => {
  return (
    <div className={styles.page}>
      <Header custom={`${styles.h1} mb-36 text-center`}>
        REXULTI<sup>®</sup> (brexpiprazole):
        <br />
        <span>
          The First and Only FDA-Approved
          <br /> Pharmacologic Treatment for AAD
        </span>
      </Header>
      <Header type='h3' custom={`${styles.h3} mb-50 text-center`}>
        Tap below to view a specific topic
      </Header>
      <div className={styles.wrapper}>
        <Link custom={styles.item_link} to='R.3.1_Mechanism_of_action'>
          <img className={styles.item} src={Item1} alt='' />
        </Link>
        <Link custom={styles.item_link} to='R.3.2_Clinical_studies_overview'>
          <img className={styles.item} src={Item2} alt='' />
        </Link>
        <Link custom={styles.item_link} to='R.3.3.1_Study_6'>
          <img className={styles.item} src={Item3} alt='' />
        </Link>
        <Link custom={styles.item_link} to='R.3.4.1_Study_7'>
          <img className={styles.item} src={Item4} alt='' />
        </Link>
        <Link custom={styles.item_link} to='R.3.5_Study_6&7_safety'>
          <img className={styles.item} src={Item5} alt='' />
        </Link>
        <Link custom={styles.item_link} to='R.3.6_Dosing'>
          <img className={styles.item} src={Item6} alt='' />
        </Link>
        <Link custom={styles.item_link} to='R.3.7_Summary'>
          <img className={styles.item} src={Item7} alt='' />
        </Link>
      </div>
      <Footer
        footnotes={{
          data: [
            {
              innerText:
                'AAD, agitation associated with Alzheimer’s dementia; FDA, US Food and Drug Administration.',
            },
          ],
        }}
        safetyInfo={{
          custom: 'mt-6',
          data: [
            {
              text: (
                <strong>
                  Please see{' '}
                  <Link to='R.6.0_ISI' custom='blue-500'>
                    IMPORTANT SAFETY INFORMATION
                  </Link>{' '}
                  in this presentation.
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
        images={[<img src={RexultiLogo} alt='rexulti-logo' width='154.2' />]}
      />
    </div>
  );
};
export default PageContent;
