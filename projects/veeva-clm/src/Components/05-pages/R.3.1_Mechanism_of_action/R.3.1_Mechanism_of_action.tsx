import React from 'react';
import { Link } from '@/Components/03-organisms/Routing/Link/Link';
import { Footer } from '@/Components/03-organisms/Footer/Footer';
import RexultiLogo from '@/assets/rexulti-logo.png';
import Header from '@atoms/Content/Header/Header';
import Paragraph from '@atoms/Content/Paragraph/Paragraph';
import { Text } from '@atoms/Content/Text/Text';
import styles from './R.3.1_Mechanism_of_action.module.scss';
import PageImage from './imgs/img1.png';
import FadingBlocks from '@organisms/FadingBlocks/FadingBlocks';
import item2 from './imgs/img2.png';
import item3 from './imgs/img3.png';
import item4 from './imgs/img4.png';
import { Reveal, Tween } from 'react-gsap';

const PageContent = () => {
  return (
    <div className={styles.page}>
      <Header custom={`${styles.h1} mb-10 mt-24`}>
        REXULTI® (brexpiprazole) May Interact With 3 Key Neurotransmitter
        Systems Implicated in AAD<sup>1,2</sup>
      </Header>
      <Header type='h3' custom={`${styles.h3} mb-14`}>
        The activity of these compounds is based on in vitro data. The clinical
        significance of the in vitro data is unknown.
      </Header>
      <Paragraph custom={`mb-24 ${styles.chart_head}`}>
        <span>REXULTI</span> has high binding affinity* to 3 neurotransmitter
        systems associated
        <br /> with AAD: norepinephrine, serotonin, and dopamine
      </Paragraph>
      <div className={`mb-10 ${styles.animated}`}>
        <img className={styles.image_1} src={PageImage} alt='' />
        <div className={styles.animated_block}>
          <FadingBlocks>
            <div
              style={{ width: '207px', textAlign: 'right' }}
              className={styles.animated_item1}
            >
              <img style={{ width: '88px' }} src={item2} alt='Norepinephrine' />
            </div>
            <div
              style={{ width: '254px', textAlign: 'right' }}
              className={styles.animated_item2}
            >
              <img style={{ width: '101.5px' }} src={item3} alt='Serotonin' />
            </div>
            <div
              style={{ width: '226px', textAlign: 'right' }}
              className={styles.animated_item3}
            >
              <img style={{ width: '88px' }} src={item4} alt='Dopamine' />
            </div>
          </FadingBlocks>
        </div>
        <div className={styles.animated_block2}>
          <div
            style={{ width: '266.5px', textAlign: 'right' }}
            className={styles.animated_item1}
          >
            <Paragraph custom={`${styles.animated_text}`}>
              Norepinephrine
            </Paragraph>
          </div>
          <div
            style={{ width: '205px', textAlign: 'right' }}
            className={styles.animated_item2}
          >
            <Paragraph custom={`${styles.animated_text}`}>Serotonin</Paragraph>
          </div>
          <div
            style={{ width: '243px', textAlign: 'right' }}
            className={styles.animated_item3}
          >
            <Paragraph custom={`${styles.animated_text}`}>Dopamine</Paragraph>
          </div>
        </div>
      </div>
      <Paragraph custom={`${styles.chart_bottom}`}>
        <strong>
          The mechanism of action of brexpiprazole in the treatment of AAD is
          unknown. However, the efficacy of brexpiprazole may be mediated
          through a combination of partial agonist activity at serotonin 5-HT
          <sub>1A </sub>
          and dopamine D<sub>2</sub>, receptor, and antagonist activity at
          serotonin 5-HT<sub>2A </sub>
          receptors.
        </strong>
      </Paragraph>
      <Paragraph custom={`${styles.chart_bottom}`}>
        <strong>
          REXULTI acts as both a partial agonist and antagonist<sup>†1</sup>
        </strong>
      </Paragraph>
      <div className={styles.list_container}>
        <Text
          title='Antagonist:'
          list={{
            columns: 'columns-1',
            type: 'circle',
            data: [
              {
                text: (
                  <>
                    Norepinephrine α<sub>1A</sub>, α<sub>1B</sub>, α
                    <sub>1D</sub>, and α<sub>2C</sub>
                    <br />
                  </>
                ),
              },
              {
                text: (
                  <>
                    Serotonin: 5-HT<sub>2A</sub>, 5-HT<sub>2B</sub>, 5-H
                    <sub>T7</sub>
                  </>
                ),
              },
            ],
          }}
        />
        <Text
          title='Partial Agonist:'
          list={{
            columns: 'columns-1',
            type: 'circle',
            data: [
              {
                text: (
                  <>
                    Serotonin 5-HT<sub>1A</sub>
                    <br />
                  </>
                ),
              },
              {
                text: (
                  <>
                    Dopamine D<sub>2</sub> and D<sub>3</sub>
                  </>
                ),
              },
            ],
          }}
        />
      </div>

      <Footer
        custom={styles.footer}
        footnotes={{
          custom: `mb-6 ${styles.footnote}`,
          data: [
            {
              supLeft: '*',
              supRight: '1',
              innerText: `High binding affinity; Ki <1 nM.`,
            },
            {
              supLeft: '†',
              supRight: '1',
              innerText: (
                <>
                  The binding affinity of brexpiprazole was determined
                  <strong> in vitro </strong>
                  in cells over-expressing human receptors and is expressed as
                  an nM concentration with lower values representing higher
                  affinity. High binding affinities included norepinephrine (α
                  <sub>1B</sub>-adrenergic=0.17 nM, α<sub>2C</sub>
                  -adrenergic=0.59 nM, α<sub>1D</sub>-adrenergic=2.60 nM, α
                  <sub>1A</sub>-adrenergic=3.80 nM), serotonin (5-HT
                  <sub>1A</sub>=0.12 nM, 5-HT<sub>2A</sub>=0.47 nM, 5-HT
                  <sub>2B</sub>=1.9 nM, 5-HT<sub>7</sub>=3.7 nM), and dopamine
                  (D<sub>2</sub>=0.3 nM, D<sub>3</sub>=1.1 nM) receptors.
                </>
              ),
            },
            {
              innerText: (
                <>
                  α, alpha; 5-HT, 5-hydroxytryptamine; AAD, agitation associated
                  with Alzheimer’s dementia; D, dopamine; Ki, affinity constant.
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
                  Maeda K, et al. <strong>J Pharmacol Exp Ther. </strong>
                  2014;350(3):589-604.
                </span>
              ),
            },
            {
              text: (
                <span>
                  Rosenberg PB, et al. <strong>Mol Aspects Med.</strong>
                  <br />
                  2015;43-44:25-37.
                </span>
              ),
            },
          ],
        }}
        safetyInfo={{
          custom: styles.safety_info,
          data: [
            {
              text: (
                <span>
                  Please see{' '}
                  <Link to='R.6.0_ISI'>IMPORTANT SAFETY INFORMATION</Link> in
                  this presentation.
                </span>
              ),
            },
            {
              text: 'FOR USE WITH FORMULARY DECISION-MAKERS ONLY. DO NOT DUPLICATE OR DISTRIBUTE.',
            },
          ],
        }}
        images={[<img src={RexultiLogo} alt='maintena-logo' width='154.2' />]}
      />
    </div>
  );
};
export default PageContent;
