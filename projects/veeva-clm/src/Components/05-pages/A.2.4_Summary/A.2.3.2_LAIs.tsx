import React from 'react';
import Header from '@/Components/01-atoms/Content/Header/Header';
import { Footer } from '@/Components/03-organisms/Footer/Footer';

import imageTable from './imgs/A.2.3.2_LAIs.png';

import styles from './A.2.3.2_LAIs.module.scss';

const PageContent = () => (
  <div className={styles.page}>
    <Header type='h1'>
      <>
        There remains an unmet need for schizophrenia and bipolar I<br />
        disorder (BP-I)* to improve treatment adherence and reduce
        <br />
        health care resource utilization and costs<sup>1-14</sup>
      </>
    </Header>
    <img src={imageTable} alt='Table' className='pageImg' />
    <Footer
      custom='bottom-5'
      footnotes={{
        data: [
          {
            supLeft: '*',
            innerText: (
              <>
                <span>
                  These studies do not differentiate between bipolar disorders.
                </span>
                <br />
              </>
            ),
          },
          {
            innerText: (
              <span>
                FDA=US Food and Drug Administration; LAI=long-acting injectable.
              </span>
            ),
          },
        ],
      }}
      references={{
        data: [
          {
            text: (
              <span>
                Treatment Advocacy Center.
                https://www.treatmentadvocacycenter.org/evidence-and-research/fast-facts.
                Accessed February 15, 2023.
              </span>
            ),
          },
          {
            text: (
              <span>
                Ascher-Svanum H, et al. <em>BMC Psychiatry.</em> 2010;10:2.
              </span>
            ),
          },
          {
            text: (
              <span>
                Berk L, et al. <em>Hum Psychopharmacol</em>. 2010;25(1):1-16.
              </span>
            ),
          },
          {
            text: (
              <span>
                Martin A, et al. <em>Adv Ther</em>. 2022;39(9):3933-3956.
              </span>
            ),
          },
          {
            text: (
              <span>
                Broder MS, et al. <em>J Med Econ</em>. 2019;22(1):63-70.
              </span>
            ),
          },
          {
            text: (
              <span>
                Goldstone LW. <em>Am J Manag Care</em>. 2020;26(3
                suppl):S48-S54.
              </span>
            ),
          },
          {
            text: (
              <span>
                Kadakia A, et al. <em>J Clin Psychiatry</em>.
                2022;83(6):22m14458.
              </span>
            ),
          },
          {
            text: (
              <span>
                Bessonova L, et al. <em>Clinicoecon Outcomes Res</em>.
                2020;12:481-497.
              </span>
            ),
          },
          {
            text: (
              <span>
                <em>Cloutier M, et al. J Affect Disord</em>. 2018;226:45-51.
              </span>
            ),
          },
          {
            text: (
              <span>
                Zolezzi M, et al. <em>Neuropsychiatr Dis Treat</em>.
                2021;17:1917-1926.
              </span>
            ),
          },
          {
            text: (
              <span>
                Greene M, et al.{' '}
                <em>
                  J<br /> Med Econ
                </em>
                . 2018;21(2):127-134.
              </span>
            ),
          },
          {
            text: (
              <span>
                Lafeuille M-H, et al. <em>BMC Psychiatry</em>. 2013;13:221.
              </span>
            ),
          },

          {
            text: (
              <span>
                Pietrini F, et al. <em>Neuropsychiatr Dis Treat</em>.
                2019;15:1045-1060.
              </span>
            ),
          },
          {
            text: (
              <span>
                American Psychiatric Association.{' '}
                <em>
                  Practice Guidelines for the Treatment of Patients With
                  Schizophrenia
                </em>
                . 3rd ed. Washington, DC; 2021.
              </span>
            ),
          },
        ],
      }}
      safetyInfo={{
        custom: 'mt-50',
        data: [
          {
            text: 'FOR USE WITH FORMULARY DECISION-MAKERS ONLY. DO NOT DUPLICATE OR DISTRIBUTE. ',
          },
        ],
      }}
    />
  </div>
);
export default PageContent;
