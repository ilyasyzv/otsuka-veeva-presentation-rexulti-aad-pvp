import React from 'react';

import Header from '@/Components/01-atoms/Content/Header/Header';
import Paragraph from '@atoms/Content/Paragraph/Paragraph';
import { Footer } from '@/Components/03-organisms/Footer/Footer';
import PageImage from './img/Image1.png';
import styles from './R.2.1_AAD_Overview.module.scss';

const PageContent = () => {
  return (
    <div className={styles.page}>
      <Header custom={`${styles.h1} mb-4`}>
        Agitation Is a Neuropsychiatric Symptom of Alzheimer’s Dementia That Can
        Contribute to a Significant Clinical Burden
      </Header>
      <Paragraph size='small'>
        Manifestations of Alzheimer’s dementia include a range of
        neuropsychiatric symptoms, such as agitation,
        <br /> alongside the hallmark disease characteristics of memory loss and
        cognitive decline.<sup>1</sup>
      </Paragraph>
      <Paragraph color='green-300' weight='bold'>
        The IPA defines agitation in patients with cognitive impairment or
        dementia as excessive motor activity,
        <br /> verbal aggression, or physical aggression, with examples
        including the following behaviors
        <sup>2</sup>:
      </Paragraph>
      <img className={styles.image_1} src={PageImage} alt='' />
      <Footer
        footnotes={{
          data: [
            {
              innerText: 'IPA, International Psychogeriatric Association.',
            },
          ],
        }}
        references={{
          // custom: 'mb-8 mt-8',
          data: [
            {
              text: (
                <>
                  Kales HC, et al. <strong>BMJ.</strong> 2015;350:h369.
                </>
              ),
            },
            {
              text: (
                <>
                  Sano M, et al. <strong>Int Psychogeriatr.</strong> 2023;1-13.{' '}
                </>
              ),
            },
          ],
        }}
        safetyInfo={{
          custom: 'mt-10',
          data: [
            {
              text: 'FOR USE WITH FORMULARY DECISION-MAKERS ONLY. DO NOT DUPLICATE OR DISTRIBUTE. ',
            },
          ],
        }}
      />
    </div>
  );
};
export default PageContent;
