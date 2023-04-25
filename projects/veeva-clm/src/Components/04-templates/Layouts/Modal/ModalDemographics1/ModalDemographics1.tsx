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
        custom={classNames(style.footer, 'mb-23', 'mw-839')}
        footnotes={{
          data: [
            {
              innerText: (
                <span>
                  Data are the means (SD) unless otherwise stated. Statistical
                  analysis revealed no significant between-group differences (
                  <b>P</b>&lt;0.05) for any baseline clinical <br />
                  characteristic (F test for continuous variables and χ
                  <sup>2</sup> test for categorical variables), except for
                  NPI-NH Agitation/Aggression score, F<sub>(2410)</sub>=3.42,
                  <b>P</b>=0.034; patients <br /> in the REXULTI 0.5 mg arm were
                  excluded from statistical comparisons.
                </span>
              ),
            },
            {
              innerText: (
                <span>
                  BMI, body mass index; CMAI, Cohen-Mansfield Agitation
                  Inventory; MMSE, Mini-Mental State Examination.
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
                  Grossberg GT, et al. <b>Am J Geriatr Psychiatry. </b>
                  2020;28(4):383-400.
                </span>
              ),
            },
            {
              text: (
                <span>
                  Fillit H, et al. <b>Int J Geriatr Psychiatry.</b>
                  2021;36(12):1959-1969.
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
