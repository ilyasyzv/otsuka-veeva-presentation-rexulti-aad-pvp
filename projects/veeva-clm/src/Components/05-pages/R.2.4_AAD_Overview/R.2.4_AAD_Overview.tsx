import React from 'react';
import Header from '@atoms/Content/Header/Header';
import ModalAgitation from '@templates/Layouts/Modal/ModalAgitation';
import { Footer } from '@organisms/Footer/Footer';
import FadingBlocks from '@organisms/FadingBlocks/FadingBlocks';
import item1 from './imgs/1.png';
import item2 from './imgs/2.png';
import item3 from './imgs/3.png';
import item4 from './imgs/4.png';
import styles from './R.2.4_AAD_Overview.module.scss';

const PageContent: React.FC = () => {
  return (
    <div className={styles.page}>
      <Header type='h1' custom={styles.h1}>
        Agitation in Alzheimer’s Dementia May Adversely
        <br /> Affect Patient Outcomes and Disease Progression
      </Header>
      <Header type='h2' custom={styles.h2}>
        Agitation in Alzheimer’s dementia is associated with:
      </Header>
      <FadingBlocks>
        <img src={item1} alt='cart' className={styles.image_block} />
        <img src={item2} alt='cart' className={styles.image_block} />
        <img src={item3} alt='cart' className={styles.image_block} />
        <img src={item4} alt='cart' className={styles.image_block} />
      </FadingBlocks>
      <div className={styles.buttonContainer}>
        <ModalAgitation />
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
                  New York, New York;
                  <br /> Baltimore, Maryland; and Boston, Massachusetts.
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
                  <sup>4</sup>
                </span>
              ),
            },
            {
              supLeft: '‡',
              innerText: (
                <span>
                  The Cache County Dementia Progression Study was a
                  longitudinal study of dementia progression in incident cases
                  of the condition with 335 patients.<sup>2</sup>
                </span>
              ),
            },
            {
              supLeft: '§',
              innerText: (
                <span>
                  A retrospective analysis of 1,349 patients utilizing US data
                  drawn from 2015/16 Adelphi Real World Dementia Disease
                  Specific Programme (DSP)<sup>™</sup>.<sup>3</sup>
                  <br />
                  HR, hazard ratio.
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
                  Scarmeas N, et al. Arch Neurol.
                  2007;64(12):1755-1761.
                </span>
              ),
            },
            {
              text: (
                <span>
                  Peters ME, et al. Am J Psychiatry.
                  2015;172(5):460-465.
                </span>
              ),
            },
            {
              text: (
                <span>
                  Jones E, et al. J Alzheimers Dis.<br />
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
