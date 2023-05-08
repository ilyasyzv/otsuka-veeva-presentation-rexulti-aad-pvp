import React from 'react';
import Header from '@atoms/Content/Header/Header';
import { Footer } from '@organisms/Footer/Footer';
import styles from './R.2.3_AAD_Overview.module.scss';
import imgBg from './imgs/imgBg.png';

const PageContent: React.FC = () => {
  return (
    <div className={styles.page}>
      <Header type='h1' custom={styles.h1}>
        The Underlying Pathophysiology of AAD May Involve Dysfunctions Within
        the Noradrenergic, Serotonergic,
        <br /> and Dopaminergic Systems<sup>1-4</sup>
      </Header>
      <img className={styles.imgBg} src={imgBg} />
      <Footer
        footnotes={{
          data: [
            {
              innerText: (
                <span>
                  AAD, agitation associated with Alzheimer’s dementia.
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
                  Rosenberg PB, et al. <em>Mol Aspects Med</em>.
                  2015;43-44:25-37.
                </span>
              ),
            },
            {
              text: (
                <span>
                  Carrarini C, et al. <em>Front Neurol</em>. 2021;12:644317.
                </span>
              ),
            },
            {
              text: (
                <span>
                  Arnsten AF, et al. <em>Neurobiol Stress</em>. 2015;1:89-99.
                </span>
              ),
            },
            {
              text: (
                <span>
                  Lanctôt KL, <br />
                  et al. <em>J Neuropsychiatry Clin Neurosci</em>.
                  2001;13(1):5-21;11.
                </span>
              ),
            },
            {
              text: (
                <span>
                  Hirono N, et al. <em>Arch Neurol</em>. 2000;57(6):861-866.
                </span>
              ),
            },
            {
              text: (
                <span>
                  Wright CI, et al. <em>Biol Psychiatry</em>.
                  2007;62(12):1388-1395.
                </span>
              ),
            },
          ],
        }}
        safetyInfo={{
          custom: 'mt-5',
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
