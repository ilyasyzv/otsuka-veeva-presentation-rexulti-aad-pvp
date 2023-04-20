import { AppStorybook } from '@pages/AppStorybook';
import SupportLogo from '@/Components/05-pages/A.5.1_Patients_support_providers/img/Otsuka Patient Support Logo_RGB.png';
import { Header } from '@atoms/Content/Header/Header';
import { Paragraph } from '@atoms/Content/Paragraph/Paragraph';

import React from 'react';
import { Footer } from '@/Components/03-organisms/Footer/Footer';
import { Link } from '@/Components/03-organisms/Routing/Link/Link';
import MaintenaLogo from '@/Components/05-pages/A.5.1_Patients_support_providers/img/Abilify_Asimtufii_Logo_Lockup_R_RGB1.png';
import './style.scss';

export default {
  title: 'CLM/Pages',
  component: 'A.5.1_Patients_support_providers',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_5_1_Patients_support_providers_content'],
};

const baseClass = 'page--A_5_1_Patient_support';
const content = () => (
  <>
    <Header custom={`${baseClass}-header-2 mb-23`}>
      Otsuka Patient Support<sup>™</sup> is committed to providing personalized
      support for patients and their care partners
    </Header>
    <img src={SupportLogo} alt='support logo' className='support' />
    <div className='background-grey-blue mt-27 ml-80'>
      <div className='support-text'>
        <Paragraph position='center'>
          <strong>
            <em>
              Otsuka Patient Support is committed to providing personalized
              support for
              <br /> patients and their partners.
            </em>
          </strong>
        </Paragraph>
        <hr />
        <Paragraph position='center'>
          <strong>
            <em>
              Visit{' '}
              <a href='https://www.otsukapatientsupport.com/'>
                OtsukaPatientSupport.com
              </a>{' '}
              to learn more about tools, resources and
              <br /> dedicated support team that are available.
            </em>
          </strong>
        </Paragraph>
      </div>
    </div>
    <Footer
      safetyInfo={{
        custom: 'mt-7',
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
      image={<img src={MaintenaLogo} alt='maintena-logo' width='140.2' />}
    />
  </>
);

const Template = () => {
  return (
    <AppStorybook
      path='A.5.1_Patients_support_providers'
      components={content}
    />
  );
};

export const A_5_1_Patients_support_providers = Template.bind({});
export const A_5_1_Patients_support_providers_content = content.bind({});
