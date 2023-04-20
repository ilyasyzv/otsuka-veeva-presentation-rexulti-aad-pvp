import React from 'react';
import { Link } from '@/Components/03-organisms/Routing/Link/Link';
import AsimtufiiLogo from '@assets/asimtufii-logo.png';
import MaintenaLogo from '@assets/maintena-logo.png';
import { Footer } from './Footer';

export default {
  title: 'CLM/Organisms/Footer',
  component: Footer,
};

const TemplateDefaultWithLogoA = (args) => <Footer {...args} />;

const TemplateDefaultWithLogoB = (args) => <Footer {...args} />;

const TemplateWithoutReferenceWithLogoB = (args) => <Footer {...args} />;

const TemplateSafetyOnlyWithLogoA = (args) => <Footer {...args} />;

const TemplateFootNoteAndReferenceOnly = (args) => <Footer {...args} />;

const TemplateSafetyInfoOnly = (args) => <Footer {...args} />;

const TemplateWithoutFootNoteWithLogoB = (args) => <Footer {...args} />;

const TemplateReferenceAndSafetyOnly = (args) => <Footer {...args} />;

const TemplateWithoutLogo = (args) => <Footer {...args} />;

export const DefaultWithLogoA = TemplateDefaultWithLogoA.bind({});
export const DefaultWithLogoB = TemplateDefaultWithLogoB.bind({});
export const WithoutReferenceWithLogoA = TemplateWithoutReferenceWithLogoB.bind(
  {},
);
export const SafetyOnlyWithLogoA = TemplateSafetyOnlyWithLogoA.bind({});
export const FootNoteAndReferenceOnly = TemplateFootNoteAndReferenceOnly.bind(
  {},
);
export const SafetyInfoOnly = TemplateSafetyInfoOnly.bind({});
export const WithoutFootNoteWithLogoB = TemplateWithoutFootNoteWithLogoB.bind(
  {},
);
export const ReferenceAndSafetyOnly = TemplateReferenceAndSafetyOnly.bind({});
export const WithoutLogo = TemplateWithoutLogo.bind({});

DefaultWithLogoA.args = {
  footnotes: {
    data: [
      {
        innerText: (
          <span>
            C<sub>min</sub>=minimum aripiprazole plasma concentration.
          </span>
        ),
      },
    ],
  },
  references: {
    data: [
      {
        text: (
          <span>
            Harlin M, et al <em>CNS Drugs.</em> 2023;10.1007/s40263-023-00996-8.
          </span>
        ),
      },
    ],
  },
  safetyInfo: {
    custom: 'mt-18',
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
  },
  image: <img src={AsimtufiiLogo} alt='asimtufii-logo' width='142.5' />,
};

DefaultWithLogoB.args = {
  footnotes: {
    data: [
      {
        innerText:
          'Note: n=number of patients with event; N=number of patients treated.2',
        supRight: '2',
      },
      {
        supLeft: '*',
        innerText: 'ABILIFY MAINTENA N=99, placebo N=66.2',
        supRight: '2',
      },
      {
        supLeft: '†',
        innerText:
          'Incidence for ABILIFY MAINTENA vs placebo in female subjects (6.3% vs 13.8%) and male subjects (1.8% vs 10.8%).2',
        supRight: '2',
      },
      {
        innerText: 'EPS=extrapyramidal symptoms; SD=standard deviation.',
      },
    ],
  },
  references: {
    data: [
      {
        text: (
          <span>
            Kane JM, et al. <em>J Clin Psychiatry.</em> 2014;75(11):1254-1260.
          </span>
        ),
      },
      {
        url: '/',
        text: '[Data on file. Otsuka].',
      },
    ],
  },
  safetyInfo: {
    custom: 'mt-18',
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
  },
  image: <img src={MaintenaLogo} alt='maintena-logo' width='140.2' />,
};

WithoutReferenceWithLogoA.args = {
  footnotes: {
    data: [
      {
        supLeft: '*',
        innerText:
          'Table excludes adverse reactions that had an incidence equal to or less than placebo.',
      },
    ],
  },
  safetyInfo: {
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
        text: 'FOR USE WITH FORMULARY DECISION-MAKERS ONLY. DO NOT DUPLICATE OR DISTRIBUTE.',
      },
    ],
  },
  image: <img src={MaintenaLogo} alt='maintena-logo' width='140.2' />,
};

SafetyOnlyWithLogoA.args = {
  safetyInfo: {
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
  },
  image: <img src={AsimtufiiLogo} alt='asimtufii-logo' width='142.5' />,
};

FootNoteAndReferenceOnly.args = {
  footnotes: {
    data: [
      {
        innerText:
          'CGI-S=Clinical Global Impression-Severity of Illness Scale; PANSS=Positive and Negative Syndrome Scale.',
      },
    ],
  },
  references: {
    data: [
      {
        text: (
          <span>
            Kane JM, et al. <em>J Clin Psychiatry.</em> 2014;75(11):1254-1260.
          </span>
        ),
      },
    ],
  },
};

SafetyInfoOnly.args = {
  safetyInfo: {
    data: [
      {
        text: (
          <span>
            Please see <u>FULL PRESCRIBING INFORMATION</u> including BOXED
            WARNING available in this presentation.
          </span>
        ),
      },
      {
        text: 'WARNING: INCREASED MORTALITY IN ELDERLY PATIENTS WITH DEMENTIA-RELATED PSYCHOSIS',
      },
      {
        text: 'Elderly patients with dementia-related psychosis treated with antipsychotic drugs are at increased risk of death (1.6 to 1.7 times) compared to placebo-treated patients. ABILIFY MAINTENA is not approved for the treatment of patients with dementia-related psychosis.',
      },
      {
        text: 'FOR USE WITH FORMULARY DECISION-MAKERS ONLY. DO NOT DUPLICATE OR DISTRIBUTE. ',
      },
    ],
  },
};

WithoutFootNoteWithLogoB.args = {
  references: {
    data: [
      {
        text: (
          <span>
            Yan T, et al. <em>Adv Ther.</em> 2018;35(10):1612-1625.
          </span>
        ),
      },
    ],
  },
  safetyInfo: {
    custom: 'mt-8',
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
  },
  image: <img src={MaintenaLogo} alt='maintena-logo' width='140.2' />,
};

ReferenceAndSafetyOnly.args = {
  references: {
    data: [
      {
        text: (
          <span>
            Yan T, et al. <em>Adv Ther.</em> 2018;35(10):1612-1625.
          </span>
        ),
      },
    ],
  },
  safetyInfo: {
    data: [
      {
        text: (
          <span style={{ fontSize: '14px' }}>
            This study was sponsored by Otsuka Pharmaceutical Development &
            Commercialization, Inc. and Lundbeck.
          </span>
        ),
      },
    ],
  },
};

WithoutLogo.args = {
  footnotes: {
    data: [
      {
        innerText:
          'LAI=long-acting injectable; PDC=proportion of days covered.',
      },
    ],
  },
  references: {
    data: [
      {
        text: (
          <span>
            Yan T, et al. <em>Adv Ther.</em> 2018;35(10):1612-1625.
          </span>
        ),
      },
    ],
  },
  safetyInfo: {
    data: [
      {
        text: (
          <span style={{ fontSize: '14px' }}>
            This study was sponsored by Otsuka Pharmaceutical Development &
            Commercialization, Inc. and Lundbeck.
          </span>
        ),
      },
    ],
  },
};
