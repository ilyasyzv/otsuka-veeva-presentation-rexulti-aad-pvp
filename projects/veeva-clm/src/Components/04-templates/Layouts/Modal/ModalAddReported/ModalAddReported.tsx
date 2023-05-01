import React from 'react';
import { Footer } from '@/Components/03-organisms/Footer/Footer';
import Button from '@/Components/01-atoms/Content/Button/Button';
import Header from '@/Components/01-atoms/Content/Header/Header';
import { Modal } from '@templates/Layouts';

import tableImg from './images/AddReportedTable.png';

import style from './ModalAddReported.module.scss';

const blockName = 'modal';

/**
 * Component for modals page https://owp.atlassian.net/browse/DF-33593.
 */
const ModalAddReportedConfigs = {
  customClass: `${blockName}_study-design ${style.modalRoot}`,
  withHeader: true,
  link: (
    <Button
      text='Patient Setting and Severity'
      custom='button__type-a--active'
    />
  ),
  header: (
    <Header>
      Agitation in Alzheimer’s Dementia Across Care
      <br /> Settings and Dementia Severity
    </Header>
  ),
  children: (
    <img src={tableImg} alt='reported table' className={style.imgBody} />
  ),
  withFooter: true,
  footer: (
    <Footer
      custom={style.footer}
      footnotes={{
        data: [
          {
            supLeft: '*',
            innerText: (
              <span>
                Nursing home percentage reported includes those with Alzheimer’s
                dementia and other types of dementia.<sup>2</sup>
              </span>
            ),
          },
          {
            supLeft: '†',
            innerText: (
              <span>
                In a 2-year observation period, of the 320,886 eligible
                patients, 78,827 (24.6%) could be assigned to explicit
                AD/dementia severity categories.
              </span>
            ),
          },
          {
            supLeft: '‡',
            innerText: (
              <span>
                Adapted from a retrospective database study of 320,886
                community-dwelling patients with ≥1 electronic health record
                (EHR) indicating Alzheimer’s disease (AD)/dementia. Agitation
                was identified using diagnosis codes for dementia with
                behavioral disturbance and EHR abstracted notes records
                indicating agitation symptoms compiled from the International
                Psychogeriatric Association provisional consensus definition.
                Patients who had records containing valid quantitative MMSE
                scores or explicit terms for only one level of AD/dementia
                severity were categorized accordingly as “mild,” “moderate,” or
                “severe.”<sup>1</sup>
              </span>
            ),
          },
        ],
      }}
      references={{
        custom: 'mt-5',
        data: [
          {
            text: (
              <span>
                Halpern R, et al. <strong>Int J Geriatr Psychiatry</strong>.
                2018;34(3):420-431.
              </span>
            ),
          },
          {
            text: (
              <span>
                Fillit H, et al. <strong>Int J Geriatr Psychiatry</strong>.
                2021;36(12):1959-1969.
              </span>
            ),
          },
        ],
      }}
    />
  ),
};

export const ModalAddReported = () => <Modal {...ModalAddReportedConfigs} />;
export default ModalAddReported;
