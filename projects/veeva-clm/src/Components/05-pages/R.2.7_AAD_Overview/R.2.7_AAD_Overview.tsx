import React from 'react';
import Header from '@/Components/01-atoms/Content/Header/Header';
import { Footer } from '@/Components/03-organisms/Footer/Footer';
import styles from './R.2.7_AAD_Overview.module.scss';
import FadingBlocks from '@organisms/FadingBlocks/FadingBlocks';
import item1 from './imgs/summary_1.png';
import item2 from './imgs/summary_2.png';
import item3 from './imgs/summary_3.png';

const PageContent: React.FC = () => {
  return (
    <div className={styles.page}>
      <Header custom='mt-32 mb-35'>Summary</Header>
      <FadingBlocks direction='column'>
        <img src={item1} alt='cart' className={styles.image_block_1} />
        <img src={item2} alt='cart' className={styles.image_block_2} />
        <img src={item3} alt='cart' className={styles.image_block_3} />
      </FadingBlocks>
      <Footer
        footnotes={{
          custom: 'mb-4',
          data: [
            {
              innerText:
                'AAD, agitation associated with Alzheimer’s dementia; FDA, US Food and Drug Administration.',
            },
          ],
        }}
        references={{
          custom: 'pr-39 mb-7',
          data: [
            {
              text: (
                <>
                  Sano M, et al. <b>Int Psychogeriatr</b>. 2023;1-13.
                </>
              ),
            },
            {
              text: <>Kales HC, et al. <b>BMJ</b>. 2015;350:h369.</>,
            },
            {
              text: (
                <>
                  Halpern R, et al. <b>Int J Geriatr Psychiatry</b>.
                  2019;34(3):420-431.
                </>
              ),
            },
            {
              text: (
                <>Rosenberg PB, et al. <b>Mol Aspects Med</b>. 2015;43-44:25-37.</>
              ),
            },
            {
              text: <>Carrarini C, et al. <b>Front Neurol</b>. 2021;12:644317.</>,
            },
            {
              text: <>Arnsten AF, et al. <b>Neurobiol Stress</b>. 2015;1:89-99.</>,
            },
            {
              text: (
                <>
                  Lanctôt KL, et al. <b>J Neuropsychiatry Clin Neurosci</b>.
                  2001;13(1):5-21;11.
                </>
              ),
            },
            {
              text: (
                <>Peters ME, et al. <b>Am J Psychiatry</b>. 2015;172(5):460-465.</>
              ),
            },
            {
              text: <>Scarmeas N, et al. <b>Arch Neurol</b>. 2007;64(12):1755-1761.</>,
            },
            {
              text: <>Jones E, et al. <b>J Alzheimers Dis</b>. 2021;83(1):89-101.</>,
            },
            {
              text: (
                <>
                  Alzheimer’s Association. Accessed January 25, 2023.
                  https://www.alz.org/alzheimers-dementia/treatments/treatments-for-behavior
                </>
              ),
            },
            {
              text: <>McDermott CL, et al. <b>Curr Geriatr Rep</b>. 2019;8(1):1-11.</>,
            },
            {
              text: <>Phan SV, et al. <b>Drugs R D</b>. 2019;19(2):93-115.</>,
            },
          ],
        }}
        safetyInfo={{
          custom: 'mb-1',
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
