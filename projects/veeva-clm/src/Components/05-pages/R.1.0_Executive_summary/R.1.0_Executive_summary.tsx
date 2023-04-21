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
      <Header custom={`${styles.h1} mb-12`}>
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
          custom: 'mb-8 mt-8',
          data: [
            {
              text: (
                <>
                  Jones E, et al. <strong>J Alzheimers Dis.</strong>{' '}
                  2021;83(1):89-101.
                </>
              ),
            },
          ],
        }}
        safetyInfo={{
          custom: 'mt-6',
          data: [
            {
              text: (
                <span>
                  Please see{' '}
                  <Link to='R.6.0_ISI' custom='blue-500'>
                    IMPORTANT SAFETY INFORMATION
                  </Link>{' '}
                  in this presentation.
                </span>
              ),
            },
            {
              text: 'FOR USE WITH FORMULARY DECISION-MAKERS ONLY. DO NOT DUPLICATE OR DISTRIBUTE. ',
            },
          ],
        }}
        image={<img src={RexultiLogo} alt='maintena-logo' width='140.2' />}
      />
    </div>
  );
};
export default PageContent;
