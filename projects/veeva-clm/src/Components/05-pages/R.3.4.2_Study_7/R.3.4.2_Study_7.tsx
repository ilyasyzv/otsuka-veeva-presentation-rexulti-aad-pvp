import React from 'react';
import Header from '@atoms/Content/Header/Header';
import Footer from '@organisms/Footer/Footer';
import { Link } from '@organisms/Routing';
import ModalCMAI from '@templates/Layouts/Modal/ModalCMAI/ModalCMAI';
import AnimationStudyGraphic2 from '@molecules/AnimationStudyGraphic2/AnimationStudyGraphic2';

import RexultiLogo from '@/assets/rexulti-logo.png';
import PageImage from './img/Image_1.png';
import RexultiBanner from './img/Rexulti_banner.png';

import styles from './R.3.4.2_Study_7.module.scss';

const PageContent: React.FC = () => {
  return (
    <div className={styles.page}>
      <Header custom={`${styles.h1} mt-31 mb-5`}>
        REXULTI® (brexpiprazole) 2 mg or 3 mg Daily Demonstrated
        a&nbsp;Statistically Significant Reduction in Agitation Symptom
        Frequency vs Placebo<sup>1</sup>
      </Header>
      <AnimationStudyGraphic2 />
      <img className={styles.image_1} src={PageImage} alt='' width='833' />
      <img className={styles.image_2} src={RexultiBanner} alt='' width='823' />
      <ModalCMAI />
      <Footer
        custom={styles.footer}
        footnotes={{
          custom: `mb-3 ${styles.footnote}`,
          data: [
            {
              supLeft: '*',
              innerText:
                'Statistical significance was evaluated using a mixed model for repeated-measures analysis.',
            },
            {
              innerText:
                'CI, confidence interval; CMAI, Cohen-Mansfield Agitation Inventory; LS, least squares; ' +
                'SD, standard deviation; SE, standard error.',
            },
          ],
        }}
        references={{
          custom: 'mb-10 mw-600',
          data: [
            {
              text: (
                <span>
                  Grossberg GT, et al. Poster presented at: Psych Congress;
                  September 17-20, 2022; New Orleans, LA.
                </span>
              ),
            },
            {
              text: (
                <span>
                  Cohen-Mansfield, J. (1991). Instruction Manual for the
                  Cohen-Mansfield Agitation Inventory (CMAI). Rockville, MD:
                  Research Institute of the Hebrew Home of Greater Washington.
                  Available at: https://uiowa2.instructure.com › files ›
                  download. Accessed March 17, 2023.
                </span>
              ),
            },
          ],
        }}
        safetyInfo={{
          custom: styles.safety_info,
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
