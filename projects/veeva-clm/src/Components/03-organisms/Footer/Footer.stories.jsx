import React from 'react';
import { Link } from '@/Components/03-organisms/Routing/Link/Link';
import RexultiLogo from '@assets/rexulti-logo.png';
import { Footer } from './Footer';

export default {
  title: 'CLM/Organisms/Footer',
  component: Footer,
};

const TemplateDefaultWithLogo = (args) => <Footer {...args} />;

const TemplateSafetyOnlyWithLogo = (args) => <Footer {...args} />;

const TemplateFootNoteAndReferenceOnly = (args) => <Footer {...args} />;

const TemplateFootNoteAndSafetyInfoOnly = (args) => <Footer {...args} />;

const TemplateSafetyInfoOnly = (args) => <Footer {...args} />;

const TemplateReferenceAndSafetyOnlyWithLogo = (args) => <Footer {...args} />;

const TemplateWithoutLogo = (args) => <Footer {...args} />;

export const DefaultWithLogo = TemplateDefaultWithLogo.bind({});
export const SafetyOnlyWithLogo = TemplateSafetyOnlyWithLogo.bind({});
export const FootNoteAndReferenceOnly = TemplateFootNoteAndReferenceOnly.bind(
  {},
);
export const FootNoteAndSafetyInfoOnly = TemplateFootNoteAndSafetyInfoOnly.bind(
  {},
);
export const SafetyInfoOnly = TemplateSafetyInfoOnly.bind({});
export const ReferenceAndSafetyOnlyWithLogo =
  TemplateReferenceAndSafetyOnlyWithLogo.bind({});
export const WithoutLogo = TemplateWithoutLogo.bind({});

DefaultWithLogo.args = {
  footnotes: {
    custom: 'mw-636',
    data: [
      {
        innerText: `AAD, agitation associated with Alzheimer’s dementia; CMAI,
        Cohen-Mansfield Agitation Inventory; FDA, US Food and Drug
        Administration.`,
      },
    ],
  },
  references: {
    custom: 'mw-563 mt-6',
    data: [
      {
        text: (
          <span>
            Jones E, et al. <strong>J Alzheimers Dis.</strong>{' '}
            2021;83(1):89-101.
          </span>
        ),
      },
    ],
  },
  safetyInfo: {
    custom: 'mw-636 mt-6',
    data: [
      {
        text: (
          <span
            style={{ display: 'inline-block', marginBottom: '5px' }}
            className='highlighted'
          >
            Please see{' '}
            <a href='/' className='green-200'>
              IMPORTANT SAFETY INFORMATION
            </a>{' '}
            in this presentation.
          </span>
        ),
      },
      {
        text: 'FOR USE WITH FORMULARY DECISION-MAKERS ONLY. DO NOT DUPLICATE OR DISTRIBUTE.',
      },
    ],
  },
  image: <img src={RexultiLogo} alt='rexulti-logo' width='154.2' />,
  footerArrow: true,
};

SafetyOnlyWithLogo.args = {
  safetyInfo: {
    data: [
      {
        text: (
          <span
            style={{ display: 'inline-block', marginBottom: '5px' }}
            className='highlighted'
          >
            Please see{' '}
            <a href='/' className='green-200'>
              IMPORTANT SAFETY INFORMATION
            </a>{' '}
            in this presentation.
          </span>
        ),
      },
      {
        text: 'FOR USE WITH FORMULARY DECISION-MAKERS ONLY. DO NOT DUPLICATE OR DISTRIBUTE.',
      },
    ],
  },
  image: <img src={RexultiLogo} alt='rexulti-logo' width='154.2' />,
  footerArrow: true,
};

FootNoteAndReferenceOnly.args = {
  footnotes: {
    custom: 'mw-837',
    data: [
      {
        supLeft: '*',
        innerText: `Nursing home percentage reported includes those with Alzheimer’s dementia and other types of dementia.`,
        supRight: '2',
      },
      {
        supLeft: '†',
        innerText: `In a 2-year observation period, of the 320,886 eligible patients, 78,827 (24.6%) could be assigned to explicit AD/dementia severity categories.`,
      },
      {
        supLeft: '‡',
        innerText: `Adapted from a retrospective database study of 320,886 community-dwelling patients with ≥1 electronic health record (EHR) indicating Alzheimer’s disease (AD)/dementia. Agitation was identified using diagnosis codes for dementia with behavioral disturbance and EHR abstracted notes records indicating agitation symptoms compiled from the International Psychogeriatric Association provisional consensus definition. Patients who had records containing valid quantitative MMSE scores or explicit terms for only one level of AD/dementia severity were categorized accordingly as “mild,” “moderate,” or “severe.”`,
        supRight: '1',
      },
    ],
  },
  references: {
    custom: 'mt-10',
    data: [
      {
        text: (
          <span>
            Halpern R, et al. <strong>Int J Geriatr Psychiatry.</strong>{' '}
            2018;34(3):420-431.
          </span>
        ),
      },
      {
        text: (
          <span>
            Fillit H, et al. <strong>Int J Geriatr Psychiatry.</strong>{' '}
            2021;36(12):1959-1969.
          </span>
        ),
      },
    ],
  },
};

FootNoteAndSafetyInfoOnly.args = {
  footnotes: {
    data: [
      {
        innerText: `AAD, agitation associated with Alzheimer’s dementia; FDA, US Food and Drug Administration.`,
      },
    ],
  },
  safetyInfo: {
    custom: 'mt-7',
    data: [
      {
        text: (
          <span
            style={{ display: 'inline-block', marginBottom: '5px' }}
            className='highlighted'
          >
            Please see{' '}
            <a href='/' className='green-200'>
              IMPORTANT SAFETY INFORMATION
            </a>{' '}
            in this presentation.
          </span>
        ),
      },
      {
        text: 'FOR USE WITH FORMULARY DECISION-MAKERS ONLY. DO NOT DUPLICATE OR DISTRIBUTE.',
      },
    ],
  },
  footerArrow: true,
};

SafetyInfoOnly.args = {
  safetyInfo: {
    data: [
      {
        text: (
          <span
            style={{ display: 'inline-block', marginBottom: '5px' }}
            className='highlighted'
          >
            Please see{' '}
            <a href='/' className='green-200'>
              IMPORTANT SAFETY INFORMATION
            </a>{' '}
            in this presentation.
          </span>
        ),
      },
    ],
  },
  footerArrow: true,
};

ReferenceAndSafetyOnlyWithLogo.args = {
  references: {
    data: [
      {
        text: <span>Data on file. Otsuka.</span>,
      },
    ],
  },
  safetyInfo: {
    custom: 'mt-6',
    data: [
      {
        text: (
          <span
            style={{ display: 'inline-block', marginBottom: '5px' }}
            className='highlighted'
          >
            Please see{' '}
            <a href='/' className='green-200'>
              IMPORTANT SAFETY INFORMATION
            </a>{' '}
            in this presentation.
          </span>
        ),
      },
      {
        text: 'FOR USE WITH FORMULARY DECISION-MAKERS ONLY. DO NOT DUPLICATE OR DISTRIBUTE.',
      },
    ],
  },
  image: <img src={RexultiLogo} alt='rexulti-logo' width='154.2' />,
  footerArrow: true,
};

WithoutLogo.args = {
  footnotes: {
    data: [
      {
        supLeft: '*',
        innerText: `Percentage of patients who received treatment with an antipsychotic was estimated from a model rather than measured data.`,
      },
      {
        innerText: `AAD, agitation associated with Alzheimer’s dementia.`,
      },
    ],
  },
  references: {
    custom: 'mw-765 mt-6',
    data: [
      {
        text: (
          <span>
            Halpern R, et al. <strong>Int J Geriatr Psychiatry.</strong>{' '}
            2019;34(3):420-431.
          </span>
        ),
      },
      {
        text: (
          <span>
            Alzheimer’s Association. 2023 Alzheimer’s Disease Facts and Figures.
            <strong>Alzheimers Dement.</strong> 2023;19(4).
          </span>
        ),
      },
      {
        text: <span>Data on file. Otsuka.</span>,
      },
    ],
  },
  safetyInfo: {
    custom: 'mt-2',
    data: [
      {
        text: 'FOR USE WITH FORMULARY DECISION-MAKERS ONLY. DO NOT DUPLICATE OR DISTRIBUTE.',
      },
    ],
  },
  footerArrow: true,
};
