import React from 'react';
import Header from '@atoms/Content/Header/Header';
import { Footer } from '@/Components/03-organisms/Footer/Footer';
import { Link } from '@organisms/Routing';
import { Button } from '@atoms/Content/Button/Button';
import RexultiLogo from '@/assets/rexulti-logo.png';
import { CMAIAdditionalInfo } from '@templates/Layouts/Modal/Modal.stories';
import styles from './R.3.3.2_Study_6.module.scss';
import PageImage from './img/Image1.png';

const PageContent = () => {
  return (
    <div className={styles.page}>
      <Header custom={`${styles.h1} mb-12 mt-24`}>
        REXULTI® (brexpiprazole) 2 mg Daily Demonstrated Statistically
        Significant and Clinically Meaningful Reductions
        <br /> in Agitation Symptom Frequency vs Placebo<sup>1</sup>
      </Header>
      <img className={`mb-10 ${styles.image_1}`} src={PageImage} alt='' />
      <CMAIAdditionalInfo
        {...CMAIAdditionalInfo.args}
        link={
          <Button
            text='CMAI Additional Information'
            custom={`button__type-a--active ${styles.modal_button}`}
          />
        }
      />
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
                  2020;28(4):383-400. 2014;350(3):589-604.
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
