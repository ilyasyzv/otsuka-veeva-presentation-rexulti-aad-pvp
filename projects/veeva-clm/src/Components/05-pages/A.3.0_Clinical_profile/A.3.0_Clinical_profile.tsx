import React from 'react';
import Header from '@/Components/01-atoms/Content/Header/Header';
import Link from '@/Components/03-organisms/Routing/Link/Link';
import { Footer } from '@/Components/03-organisms/Footer/Footer';

import logo from './imgs/Abilify_Asimtufii_Logo_Lockup_R_RGB.png';

import styles from './A.3.0_Clinical_profile.module.scss';

const PageContent = () => {
  return (
    <div className={styles.page}>
      <Header type='h1'>
        <>
          ABILIFY ASIMTUFII<sup>®</sup> (aripiprazole): The
          <br /> First and Only Once-Every-2-Months Long-
          <br />
          Acting Injectable Suspension Indicated for
          <br />
          Treatment of Both Schizophrenia and
          <br />
          Bipolar I Disorder in Adults
        </>
      </Header>
      <div className='buttons-group'>
        <div className='buttons-group-row'>
          <Link
            to='A.3.1.1_Overview'
            custom='button button__type-c button__type-c-large button__type-c-large-blue'
            text='Overview'
          >
            <div className='button__text'>Overview</div>
          </Link>
          <Link
            to='A.3.2.1_Efficacy'
            custom='button button__type-c button__type-c-large button__type-c-large-blue'
            text='PK Study'
          >
            <div className='button__text'>PK Study</div>
          </Link>
          <Link
            to='A.3.5.1_Additional'
            custom='button button__type-c button__type-c-large button__type-c-large-blue'
            text='Safety Data'
          >
            <div className='button__text'>Safety Data</div>
          </Link>
        </div>
        <div className='buttons-group-row'>
          <Link
            to='A.3.4_Dosing'
            custom='button button__type-c button__type-c-large button__type-c-large-blue'
            text='Dosing & Administration'
          >
            <div className='button__text'>
              Dosing &<br />
              Administration
            </div>
          </Link>
          <Link
            to='A.6.1.1_Appendix_Safety'
            custom='button button__type-c button__type-c-large button__type-c-large-blue'
          >
            <div className='button__text'>
              ABILIFY MAINTENA<sup>®</sup> <br />
              Pivotal Studies
            </div>
          </Link>
        </div>
        <img src={logo} className='page-logo' alt='logo' />
      </div>
      <Footer
        footnotes={{
          data: [
            {
              innerText: (
                <span>PK=pharmacokinetic; RWE=real-world evidence.</span>
              ),
            },
          ],
        }}
        safetyInfo={{
          custom: 'mt-5',
          data: [
            {
              text: (
                <span>
                  Please see{' '}
                  <a href='/' className='blue-500'>
                    FULL PRESCRIBING INFORMATION
                  </a>{' '}
                  including BOXED WARNING available in this presentation.
                </span>
              ),
            },
            {
              text: 'FOR USE WITH FORMULARY DECISION-MAKERS ONLY. DO NOT DUPLICATE OR DISTRIBUTE. ',
            },
          ],
        }}
      />
    </div>
  );
};
export default PageContent;
