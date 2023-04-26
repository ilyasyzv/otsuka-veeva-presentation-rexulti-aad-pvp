import React from 'react';
import Header from '@/Components/01-atoms/Content/Header/Header';
import RexultiLogo from '@/assets/rexulti-logo.png';
import { Link } from '@/Components/03-organisms/Routing/Link/Link';
import { Footer } from '@/Components/03-organisms/Footer/Footer';

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
      <Header type='h3' custom={`${styles.h3} mb-20 text-center`}>
        Tap below to view a specific topic
      </Header>
      <img className={styles.image_1} src={PageImage} alt='' width='852' />
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
        image={<img src={RexultiLogo} alt='rexulti-logo' width='154.2' />}
      />
    </div>
  );
};
export default PageContent;
