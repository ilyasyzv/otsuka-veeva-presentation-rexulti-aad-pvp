import React from 'react';
import Header from '@/Components/01-atoms/Content/Header/Header';
import RexultiLogo from '@/assets/rexulti-logo.png';
import { Link } from '@/Components/03-organisms/Routing/Link/Link';
import { Footer } from '@/Components/03-organisms/Footer/Footer';

import PageImage from './img/Image1.png';

import styles from './R.1.0_Executive_summary.module.scss';

const PageContent = () => {
  return (
    <div className={styles.page}>
      <Header custom={`${styles.h1} mb-22`}>
        REXULTI<sup>®</sup> (brexpiprazole) Offers a Treatment Option
        <br /> With Proven Efficacy and Demonstrated Safety for
        <br /> Patients With AAD
      </Header>
      <img className={styles.image_1} src={PageImage} alt='' width='852' />
      <Footer
        footnotes={{
          data: [
            {
              innerText:
                'AAD, agitation associated with Alzheimer’s dementia; CMAI, Cohen-Mansfield Agitation Inventory; FDA, US Food and Drug Administration.',
            },
          ],
        }}
        references={{
          custom: 'mb-4 mt-8',
          data: [
            {
              text: (
                <>
                  Jones E, et al. <em>J Alzheimers Dis.</em> 2021;83(1):89-101.
                </>
              ),
            },
          ],
        }}
        safetyInfo={{
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
