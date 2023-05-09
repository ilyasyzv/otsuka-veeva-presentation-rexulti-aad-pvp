import React from 'react';
import { Footer } from '@/Components/03-organisms/Footer/Footer';
import Button from '@/Components/01-atoms/Content/Button/Button';
import Header from '@/Components/01-atoms/Content/Header/Header';
import { Modal } from '@templates/Layouts';
import classNames from 'classnames';

import tableImg from './img/PatientDemographics1.png';

import style from './Modaldemographics1.module.scss';

/**
 * Component for modals page https://owp.atlassian.net/browse/DF-33473.
 */

export const ModalDemographics1 = () => (
  <Modal
    customClass={style.modalRoot}
    withHeader
    withFooter
    header={
      <Header custom='mb-21'>
        Patient Demographics/Baseline Characteristics<sup>1</sup>
      </Header>
    }
    link={<Button text='Demographics' custom='button__type-a--active' />}
    footer={
      <Footer
        custom={`${style.footer} mb-23 mw-839`}
        footnotes={{
          data: [
            {
              innerText: (
                <span>
                  CMAI, Cohen-Mansfield Agitation Inventory; MMSE, Mini-Mental
                  State Examination; NPI, Neuropsychiatric Inventory; NPI-NH,
                  Neuropsychiatric Inventory −<br /> Nursing Home version; SD,
                  standard deviation.
                </span>
              ),
            },
          ],
        }}
        references={{
          custom: 'mt-12',
          data: [
            {
              text: (
                <span>
                  Grossberg GT, et al. <em>Am J Geriatr Psychiatry. </em>
                  2020;28(4):383-400.
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
export default ModalDemographics1;
