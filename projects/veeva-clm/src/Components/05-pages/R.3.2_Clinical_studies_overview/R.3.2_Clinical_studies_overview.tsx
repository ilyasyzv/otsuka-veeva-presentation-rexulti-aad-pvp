import React from 'react';
import Header from '@/Components/01-atoms/Content/Header/Header';
import RexultiLogo from '@/assets/rexulti-logo.png';
import { Link } from '@/Components/03-organisms/Routing/Link/Link';
import { Footer } from '@/Components/03-organisms/Footer/Footer';
import styles from './R.3.2_Clinical_studies_overview.module.scss';
import PageImage from './img/Image1.png';

const PageContent: React.FC = () => {
  return (
    <div className={styles.page}>
      <Header custom={`${styles.h1} mb-66`}>Clinical Studies Overview</Header>
      <img className={styles.image_1} src={PageImage} alt='' width='852' />
      <Footer
        footnotes={{
          data: [
            {
              innerText: 'CMAI, Cohen-Mansfield Agitation Inventory.',
            },
          ],
        }}
        references={{
          data: [
            {
              text: 'Grossberg GT, et al. Am <strong>J Geriatr Psychiatry</strong>. 2020;28(4):383-400.',
            },
            {
              text: 'Data on file. Otsuka.',
            },
          ],
        }}
        safetyInfo={{
          custom: 'mt-6',
          data: [
            {
              text: (
                <span>
                  Please see{' '}
                  <Link to='R.6.0_ISI' custom='blue-500'>
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
        image={<img src={RexultiLogo} alt='maintena-logo' width='154' />}
      />
    </div>
  );
};
export default PageContent;
