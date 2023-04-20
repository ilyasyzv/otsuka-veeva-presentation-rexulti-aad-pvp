import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';
import { Header } from '@atoms/Content/Header/Header';
import { Footer } from '@/Components/03-organisms/Footer/Footer';
import AsimtufiiLogo from '@/assets/asimtufii-logo.png';
import PageImage from './img/page-image.png';
import './style.scss';

export default {
  title: 'CLM/Pages',
  component: 'A.1.0_Executive_summary',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_1_0_Executive_summary_content'],
};

const baseClass = 'page--A_1_0_Executive_summary';
const content = () => (
  <>
    <Header custom={`${baseClass}-header-1 mb-15 mt-5`}>
      ABILIFY ASIMTUFII<sup>®</sup> (aripiprazole) offers comparable safety and
      tolerability to ABILIFY MAINTENA<sup>®</sup> (aripiprazole) with <br />2
      months of sustained efficacy in patients with schizophrenia or bipolar I
      disorder (BP-I)<sup>1</sup>
    </Header>
    <img className={`${baseClass}-img-1`} src={PageImage} alt='' width='852' />
    <Footer
      custom='mb-8'
      footnotes={{
        custom: 'mb-3',
        data: [
          {
            supLeftBig: '*',
            innerText: (
              <span>
                In a pharmacokinetic bridging study, the mean plasma
                concentration of ABILIFY ASIMTUFII remained within a therapeutic
                and efficacious concentration
                <br /> between 200 ng/mL and 320 ng/mL during the 56-day dosing
                interval.<sup>6</sup>
                <br /> AR=adverse reaction; FDA=US Food and Drug Administration.
              </span>
            ),
          },
        ],
      }}
      references={{
        custom: 'mb-38 pr-20',
        data: [
          {
            text: 'Harlin M, et al. CNS Drugs. 2023;10.1007/s40263-023-00996-8',
          },
          {
            text: 'Merative Micromedex. Accessed March 22, 2023. https://www.micromedexsolutions.com/',
          },
          {
            text: 'Data on file. Otsuka.',
          },
        ],
      }}
      distance='18px'
      safetyInfo={{
        custom: 'mt-9',
        data: [
          {
            text: (
              <span>
                Please see{' '}
                <a href='/' className='blue-500'>
                  IMPORTANT SAFETY INFORMATION
                </a>{' '}
                in this presentation.
              </span>
            ),
          },
          {
            text: 'FOR USE WITH FORMULARY DECISION-MAKERS ONLY. DO NOT DUPLICATE OR DISTRIBUTE. ',
          },
        ],
      }}
      image={<img src={AsimtufiiLogo} alt='asimtufii-logo' width='142.5' />}
    />
  </>
);

const Template = () => {
  return <AppStorybook path='A.1.0_Executive_summary' components={content} />;
};

export const A_1_0_Executive_summary = Template.bind({});
export const A_1_0_Executive_summary_content = content.bind({});
