import React from 'react';

import Tabs from '@organisms/Tabs/Tabs';
import Tab from '@organisms/Tabs/Tab';
import Header from '@atoms/Content/Header/Header';
import Footer from '@organisms/Footer/Footer';
import { Link } from '@organisms/Routing';

import RexultiLogo from '@/assets/rexulti-logo.png';
import imgCMAIOverview from './img/cmai_overview.png';
import imgCMAIItems from './img/cmai_items.png';

import styles from './R.5.0_Appendix.module.scss';

const PageContent: React.FC = () => {
  return (
    <>
      <div className={styles.page}>
        <Header type='h1' custom={styles.title}>
          CMAI Details
        </Header>
        <Tabs translateTabsX={37} tabWidth={266}>
          <Tab title='CMAI Overview'>
            <img src={imgCMAIOverview} alt='CMAI Overview' />
          </Tab>
          <Tab title='CMAI Items'>
            <img src={imgCMAIItems} alt='CMAI Items' />
          </Tab>
        </Tabs>
      </div>

      <Footer
        custom={styles.footer}
        footnotes={{
          data: [
            {
              innerText:
                'AAD, agitation associated with Alzheimer’s dementia; CMAI, Cohen-Mansfield Agitation Inventory; IPA, International Psychogeriatric Association.',
            },
          ],
        }}
        references={{
          custom: 'mt-8',
          data: [
            {
              text: (
                <span>
                  Cohen-Mansfield, J. (1991). Instruction Manual for the
                  Cohen-Mansfield Agitation Inventory (CMAI). Rockville, MD:
                  Research Institute of the Hebrew Home of Greater Washington.
                  Available at: https://uiowa2.instructure.com › files ›
                  download. Accessed March 17, 2023.
                </span>
              ),
            },
            {
              text: (
                <span>
                  Grossberg GT, et al. <strong>Am J Geriatr Psychiatry.</strong>{' '}
                  2020;28(4):383–400.
                </span>
              ),
            },
          ],
        }}
        safetyInfo={{
          custom: `mt-3 ${styles.safety_info}`,
          data: [
            {
              text: 'FOR USE WITH FORMULARY DECISION-MAKERS ONLY. DO NOT DUPLICATE OR DISTRIBUTE.',
            },
          ],
        }}
        images={[
          <img
            src={RexultiLogo}
            alt='maintena-logo'
            width='154.2'
            className={styles.logo}
          />,
        ]}
      />
    </>
  );
};
export default PageContent;
