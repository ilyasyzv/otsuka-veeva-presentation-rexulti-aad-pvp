import React from 'react';
import { Footer } from '@/Components/03-organisms/Footer/Footer';
import Button from '@/Components/01-atoms/Content/Button/Button';
import Header from '@/Components/01-atoms/Content/Header/Header';
import tableImg from './images/AddReportedTable.png';
import style from './ModalAddReported.module.scss';
const blockName = 'modal';

export const ModalAddReported = {
  customClass: `${blockName}_study-design ${style.modalRoot}`,
  withHeader: true,
  link: (
    <Button
      text='Patient Setting and Severity'
      custom='button__type-a--active'
    />
  ),
  header: (
    <Header custom='mb-18'>
      Agitation in Alzheimer’s Dementia Across Care
      <br /> Settings and Dementia Severity
    </Header>
  ),
  children: (
    <>
      <img src={tableImg} />
    </>
  ),
  withFooter: true,
  footer: (
    <Footer
      custom='mb-15'
      footnotes={{
        data: [
          {
            innerText: (
              <span>
                *Nursing home percentage reported includes those with
                Alzheimer’s dementia and other types of dementia.2 †In a 2-year
                observation period, of the 320,886 eligible patients, 78,827
                (24.6%) could be assigned to explicit AD/dementia severity
                categories.
              </span>
            ),
          },
          {
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
                “severe.”1
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
                Halpern R, et al. Int J Geriatr Psychiatry. 2018;34(3):420-431.
              </span>
            ),
          },
          {
            text: (
              <span>
                Fillit H, et al. Int J Geriatr Psychiatry.
                2021;36(12):1959-1969.
              </span>
            ),
          },
        ],
      }}
    />
  ),
};

export default ModalAddReported;
