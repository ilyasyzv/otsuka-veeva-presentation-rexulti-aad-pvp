import React from 'react';
import Header from '@atoms/Content/Header/Header';
import Paragraph from '@atoms/Content/Paragraph/Paragraph';
import Footer from '@organisms/Footer/Footer';
import { Link } from '@organisms/Routing';

import styles from './R.4.0_Patient_support.module.scss';

import PageImage from './img/otsuka_patient_support_logo.png';

import RexultiLogo from '@/assets/rexulti-logo.png';

const PageContent: React.FC = () => {
  return (
    <div className={styles.page}>
      <Header custom={'mb-55'}>
        Otsuka Patient Support<sup>™</sup> Is Committed to Providing
        Personalized Support for Patients and Their Care Partners
      </Header>
      <img className={styles.image_1} src={PageImage} alt='' width='545' />
      <div className='mt-27'>
        <div className={styles.support_text}>
          <Paragraph position='center'>
            <strong>
              Otsuka Patient Support is committed to providing personalized
              support for patients and their partners.
            </strong>
          </Paragraph>
          <Paragraph position='center'>
            <strong>
              Visit{' '}
              <a href='https://www.otsukapatientsupport.com/'>
                OtsukaPatientSupport.com
              </a>{' '}
              to learn more about tools, resources and dedicated support team
              that are available.
            </strong>
          </Paragraph>
        </div>
      </div>

      <Footer
        custom={styles.footer}
        references={{
          data: [
            {
              text: <span>Data on file. Otsuka.</span>,
            },
          ],
        }}
        safetyInfo={{
          custom: `mt-6 ${styles.safety_info}`,
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
