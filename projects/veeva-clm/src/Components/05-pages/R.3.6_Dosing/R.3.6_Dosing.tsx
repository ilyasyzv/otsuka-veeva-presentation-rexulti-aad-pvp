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
      <ul className={`mb-27 ${styles.rexulti_list}`}>
        <li>
          REXULTI® (brexpiprazole) is a once-daily therapy for patients with AAD
        </li>
      </ul>
      <img className={styles.image_1} src={PageImage} alt='' width='852' />
      <ul className={`mb-15 ${styles.rexulti_list}`}>
        <li>
          Dose can be increased to the maximum recommended daily dose of 3
          mg/day after at least 14 days, <br />
          based on clinical response and tolerability
        </li>
        <li>With or without food</li>
      </ul>
      <p className={styles.paragraph}>
        <strong>Dose adjustments for REXULTI</strong>
      </p>
      <ul className={`mb-1 ${styles.rexulti_list}`}>
        <li>
          Dose adjustments may be needed in patients with hepatic or renal
          impairment
        </li>
        <li>
          Administer half the dose of REXULTI when taken with strong CYP3A4
          inhibitors or in patients who are known <br />
          CYP2D6 poor metabolizers
        </li>
        <li>
          Administer a quarter of the dose with the concurrent use of both
          strong/moderate CYP2D6 inhibitors and <br />
          strong/moderate CYP3A4 inhibitors. Likewise, administer a quarter of
          the dose in patients who are known <br />
          CYP2D6 poor metabolizers taking strong/moderate CYP3A4 inhibitors
        </li>
        <li>
          Double the dose over 1 to 2 weeks when administering with strong
          CYP3A4 inducers
        </li>
      </ul>
      <Footer
        custom={styles.footer}
        footnotes={{
          custom: `${styles.footnotes}`,
          data: [
            {
              innerText: (
                <>AAD, agitation associated with Alzheimer’s dementia.</>
              ),
            },
          ],
        }}
        safetyInfo={{
          custom: `mt-6 ${styles.safety_info}`,
          data: [
            {
              text: (
                <strong>
                  Please see{' '}
                  <Link to='R.6.0_ISI'>IMPORTANT SAFETY INFORMATION</Link> in
                  this presentation.
                </strong>
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
