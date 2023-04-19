import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';
import { Header } from '@atoms/Content/Header/Header';
import Paragraph from '@atoms/Content/Paragraph/Paragraph';
import { Footer } from '@/Components/03-organisms/Footer/Footer';
import PageImage from './img/page-image.png';
import './style.scss';

export default {
  title: 'CLM/Pages',
  component: 'A.2.2.2_B_Overview',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_2_2_2_B_Overview_content'],
};

const baseClass = 'page--A_2_2_2_B_Overview';
const content = () => (
  <>
    <Header custom={`${baseClass}-header-1 mt-5 mb-13`}>
      Patients with bipolar I disorder (BP-I) continue to <br />
      experience issues with relapse and adherence, leading to increased
      hospitalizations<sup>1-3</sup>
    </Header>
    <Header custom={`${baseClass}-header-2`} type='h3'>
      Patients living with BP-I experience high rates of recurrence of manic and
      depressive episodes<sup>1</sup>
    </Header>

    <img
      className={`${baseClass}-img-1 mt-39 ml-40 mb-15`}
      src={PageImage}
      alt=''
      width='743'
    />
    <Paragraph custom={`${baseClass}-paragraph-1 mr-40`}>
      <span>
        In a retrospective study including 18,388 patients, those who were
        nonadherent to therapy had a higher rate of psychiatric hospitalizations
        compared to those who were adherent (8.8% vs 6%) and had 1.5 times
        greater odds of psychiatric hospitalization<sup>3</sup>
      </span>
    </Paragraph>
    <Footer
      custom='mb-8'
      footnotes={{
        custom: 'mb-5',
        data: [
          {
            supLeft: '*',
            innerText: (
              <span>
                These studies do not differentiate between bipolar disorders.
                <sup>1,2</sup>
              </span>
            ),
          },
        ],
      }}
      references={{
        custom: 'mb-27',
        data: [
          {
            text: (
              <span>
                Simhandl C, et al. J Clin Psychiatry. 2014;75(3):254-263.
              </span>
            ),
          },
          {
            text: (
              <span>Berk L, et al. Hum Psychopharmacol. 2010;25(1):1-16.</span>
            ),
          },
          {
            text: (
              <span>
                Broder MS, et al. J Med Econ.
                <br /> 2019; 22(1):63-70.
              </span>
            ),
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
                FOR USE WITH FORMULARY DECISION-MAKERS ONLY. DO NOT DUPLICATE OR
                DISTRIBUTE.
              </span>
            ),
          },
        ],
      }}
    />
  </>
);

const Template = () => {
  return <AppStorybook path='A.2.2.2_B_Overview' components={content} />;
};

export const A_2_2_2_B_Overview = Template.bind({});
export const A_2_2_2_B_Overview_content = content.bind({});
