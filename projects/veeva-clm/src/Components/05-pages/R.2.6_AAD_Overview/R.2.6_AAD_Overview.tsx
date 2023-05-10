import React from 'react';
import Header from '@/Components/01-atoms/Content/Header/Header';
import { Footer } from '@/Components/03-organisms/Footer/Footer';
import styles from './R.2.6_AAD_Overview.module.scss';
import PageImage from './img/Image1.png';

export const PageContent = () => (
  <div className={styles.page}>
    <Header type='h1' custom='mb-12 mt-30'>
      Current Treatment Options for AAD
    </Header>
    <Header type='h2' custom='mb-40 mt-50'>
      Medications prescribed in patients with AAD after failure
      <br /> of nonpharmacologic interventions include<sup>1-3</sup>:
    </Header>
    <img className='image-1' src={PageImage} alt='' width='852' />
    <Footer
      footnotes={{
        custom: 'mb-6',
        data: [
          {
            custom: 'mb-6',
            innerText:
              'AAD, agitation associated with Alzheimer’s dementia; FDA, US Food and Drug Administration.',
          },
        ],
      }}
      references={{
        custom: 'mb-6',
        data: [
          {
            text: (
              <span>
                Alzheimer’s Association. Accessed January 25, 2023.
                https://www.alz.org/alzheimers-dementia/treatments/treatments-for-behavior
              </span>
            ),
          },
          {
            text: (
              <span>
                Phan SV, et al. <em>Drugs R D</em>. <br />
                2019;19(2):93-115.
              </span>
            ),
          },
          {
            text: (
              <span>
                McDermott CL, et al. <em>Curr Geriatr Rep</em>
                .&nbsp;2019;8(1):1-11.
              </span>
            ),
          },
        ],
      }}
      safetyInfo={{
        data: [
          {
            text: 'FOR USE WITH FORMULARY DECISION-MAKERS ONLY. DO NOT DUPLICATE OR DISTRIBUTE.',
          },
        ],
      }}
    />
  </div>
);

export default PageContent;
