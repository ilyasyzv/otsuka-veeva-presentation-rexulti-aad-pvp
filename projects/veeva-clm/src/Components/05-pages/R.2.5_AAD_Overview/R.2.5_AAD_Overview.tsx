import React from 'react';
import Header from '@atoms/Content/Header/Header';
import { Footer } from '@organisms/Footer/Footer';

import ModalCosts from '@templates/Layouts/Modal/ModalCosts';
import table1 from './imgs/table1.png';
import styles from './R.2.5_AAD_Overview.module.scss';

const PageContent: React.FC = () => {
  return (
    <div className={styles.page}>
      <Header type={'h1'} custom={styles.h1}>
        Agitation Has Been Associated With Increased Healthcare
        <br /> Resource Utilization and Healthcare Costs<sup>1</sup>
      </Header>
      <div className={styles.text}>
        In a real-world study of 1,349 patients with early cognitive impairment
        <br /> or Alzheimer’s dementia, patients with agitation had{' '}
        <strong>
          higher
          <br />
          healthcare resource utilization and healthcare costs
        </strong>{' '}
        than patients
        <br /> without agitation.
      </div>
      <img src={table1} className={styles.imgBg} />
      <div className={styles.buttonContainer}>
        <ModalCosts />
      </div>
      <Footer
        custom={styles.footer}
        footnotes={{
          data: [
            {
              supLeft: '*',
              innerText: (
                <span>
                  Direct healthcare costs related to professional caregiving,
                  nursing home costs, HCP consultations, hospitalizations,
                  treatment, and scans in the previous 12 months were calculated
                  as USD/year, <br /> based on reported healthcare resource
                  utilization (HCRU) multiplied by unit costs. <br />
                  HCP, healthcare provider; USD, United States dollar.
                </span>
              ),
            },
          ],
        }}
        references={{
          custom: 'mt-10',
          data: [
            {
              text: (
                <span>
                  Jones E, et al. <strong>J Alzheimers Dis</strong>.
                  2021;83(1):89-101.
                </span>
              ),
            },
          ],
        }}
        safetyInfo={{
          custom: 'mt-10',
          data: [
            {
              text: 'FOR USE WITH FORMULARY DECISION-MAKERS ONLY. DO NOT DUPLICATE OR DISTRIBUTE.',
            },
          ],
        }}
      />
    </div>
  );
};
export default PageContent;
