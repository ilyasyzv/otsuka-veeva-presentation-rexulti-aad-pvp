import React from 'react';
import classNames from 'classnames';

import { Footer } from '@/Components/03-organisms/Footer/Footer';
import Button from '@/Components/01-atoms/Content/Button/Button';
import Header from '@/Components/01-atoms/Content/Header/Header';
import { Modal } from '@templates/Layouts';

import ModalImg from './img/CMAI.png';

import style from './ModalCMAI.module.scss';

/**
 * Component for modals page https://owp.atlassian.net/browse/DF-33599.
 */

export const ModalCMAI = () => (
  <Modal
    customClass={style.modalRoot}
    withHeader
    withFooter
    header={<Header custom='mb-21'>CMAI Additional Information</Header>}
    link={
      <Button
        text='CMAI Additional Information'
        custom='button__type-a--active'
      />
    }
    footer={
      <Footer
        custom={classNames(style.footer, 'mb-32', 'mw-839')}
        footnotes={{
          data: [
            {
              innerText: (
                <span>CMAI, Cohen-Mansfield Agitation Inventory.</span>
              ),
            },
          ],
        }}
        references={{
          custom: 'mt-6',
          data: [
            {
              text: (
                <span>
                  Cohen-Mansfield, J. (1991). Instruction Manual for the
                  Cohen-Mansfield Agitation Inventory (CMAI). Rockville, MD:
                  Research Institute of the Hebrew Home of Greater Washington.
                  Accessed March 17, 2023.
                </span>
              ),
            },
            {
              text: (
                <span>
                  Panca M, et al. <b>PLoS One.</b> 2019;14(2):e0211953.
                </span>
              ),
            },
            {
              text: <span>Data on file. Otsuka.</span>,
            },
          ],
        }}
      />
    }
  >
    <span className={classNames(style.text, 'mb-25')}>
      <b className={style.boldText}>Overview:</b> A caregiver rating
      questionnaire that measures the frequency of manifestations
      <br /> of 29 agitated behaviors in elderly persons on a 7-point scale over
      the last 2 weeks with 1 <br />
      being never to 7 being several times an hour.<sup>1</sup>
    </span>
    <img src={ModalImg} alt='reported table' className={style.imgBody} />
  </Modal>
);
export default ModalCMAI;
