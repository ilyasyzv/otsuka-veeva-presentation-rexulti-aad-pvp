import React from 'react';
import { Button } from '@atoms/Content/Button/button';
import { Header } from '@atoms/Content/Header/Header';
import { FootNote } from '@atoms/Content/FootNote/FootNote';
import { Modal } from '@templates/Layouts/Modal/Modal';
import { Text } from '@/Components/01-atoms/Content/Text/Text';
import List from '@/Components/01-atoms/Content/List/List';
import { Footer } from '@/Components/03-organisms/Footer/Footer';
import {
  StudyDesignLAIs1Args,
  StudyDesignLAIs2Args,
} from '@/Components/04-templates/Layouts/Modal/LAISStudyDesign';

import {
  StudyDesignSupArgs,
  StudyDesign1Args,
  StudyDesign2Args,
} from '@/Components/04-templates/Layouts/Modal/StudyDesigns';
import UnderstandingPANSS1 from './images/Understanding-PANSS-1.png?format=webp';
import UnderstandingPANSS2 from './images/Understanding-PANSS-2.png?format=webp';
import UnderstandingPANSS3 from './images/Understanding-PANSS-3.png?format=webp';
import UnderstandingCGIS1 from './images/Understanding-CGIS-1.png?format=webp';
import FullRecurrenceDefinition1 from './images/FullRecurrenceDefinition-1.png?format=webp';
import BaselineCharacteristicsImg from './images/BaselinePatient.png?format=webp';
import SeparateAnalysisImg from './images/SeparateAnalysis.png?format=webp';

export default {
  title: 'CLM/Templates/Modal',
  component: Modal,
};

const Template = (args) => <Modal {...args} />;
const classNames = require('classnames');

export const Default = Template.bind({});
Default.args = {
  children: <p>Some content</p>,
};
export const StudyDesignLAIs1 = Template.bind({});

StudyDesignLAIs1.args = {
  ...Default.args,
  ...StudyDesignLAIs1Args,
};

export const StudyDesignLAIs2 = Template.bind({});

StudyDesignLAIs2.args = {
  ...Default.args,
  ...StudyDesignLAIs2Args,
};

export const StudyDesignSup = Template.bind({});
StudyDesignSup.args = {
  ...Default.args,
  ...StudyDesignSupArgs,
};

export const StudyDesign1 = Template.bind({});
StudyDesign1.args = {
  ...Default.args,
  ...StudyDesign1Args,
};

export const StudyDesign2 = Template.bind({});
StudyDesign2.args = {
  ...Default.args,
  ...StudyDesign2Args,
};

export const UnderstandPANSS = Template.bind({});

const blockName = 'modal';

UnderstandPANSS.args = {
  ...Default.args,
  customClass: `${blockName}_understanding-panss`,
  link: <Button text='Understand PANSS' custom='button__type-b' />,
  children: (
    <>
      <Header custom='mb-30'>Understanding PANSS</Header>
      <Header type='h3' custom='mb-20'>
        The PANSS is a 30-item scale that is commonly split into positive,
        negative, and general
        <br /> psychopathology subcategories that measure
        <sup>1</sup>:
      </Header>
      <img
        className={`${blockName}_understanding-panss-image-1 mb-43`}
        src={UnderstandingPANSS1}
        alt=''
      />
      <img
        className={`${blockName}_understanding-panss-image-2`}
        src={UnderstandingPANSS2}
        alt=''
      />
      <Header type='h3' custom='mb-20'>
        Each subcategory is rated on a scale of 1 (absent) to 7 (extreme)
        <sup>1</sup>:
      </Header>
      <img
        className={`${blockName}_understanding-panss-image-3`}
        src={UnderstandingPANSS3}
        alt=''
      />
    </>
  ),
  withFooter: true,
  footer: (
    <Footer
      custom='mb-15'
      footnotes={{
        data: [
          {
            innerText: <span>PANSS=Positive and Negative Syndrome Scale.</span>,
          },
        ],
      }}
      references={{
        custom: 'mt-5',
        data: [
          {
            text: (
              <span>
                American Psychiatric Association.
                https://www.psychiatry.org/patients-families/schizophrenia/what-is-schizophrenia.
                <br /> Accessed March 21, 2023.
              </span>
            ),
          },
        ],
      }}
    />
  ),
};

export const UnderstandCGIS = Template.bind({});
UnderstandCGIS.args = {
  ...Default.args,
  customClass: `${blockName}_understanding-cgis`,
  link: <Button text='Understand CGI-S' custom='button__type-b' />,
  children: (
    <>
      <Header custom='mb-49'>
        Understanding CGI-S<sup>1</sup>
      </Header>
      <Header type='h3' custom='mb-20'>
        The CGI-S is a 7-point scale that indicates how mentally ill a patient
        is at a given time.
      </Header>
      <img
        className={`${blockName}_understanding-cgis-image-1`}
        src={UnderstandingCGIS1}
        alt=''
      />
    </>
  ),
  withFooter: true,
  footer: (
    <Footer
      custom='mb-15'
      footnotes={{
        data: [
          {
            innerText: (
              <span>
                CGI-S=Clinical Global Impression-Severity of Illness Scale.
              </span>
            ),
          },
        ],
      }}
      references={{
        custom: 'mt-5',
        data: [
          {
            text: (
              <span>
                Busner J, et al. Psychiatry (Edgmont). 2007;4(7):28-37.
              </span>
            ),
          },
        ],
      }}
    />
  ),
};

export const FullRecurrenceDefinition = Template.bind({});
FullRecurrenceDefinition.args = {
  ...Default.args,
  customClass: `${blockName}_full-ecurrence-definition`,
  link: (
    <Button text='Full&nbsp;Recurrence Definition' custom='button__type-b' />
  ),
  children: (
    <>
      <Header custom='mb-29'>
        Recurrence was defined as 1 or more of the following<sup>1</sup>:
      </Header>
      <img
        className={`${blockName}_full-ecurrence-definition-image-1`}
        src={FullRecurrenceDefinition1}
        alt=''
      />
    </>
  ),
  withFooter: true,
  footer: (
    <Footer
      custom='mb-15'
      footnotes={{
        data: [
          {
            innerText: (
              <span>
                AR=adverse reaction; CGI-BP-S=Clinical Global Impression-Bipolar
                Version-Severity; C-SSRS=Columbia-Suicide Severity Rating Scale;
                <br />
                MÅDRS=Montgomery-Åsberg Depression Rating Scale; YMRS=Young
                Mania Rating Scale.
              </span>
            ),
          },
        ],
      }}
      references={{
        custom: 'mt-5',
        data: [
          {
            text: (
              <span>
                Calabrese JR, et al. J Clin Psychiatry. 2017;78(3):324-331.
              </span>
            ),
          },
        ],
      }}
    />
  ),
};

export const BaselineCharacteristics = Template.bind({});
BaselineCharacteristics.args = {
  ...Default.args,
  customClass: `${blockName}_baseline-characteristics`,
  link: (
    <Button text='Baseline&nbsp; Characteristics' custom='button__type-b' />
  ),
  children: (
    <>
      <Header
        custom={classNames(
          'mb-59',
          `${blockName}_baseline-characteristics-header`,
        )}
      >
        Patients living with bipolar I disorder in the maintenance
        <br /> study had a history of manic or mixed episodes that required
        hospitalization or medication treatment<sup>1</sup>:
      </Header>
      <div className={`${blockName}_baseline-characteristics-image-wrap`}>
        <img
          className={`${blockName}_baseline-characteristics-image-1`}
          src={BaselineCharacteristicsImg}
          alt='baseline characteristics'
        />
      </div>
    </>
  ),
  withFooter: true,
  footer: (
    <Footer
      custom='mb-15'
      footnotes={{
        data: [
          {
            innerText: (
              <span>
                <sup>*</sup>Per DSM-IV-TR criteria.
                <br />
                DSM-IV-TR=Diagnostic and Statistical Manual of Mental Disorders,
                Fourth Edition, Text Revision; YMRS=Young Mania Rating Scale.
              </span>
            ),
          },
        ],
      }}
      references={{
        custom: 'mt-5',
        data: [
          {
            text: (
              <span>
                alabrese JR, et al. J Clin Psychiatry. 2017;78(3):324-331.
              </span>
            ),
          },
        ],
      }}
    />
  ),
};

export const Relapse = Template.bind({});
Relapse.args = {
  ...Default.args,
  // customClass: `${blockName}_study-design`,
  link: <Button text='Relapse&nbsp; Definition' custom='button__type-b' />,
  children: (
    <>
      <Header custom='mb-18'>
        Relapse was defined as 1 or more of the following<sup>1</sup>:
      </Header>
      <Text
        title='Clinical worsening'
        innerText={
          <>
            CGI-Improvement score ≥5 and an increase on any of 4 individual
            PANSS* items to a score &gt;4: with an absolute increase
            <br /> of ≥2 on that specific item since randomization or an
            increase of &gt;4 on these PANSS items and an absolute increase of
            ≥4
            <br /> on the combined score of these items since randomization.
          </>
        }
      />
      <Text
        title='Psychiatric hospitalization'
        innerText='Due to worsening of psychotic symptoms.'
      />
      <Text
        title='Risk of suicide'
        innerText={
          <>
            Clinical Global Impression – Severity of Suicidality (CGI-SS) score
            of 4 (severely suicidal) or 5 (attempted suicide) on
            <br /> part 1 or CGI-SS score of 6 (much worse) or 7 (very much
            worse) on part 2.
          </>
        }
      />
      <Text
        title='Violent behavior'
        innerText='Clinically significant self-injury, injury to another person, or property damage.'
      />
    </>
  ),
  withFooter: true,
  footer: (
    <Footer
      custom='mb-15'
      footnotes={{
        data: [
          {
            innerText: (
              <span>
                PANSS items were conceptual disorganization, hallucinatory
                behavior, suspiciousness, or unusual thought content.
                <br /> CGI=Clinical Global Impressions; PANSS=Positive and
                Negative Syndrome Scale.
              </span>
            ),
          },
        ],
      }}
      references={{
        custom: 'mt-5',
        data: [
          {
            text: (
              <span>
                Kane JM, et al. J Clin Psychiatry. 2012;73(5):617-624.
              </span>
            ),
          },
        ],
      }}
    />
  ),
};

export const SeparateAnalysis = Template.bind({});
SeparateAnalysis.args = {
  ...Default.args,
  customClass: `${blockName}_separate-analysis`,
  link: <Button text='Separate Analysis' custom='button__type-b' />,
  children: (
    <>
      <Header custom='mb-8'>
        Separate analysis: subjects with schizophrenia with a<br /> predicted
        aripiprazole C<sub>min</sub> ≥95 ng/mL are 4.4 times less
        <br /> likely to relapse<sup>1</sup>
      </Header>
      <p className='mb-2'>
        The population pharmacokinetic and exposure-response analysis reported
        below were funded by Otsuka Pharmaceutical Development &
        Commercialization, Inc.<sup>1</sup>
      </p>
      <p className='mb-20'>
        <strong>Limitations:</strong> At high predicted concentrations, there is
        a model misfit, which could be indicative of a concentration-threshold
        relationship (rather than a continuous relationship) or of other unknown
        influences.
      </p>
      <img
        className={`${blockName}_separate-analysis-img`}
        src={SeparateAnalysisImg}
        alt=''
      />
    </>
  ),
  withFooter: true,
  footer: (
    <Footer
      custom='mb-6'
      references={{
        data: [
          {
            text: (
              <span>
                Wang X, et al. <em>Clin Pharmacol Drug Dev.</em>{' '}
                2022;11(2):150-164.
              </span>
            ),
          },
          {
            text: (
              <span>
                Harlin M, et al. <em>CNS Drugs.</em>
                2023;10.1007/s40263-023-00996-8.
              </span>
            ),
          },
        ],
      }}
    />
  ),
};
