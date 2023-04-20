import { AppStorybook } from '@pages/AppStorybook';
import React from 'react';
import { Header } from '@atoms/Content/Header/Header';
import { StudyDesign1, Relapse } from '@templates/Layouts/Modal/Modal.stories';

import { Paragraph } from '@atoms/Content/Paragraph/Paragraph';
import Placebo_image from '@/Components/05-pages/A.3.5.4_Additional/img/Placebo_image.png';
import Primary_graphic from '@/Components/05-pages/A.3.5.4_Additional/img/Primary_graphic.png';
import './style.scss';
import AsimtufiiLogo from '@/assets/asimtufii-logo.png';
import { Footer } from '@/Components/03-organisms/Footer/Footer';
import { Link } from '@/Components/03-organisms/Routing/Link/Link';

export default {
  title: 'CLM/Pages',
  component: 'A.3.5.4_Additional',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_3_5_4_Additional_content'],
};

const baseClass = 'page--A_3_5_4_Additional';
const content = () => (
  <>
    <Header type='h3' custom={`${baseClass}-header-1 heading-alter`}>
      PIVOTAL 52-WEEK SCHIZOPHRENIA MAINTENANCE STUDY
    </Header>
    <Header custom={`${baseClass}-header-2 mb-25`}>
      ABILIFY MAINTENA<sup>®</sup> (aripiprazole) significantly reduced the risk
      of relapse by 80% vs placebo
      <sup>1</sup>
    </Header>
    <img src={Primary_graphic} alt='graphic' className='graphic' />
    <img src={Placebo_image} alt='placebo' className='placebo ml-15 mb-57' />
    <Paragraph position='center' custom='mt-3'>
      The HR was used to calculate the reduction in risk of relapse
      <br /> for patient on ABILIFY MAINTENA vs placebo.<sup>1</sup>
    </Paragraph>
    <StudyDesign1 {...StudyDesign1.args} />
    <StudyDesign1 {...Relapse.args} />
    <Footer
      footnotes={{
        data: [
          {
            supLeft: '*',
            innerText:
              'Relapse was defined as clinical worsening, psychiatric hospitalization, increased risk of suicide, or violent behavior.',
            supRight: '1',
          },
          {
            supLeft: '†',
            innerText: 'This figure is based on a total of 80 relapse events.',
            supRight: '1',
          },
          {
            innerText: ' CI=confidence interval; HR=hazard ratio.',
          },
        ],
      }}
      references={{
        custom: 'mt-3',
        data: [
          {
            text: (
              <span>
                Kane JM, et al. <em>J Clin Psychiatry.</em> 2012;73(5):617-624.
              </span>
            ),
          },
          {
            text: <span>Data on file. Otsuka.</span>,
          },
        ],
      }}
      safetyInfo={{
        custom: 'mt-15',
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
      image={<img src={AsimtufiiLogo} alt='asimtufii-logo' width='142.5' />}
    />
  </>
);

const Template = () => {
  return <AppStorybook path='A.3.5.4_Additional' components={content} />;
};

export const A_3_5_4_Additional = Template.bind({});
export const A_3_5_4_Additional_content = content.bind({});
