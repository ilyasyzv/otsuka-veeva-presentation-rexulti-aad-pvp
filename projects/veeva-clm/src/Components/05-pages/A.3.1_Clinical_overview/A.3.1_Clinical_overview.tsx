import React from 'react';
import Header from '@/Components/01-atoms/Content/Header/Header';
import imageTable from './imgs/A.3.1_Clinical_overview.png';
import style from './A.3.1_Clinical_overview.module.scss';
import { Footer } from '@/Components/03-organisms/Footer/Footer';
import { Link } from '@/Components/03-organisms/Routing/Link/Link';
import AsimtufiiLogo from '@/assets/asimtufii-logo.png';

export const PageContent = () => (
  <div className={style.page}>
    <Header type='h1'>
      Building on the pharmacokinetic bridging and 2<br /> maintenance studies
      of ABILIFY MAINTENA<sup>®</sup>
      (aripiprazole),
      <br /> ABILIFY ASIMTUFII<sup>®</sup> (aripiprazole) offers comparable
      <br />
      safety, tolerability, and efficacy in adult patients with
      <br />
      schizophrenia or bipolar I disorder
    </Header>
    <img src={imageTable} alt={'Table'} className={'pageImg'} />
    <Footer
      custom='bottom-5'
      footnotes={{
        data: [
          {
            supLeft: '*',
            innerText: (
              <span>
                Baseline characteristics: PANSS total score ≥80 and a PANSS
                score {`>`}4 on each of 4 specific psychotic symptoms
                (conceptual disorganization, hallucinatory behavior,
                suspiciousness/
                <br />
              </span>
            ),
          },
          {
            innerText: (
              <span>
                persecution, and unusual thought content) at screening and
                baseline; diagnosis of schizophrenia ≥1 year.
              </span>
            ),
          },
          {
            innerText: (
              <>
                <br />
                <span>
                  CGI-S=Clinical Global Impression-Severity of Illness Scale;
                  PANSS=Positive and Negative Syndrome Scale;
                  PK=pharmacokinetic.
                </span>
              </>
            ),
          },
        ],
      }}
      references={{
        data: [
          {
            text: (
              <span>
                Harlin M, et al <em>CNS Drugs</em>.
                2023;10.1007/s40263-023-00996-8.
              </span>
            ),
          },
          {
            text: (
              <span>
                Kane JM, et al. <em>J Clin Psychiatry</em>.
                2014;75(11):1254-1260
              </span>
            ),
          },
          {
            text: (
              <span>
                Kane JM, et al. <em>J Clin Psychiatry</em>. 2012;73(5):617-624.
              </span>
            ),
          },
          {
            text: (
              <span>
                Calabrese JR, et al. <em>J Clin Psychiatry</em>.<br />
                2017;78(3):324-331.
              </span>
            ),
          },
        ],
      }}
      safetyInfo={{
        custom: 'mt-5',
        data: [
          {
            text: (
              <span>
                Please see{' '}
                <Link to='A.7.0_ISI' custom='blue-500'>
                  IMPORTANT SAFETY INFORMATION
                </Link>{' '}
                , in this presentation
              </span>
            ),
          },
          {
            text: 'FOR USE WITH FORMULARY DECISION-MAKERS ONLY. DO NOT DUPLICATE OR DISTRIBUTE. ',
          },
        ],
      }}
      image={<img src={AsimtufiiLogo} alt='maintena-logo' width='140.2' />}
    />
  </div>
);

export default PageContent;
