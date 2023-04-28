import React from 'react';
import Header from '@atoms/Content/Header/Header';
import { Footer } from '@/Components/03-organisms/Footer/Footer';
import { Link } from '@organisms/Routing';
import ModalCMAI from '@templates/Layouts/Modal/ModalCMAI/ModalCMAI';
import AnimationStudyGraphic from '@molecules/AnimationStudyGraphic/AnimationStudyGraphic';

import RexultiLogo from '@/assets/rexulti-logo.png';
import PageImage from './img/Image1.png';
import RexultiBanner from './img/Rexulti_banner.png';

import styles from './R.3.3.2_Study_6.module.scss';

const PageContent = () => {
  return (
    <div className={styles.page}>
      <Header custom={`${styles.h1} mb-12 mt-28`}>
        REXULTI® (brexpiprazole) 2 mg Daily Demonstrated Statistically
        Significant and Clinically Meaningful Reductions
        <br /> in Agitation Symptom Frequency vs Placebo<sup>1</sup>
      </Header>
      <AnimationStudyGraphic/>
      <img className={styles.image_1} src={PageImage} alt='' width={'820'} />
      <img className={styles.image_2} src={RexultiBanner} alt='' width={'824'} />

      <ModalCMAI />
      <Footer
        custom={styles.footer}
        footnotes={{
          custom: `mb-8 ${styles.footnote}`,
          data: [
            {
              supLeft: '*',
              supRight: '2',
              innerText:
                'Statistical significance was evaluated using a mixed model for repeated-measures analysis.',
            },
            {
              innerText:
                'CMAI, Cohen-Mansfield Agitation Inventory; SD, standard deviation; SE, standard error.',
            },
          ],
        }}
        references={{
          custom: 'mb-10',
          data: [
            {
              text: (
                <span>
                  Grossberg GT, et al.{' '}
                  <strong>Am J Geriatr Psychiatry. </strong>
                  2020;28(4):383-400.
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
        images={[<img src={RexultiLogo} alt='maintena-logo' width='154.2' />]}
      />
    </div>
  );
};
export default PageContent;
