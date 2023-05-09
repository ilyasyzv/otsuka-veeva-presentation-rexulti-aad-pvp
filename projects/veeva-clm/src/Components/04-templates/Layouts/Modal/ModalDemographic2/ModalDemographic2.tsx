import React from 'react';
import { Footer } from '@/Components/03-organisms/Footer/Footer';
import Button from '@/Components/01-atoms/Content/Button/Button';
import Header from '@/Components/01-atoms/Content/Header/Header';
import { Modal } from '@templates/Layouts';
import classNames from 'classnames';

import tableImg from './img/PatientDemographics2.png';

import style from './ModalDemographic2.module.scss';

/**
 * Component for modals page https://owp.atlassian.net/browse/DF-33473.
 */

export const ModalDemographics2 = () => (
  <Modal
    customClass={style.modalRoot}
    withHeader
    withFooter
    header={
      <Header custom='mb-47'>
        Patient Demographics/Baseline Characteristics<sup>1</sup>
      </Header>
    }
    link={<Button text='Demographics' custom='button__type-a--active' />}
    footer={
      <Footer
        custom={classNames(style.footer, 'mb-10', 'mw-839')}
        footnotes={{
          data: [
            {
              innerText: (
                <span>
                  CMAI, Cohen-Mansfield Agitation Inventory; MMSE, Mini-Mental
                  State Examination.
                </span>
              ),
            },
          ],
        }}
        references={{
          custom: 'mt-9',
          data: [
            {
              text: (
                <span>
                  Grossberg GT, et al. Poster presented at: Psych Congress;
                  September 17-20, 2022; New Orleans, LA.
                </span>
              ),
            },
          ],
        }}
      />
    }
  >
    <img src={tableImg} alt='reported table' className={style.imgBody} />
  </Modal>
);
export default ModalDemographics2;
