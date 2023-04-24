import React from 'react';
import styles from './R.2.5_AAD_agitation_in_dementia.module.scss';
import Header from '@/Components/01-atoms/Content/Header/Header';
import { Footer } from '@/Components/03-organisms/Footer/Footer';
import imgBg from './imgs/4blocks.png';
import Button from '@/Components/01-atoms/Content/Button/Button';

const PageContent: React.FC = () => {
  return (
    <div className={styles.page}>
      <Header type={'h1'} custom={styles.h1}>
        Agitation in Alzheimer’s Dementia May Adversely
        <br /> Affect Patient Outcomes and Disease Progression
      </Header>
      <Header type={'h2'} custom={styles.h2}>
        Agitation in Alzheimer’s dementia is associated with:
      </Header>
      <img className={styles.imgBg} src={imgBg} />
      <div className={styles.buttonContainer}>
        <Button text='Caregiven Burden' custom='button__type-a--active' />
      </div>
      <Footer
        custom={styles.footer}
        footnotes={{
          data: [
            {
              supLeft: '*',
              innerText: (
                <span>
                  Conducted using 497 patients with Alzheimer’s dementia with
                  most of the patients being recruited from following 3 sites in
                  New York, New York ,
                  <br /> Baltimore, Maryland, and Boston, Massachusetts.
                </span>
              ),
            },
            {
              supLeft: '†',
              innerText: (
                <span>
                  The hazard ratio is a measure used to compare the risk of
                  occurrence of an event of interest (eg, rate of
                  institutionalization or death) in 2 groups (eg,
                  <br />
                  dementia patients with and without agitation) at a given time.
                </span>
              ),
            },
            {
              supLeft: '‡',
              innerText: (
                <span>
                  4 The Cache County Dementia Progression Study was a
                  longitudinal study of dementia progression in incident cases
                  of the condition with 335 patients.
                </span>
              ),
            },
            {
              supLeft: '§',
              innerText: (
                <span>
                  A retrospective analysis of 1349 patients utilizing US data
                  drawn from 2015/16 Adelphi Real World Dementia Disease
                  Specific Programme (DSP)<sup>™</sup>.
                </span>
              ),
            },
          ],
        }}
        references={{
          custom: 'mt-10',
          data: [
            {
              text: (
                <span>
                  REFERENCES: 1. Scarmeas N, et al. <strong>Arch Neurol</strong>
                  . 2007;64(12):1755-1761.
                </span>
              ),
            },
            {
              text: (
                <span>
                  Peters ME, et al. <strong>Am J Psychiatry</strong>.
                  2015;172(5):460-465.
                </span>
              ),
            },
            {
              text: (
                <span>
                  Jones E, et al. <strong>J Alzheimers Dis</strong>.
                  2021;83(1):89-101.
                </span>
              ),
            },
            {
              text: (
                <span>
                  Rouam, S. (2013). Hazard Ratios. In: Dubitzky, W.,
                  Wolkenhauer, O., Cho, KH., Yokota, H. (eds) Encyclopedia of
                  Systems Biology. Springer, New York, NY.
                  https://doi.org/10.1007/978-1-4419-9863-7_228.
                </span>
              ),
            },
          ],
        }}
        safetyInfo={{
          custom: 'mt-10',
          data: [
            {
              text: 'FOR USE WITH FORMULARY DECISION-MAKERS ONLY. DO NOT DUPLICATE OR DISTRIBUTE.',
            },
          ],
        }}
      />
    </div>
  );
};
export default PageContent;
