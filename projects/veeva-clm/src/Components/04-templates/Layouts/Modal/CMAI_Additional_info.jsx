import React from 'react';
import Paragraph from '@atoms/Content/Paragraph/Paragraph';
import { Footer } from '@/Components/03-organisms/Footer/Footer';
import Header from '@/Components/01-atoms/Content/Header/Header';
import { Button } from '@atoms/Content/Button/Button';
import styles from '@pages/R.3.3.2_Study_6/R.3.3.2_Study_6.module.scss';
import CMAIAdditionaInformationImg from './images/CMAIAdditionaInformation.png?format=webp';

import './ModalCMAIAdditionaInfo.scss';

const blockName = 'modal';

const CMAIAdditionalInfoArgs = {
  customClass: `${blockName}_cmai-additional-info`,
  withHeader: true,
  header: (
    <Header tag='h1' custom='mb-18'>
      CMAI Additional Information
    </Header>
  ),
  link: (
    <Button
      text='CMAI Additional Information'
      custom={`button__type-a--active ${styles.modal_button}`}
    />
  ),
  children: (
    <div>
      <Paragraph custom='mb-10'>
        <span>
          <strong>Overview:</strong>
        </span>{' '}
        A caregiver rating questionnaire that measures the frequency of
        manifestations
        <br /> of 29 agitated behaviors in elderly persons on a 7-point scale
        over the last 2 weeks with 1<br /> being never to 7 being several times
        an hour.<sup>1</sup>
      </Paragraph>
      <img className='mb-10' src={CMAIAdditionaInformationImg} alt='' />
    </div>
  ),
  withFooter: true,
  footer: (
    <Footer
      custom='mb-15'
      footnotes={{
        data: [
          {
            innerText: <span>CMAI, Cohen-Mansfield Agitation Inventory.</span>,
          },
        ],
      }}
      references={{
        custom: 'mt-5',
        data: [
          {
            text: (
              <span>
                Cohen-Mansfield, J. (1991). Instruction Manual for the
                Cohen-Mansfield Agitation Inventory (CMAI). Rockville, MD:
                Research Institute of the Hebrew Home of Greater Washington.
                <br />
                Accessed March 17, 2023.
              </span>
            ),
          },
          {
            text: (
              <span>
                Panca M, et al. <strong>PLoS One</strong>. 2019;14(2):e0211953.
              </span>
            ),
          },
          {
            text: <span>Data on file. Otsuka.</span>,
          },
        ],
      }}
    />
  ),
};

export default CMAIAdditionalInfoArgs;
