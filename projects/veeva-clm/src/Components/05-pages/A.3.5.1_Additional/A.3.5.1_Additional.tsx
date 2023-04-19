import React from 'react';
import Header from '@/Components/01-atoms/Content/Header/Header';
import Link from '@/Components/03-organisms/Routing/Link/Link';
import { Footer } from '@/Components/03-organisms/Footer/Footer';
import AsimtufiiLogo from '@/assets/asimtufii-logo.png';
import styles from './A.3.5.1_Additional.module.scss';

const PageContent = () => (
  <div className={styles.page}>
    <Header type='h1'>
      The clinical profile of ABILIFY ASIMTUFII<sup>®</sup> (aripiprazole) in
      <br /> the treatment of schizophrenia and bipolar I disorder is
      <br /> supported in part by the established efficacy and safety of
      <br /> ABILIFY MAINTENA® (aripiprazole)
    </Header>

    <div className='additional-card'>
      <Header type='h2'>
        ABILIFY MAINTENA Efficacy in Schizophrenia and Bipolar I Disorder
      </Header>
      <div className='buttons-group'>
        <div className='buttons-group-row'>
          <Link
            to='A.3.5.2_Additional'
            custom='button button__type-c button__type-c-large'
          >
            <div className='button__text'>
              Short-term Study:
              <br />
              Schizophrenia
            </div>
          </Link>
          <Link
            to='A.3.5.4_Additional'
            custom='button button__type-c button__type-c-large button__type-c-large-blue'
          >
            <div className='button__text'>
              Long-term Study:
              <br />
              Schizophrenia
            </div>
          </Link>
          <Link
            to='A.3.5.5_Additional'
            custom='button button__type-c button__type-c-large button__type-c-large-gray'
          >
            <div className='button__text'>
              Long-term Study:
              <br />
              Bipolar I Disorder
            </div>
          </Link>
        </div>
      </div>
    </div>
    <div className='buttons-group-row-center'>
      <Link
        to='A.6.3.X_Appendix_Safety'
        custom='button button__type-c button__type-c-large button__type-c-large-dark'
      >
        <div className='button__text'>
          ABILIFY MAINTENA
          <br />
          Safety
        </div>
      </Link>
    </div>
    <Footer
      safetyInfo={{
        custom: 'mt-5',
        data: [
          {
            text: (
              <span>
                Please see{' '}
                <Link to='A.7.0_ISI' custom='blue-500'>
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
      image={<img src={AsimtufiiLogo} alt='maintena-logo' width='140.2' />}
    />
  </div>
);
export default PageContent;
