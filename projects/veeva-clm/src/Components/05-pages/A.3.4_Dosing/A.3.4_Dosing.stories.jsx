import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';
import { Header } from '@atoms/Content/Header/Header';
import { Footer } from '@/Components/03-organisms/Footer/Footer';
import { Link } from '@/Components/03-organisms/Routing/Link/Link';
import AsimtufiiLogo from '@/assets/asimtufii-logo.png';
import PageImage1 from './img/page-image-1.png';
import PageImage2 from './img/page-image-2.png';
import './style.scss';

export default {
  title: 'CLM/Pages',
  component: 'A.3.4_Dosing',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_3_4_Dosing_content'],
};

const baseClass = 'page--A_3_4_Dosing';
const content = () => (
  <>
    <Header custom={`${baseClass}-header-1 mb-27`}>
      Dosage and administration<sup>1</sup>
    </Header>
    <img
      className={`${baseClass}-img-1 mt-43`}
      src={PageImage1}
      alt=''
      width='835'
    />

    <Header
      custom={`${baseClass}-header-2 text-center m-20 blue-500`}
      type='h2'
    >
      Administered by a health care professional once every 2 months by
      <br />
      intramuscular injection in the gluteal muscle
    </Header>

    <img className={`${baseClass}-img-2`} src={PageImage2} alt='' width='835' />

    <Footer
      custom='mb-7'
      footnotes={{
        custom: 'mb-4',
        data: [
          {
            supLeft: '*',
            innerText: (
              <span>
                720 mg is available for patients who cannot tolerate the 960-mg
                dose.
              </span>
            ),
          },
        ],
      }}
      safetyInfo={{
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
            text: 'FOR USE WITH FORMULARY DECISION-MAKERS ONLY. DO NOT DUPLICATE OR DISTRIBUTE.',
          },
        ],
      }}
      image={<img src={AsimtufiiLogo} alt='asimtufii-logo' width='142.5' />}
    />
  </>
);

const Template = () => {
  return <AppStorybook path='A.3.4_Dosing' components={content} />;
};

export const A_3_4_Dosing = Template.bind({});
export const A_3_4_Dosing_content = content.bind({});
