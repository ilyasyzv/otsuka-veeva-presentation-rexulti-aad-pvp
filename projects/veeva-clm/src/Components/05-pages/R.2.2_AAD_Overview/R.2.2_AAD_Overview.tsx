import React from 'react';
import ModalAddReported from '@templates/Layouts/Modal/ModalAddReported/ModalAddReported';
import Header from '@atoms/Content/Header/Header';
import FadingBlocks from '@organisms/FadingBlocks/FadingBlocks';
import { Footer } from '@organisms/Footer/Footer';
import styles from './R.2.2_AAD_Overview.module.scss';
import cart from './imgs/card.png';
import item1 from './imgs/item1.png';
import item2 from './imgs/item2.png';
import item3 from './imgs/item3.png';
import item4 from './imgs/item4.png';
import white_card from './imgs/white_card.png';
import people from './imgs/people.png';

const PageContent: React.FC = () => {
  return (
    <div className={styles.page}>
      <Header type='h1' custom={`${styles.h1} ${styles.custom}`}>
        AAD Is Reported in 45% of Community-Living Patients
        <br /> With Alzheimer’s Dementia<sup>1</sup>
      </Header>
      <Header type='h2' custom={styles.h2}>
        Number of Americans aged ≥65 years with dementia being treated for
        agitation<sup>*</sup>
      </Header>
      <div className={`${styles.fading} mb-50`}>
        <FadingBlocks>
          <img src={item1} alt='cart' className={styles.item1} />
          <img src={item2} alt='cart' className={styles.item2} />
          <img src={item3} alt='cart' className={styles.item3} />
          <img src={item4} alt='cart' className={styles.item4} />
        </FadingBlocks>
      </div>
      <div className={styles.buttonContainer}>
        <ModalAddReported />
      </div>

      <img src={cart} className={styles.card} alt='cart' />
      <img src={people} className={styles.people} alt='cart' />
      <Footer
        footnotes={{
          data: [
            {
              supLeft: '*',
              innerText: (
                <span>
                  <strong>
                    Percentage of patients who received treatment with an
                    antipsychotic was estimated from a model rather than
                    measured data.
                  </strong>
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
                  Halpern R, et al. <em>Int J Geriatr Psychiatry</em>.
                  2019;34(3):420-431.
                </span>
              ),
            },
            {
              text: (
                <span>
                  Alzheimer’s Association. <em>Alzheimers Demet</em>.
                  2023;19(4).
                </span>
              ),
            },
            {
              text: <span>Data on file. Otsuka.</span>,
            },
          ],
        }}
        safetyInfo={{
          custom: 'mt-5',
          data: [
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
      />
    </div>
  );
};
export default PageContent;
