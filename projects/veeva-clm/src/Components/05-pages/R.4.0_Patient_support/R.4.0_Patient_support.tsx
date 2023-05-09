import React from 'react';
import Header from '@atoms/Content/Header/Header';
import Paragraph from '@atoms/Content/Paragraph/Paragraph';
import Footer from '@organisms/Footer/Footer';
import { Link } from '@organisms/Routing';
import classNames from 'classnames';

import RexultiLogo from '@/assets/rexulti-logo.png';
import PageImage from './img/otsuka_patient_support_logo.png';

import styles from './R.4.0_Patient_support.module.scss';

const PageContent: React.FC = () => {
  return (
    <div className={styles.page}>
      <Header custom={classNames('mt-20', 'mb-48')}>
        Otsuka Patient Support<sup className='big'>™</sup> Is Committed to
        Providing Personalized Support for Patients and Their Care Partners
      </Header>
      <img className={styles.image_1} src={PageImage} alt='' width='545' />
      <div className={`${styles.support_text} bg-gray-200 mt-31`}>
        <Paragraph position='center' custom={styles.support_text_inner}>
          <strong>
            Otsuka Patient Support is committed to providing personalized
            support for patients and their partners.
          </strong>
        </Paragraph>
        <Paragraph position='center' custom={styles.support_text_inner}>
          <strong>
            Visit{' '}
            <a href='https://www.otsukapatientsupport.com/'>
              otsukapatientsupport.com
            </a>{' '}
            to learn more about the tools, resources, and dedicated support team
            that are available.
          </strong>
        </Paragraph>
      </div>

      <Footer
        safetyInfo={{
          custom: `${styles.safety_info}`,
          data: [
            {
              text: (
                <span>
                  <b>Please see </b>
                  <Link to='R.6.0_ISI' custom={styles.footerLink}>
                    IMPORTANT SAFETY INFORMATION
                  </Link>{' '}
                  <b>in this presentation.</b>
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
