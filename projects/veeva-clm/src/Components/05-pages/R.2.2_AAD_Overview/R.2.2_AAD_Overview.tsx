import React from 'react';
import ModalAddReported from '@templates/Layouts/Modal/ModalAddReported/ModalAddReported';
import Header from '@atoms/Content/Header/Header';
import { Footer } from '@organisms/Footer/Footer';
import styles from './R.2.2_AAD_Overview.module.scss';
import cart from './imgs/card.png';
import white_card from './imgs/white_card.png';
import people from './imgs/people.png';

const PageContent: React.FC = () => {
  return (
    <div className={styles.page}>
      <Header type={'h1'} custom={styles.h1}>
        AAD Is Reported in 45% of Community-Living Patients
        <br /> With Alzheimer’s Dementia<sup>1</sup>
      </Header>
      <Header type={'h2'} custom={styles.h2}>
        Number of Americans aged ≥65 years with dementia being treated for
        agitation<sup>*</sup>
      </Header>

      <img src={white_card} alt='cart' className={styles.whiteCard} />
      <div className={styles.buttonContainer}>
        <ModalAddReported />
      </div>

      <img src={cart} className={styles.card} alt='cart' />
      <img src={people} className={styles.people} alt='cart' />
      <Footer
        custom='mb-15'
        footnotes={{
          data: [
            {
              supLeft: '*',
              innerText: (
                <span>
                  Percentage of patients who received treatment with an
                  antipsychotic was estimated from a model rather than measured
                  data.
                </span>
              ),
            },
            {
              innerText: (
                <span>
                  AAD, agitation associated with Alzheimer’s dementia.
                </span>
              ),
            },
          ],
        }}
        references={{
          custom: 'mt-5',
          data: [
            {
              text: (
                <span>
                  Halpern R, et al. <strong>Int J Geriatr Psychiatry</strong>.
                  2019;34(3):420-431.
                </span>
              ),
            },
            {
              text: (
                <span>
                  Alzheimer’s Association. 2023{' '}
                  <strong>Alzheimer’s Disease</strong> Facts and Figures.
                  Alzheimers Dement. 2023;19(4).
                </span>
              ),
            },
            {
              text: <span>Data on file. Otsuka.</span>,
            },
          ],
        }}
      />
    </div>
  );
};
export default PageContent;
