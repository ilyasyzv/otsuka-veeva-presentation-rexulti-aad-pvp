import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';
import Header from '@/Components/01-atoms/Content/Header/Header';
import { Footer } from '@/Components/03-organisms/Footer/Footer';
import { Link } from '@/Components/03-organisms/Routing/Link/Link';
import AsimtufiiLogo from '@assets/asimtufii-logo.png';
import oneMonthImg from '@/Components/05-pages/A.4.0_Economic_value/img/1-month-wac.png?format=webp';
import twoMonthImg from '@/Components/05-pages/A.4.0_Economic_value/img/2-month-wac.png?format=webp';
import masterCalloutImg from '@/Components/05-pages/A.4.0_Economic_value/img/info.png?format=webp';
import styles from './A.4.0_Economic_value.module.scss';

export default {
  title: 'CLM/Pages',
  component: 'A.4.0_Economic_value',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_4_0_Economic_value_content'],
};

const content = () => {
  return (
    <div className={styles[`content-wrapper`]}>
      <Header custom='mb-70'>
        Economic value of ABILIFY ASIMTUFII<sup>®</sup> (aripiprazole) in
        schizophrenia and bipolar I disorder<sup>1,2</sup>
      </Header>
      <div className={styles['content-container']}>
        <div className={styles['wacs-container']}>
          <div className={styles['wac-container']}>
            <img src={oneMonthImg} alt='wac' />
          </div>
          <div className={styles['wac-container']}>
            <img src={twoMonthImg} alt='wac' />
          </div>
        </div>
        <div className={styles['info-container']}>
          <img src={masterCalloutImg} alt='dosing info' />
        </div>
      </div>
      <Footer
        footnotes={{
          data: [
            {
              innerText: 'WAC=wholesale acquisition cost.',
            },
          ],
        }}
        references={{
          data: [
            {
              text: (
                <span>
                  Merative Micromedex. Accessed March 22, 2023.
                  https://www.micromedexsolutions.com/
                </span>
              ),
            },
            {
              url: '/',
              text: 'Data on file. Otsuka.',
            },
          ],
        }}
        safetyInfo={{
          custom: 'mt-9',
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
              text: 'FOR USE WITH FORMULARY DECISION-MAKERS ONLY. DO NOT DUPLICATE OR DISTRIBUTE. ',
            },
          ],
        }}
        image={<img src={AsimtufiiLogo} alt='maintena-logo' width='140.2' />}
      />
    </div>
  );
};

const Template = () => {
  return <AppStorybook path='A.4.0_Economic_value' components={content} />;
};

export const A_4_0_Economic_value = Template.bind({});
export const A_4_0_Economic_value_content = content.bind({});
