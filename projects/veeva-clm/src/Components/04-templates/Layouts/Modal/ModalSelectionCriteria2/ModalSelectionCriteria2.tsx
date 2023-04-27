import React from 'react';
import classNames from 'classnames';

import { Footer } from '@/Components/03-organisms/Footer/Footer';
import Button from '@/Components/01-atoms/Content/Button/Button';
import Header from '@/Components/01-atoms/Content/Header/Header';
import { Modal } from '@templates/Layouts';
import List from '@atoms/Content/List/List';

import style from '@templates//Layouts/Modal/ModalSelectionCriteria/ModalSelectionCriteria.module.scss';

/**
 * Component for modals page https://owp.atlassian.net/browse/DF-33474.
 */

export const ModalSelectionCriteria2 = () => (
  <Modal
    customClass={style.modalRoot}
    withHeader
    withFooter
    header={
      <Header custom='mb-54'>
        Patient Selection Criteria<sup>1</sup>
      </Header>
    }
    link={<Button text='Patient Selection' custom='button__type-a--active' />}
    footer={
      <Footer
        custom={classNames(style.footer, 'mb-10', 'mw-880')}
        footnotes={{
          data: [
            {
              innerText: (
                <span>
                  CT, computed tomography; MRI, magnetic resonance imaging;
                  MMSE, Mini-Mental State Examination;
                  NPI/NPI-NH=Neuropsychiatric Inventory/Neuropsychiatric
                  Inventory-Nursing Home version.
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
                  National Institutes of Health. NCT03548584. 2022.
                  https://clinicaltrials.gov/ct2/show/NCT03548584. Accessed
                  March 13, 2023.
                </span>
              ),
            },
          ],
        }}
      />
    }
  >
    <div className={style.content}>
      <div className={style.listWrapper}>
        <h2
          className={classNames(style.contentHeader, style.inclusion, 'mb-16')}
        >
          Inclusion criteria
        </h2>
        <List
          content={{
            custom: style.list,
            columns: 'columns-1',
            type: 'circle',
            markerColor: 'green-300',
            data: [
              {
                text: <>With a diagnosis of probable Alzheimer’s disease</>,
              },
              {
                text: <>With a diagnosis of agitation</>,
              },
              {
                text: (
                  <>
                    With an MMSE score of 5 to 22, inclusive, at screening and
                    baseline visits{' '}
                  </>
                ),
              },
              {
                text: (
                  <>
                    With a previous MRI or CT scan of the brain that was
                    performed after the onset of symptoms of dementia, with
                    findings consistent with a diagnosis of Alzheimer’s disease
                  </>
                ),
              },
              {
                text: (
                  <>
                    With onset of symptoms of agitation at least 2 weeks prior
                    to screening visit
                  </>
                ),
              },
              {
                text: (
                  <>
                    With a total score of ≥4 by the agitation/aggression item of
                    the NPI/NPI-NH
                  </>
                ),
              },
              {
                text: (
                  <>
                    With sufficient agitation behaviors at time of entry to
                    warrant use of pharmacotherapy, after excluding other
                    factors
                  </>
                ),
              },
              {
                text: (
                  <>
                    Able to discontinue all prohibited concomitant medications
                    to meet protocol-required washouts prior to and during the
                    trial period
                  </>
                ),
              },
              {
                text: (
                  <>
                    Patients were required to be exhibiting sufficient agitation
                    behaviors at time of entry to warrant use of
                    pharmacotherapy, after excluding other factors
                  </>
                ),
              },
            ],
          }}
        />
      </div>
      <div className={style.listWrapper}>
        <h2
          className={classNames(style.contentHeader, style.exclusion, 'mb-16')}
        >
          Exclusion criteria
        </h2>
        <List
          content={{
            custom: style.list,
            columns: 'columns-1',
            type: 'circle',
            markerColor: 'green-300',
            data: [
              {
                text: (
                  <>
                    With dementia or other memory impairment not due to
                    Alzheimer’s disease
                  </>
                ),
              },
              {
                text: (
                  <>
                    With a history of stroke, well-documented transient ischemic
                    attack, or pulmonary or cerebral embolism
                  </>
                ),
              },
              {
                text: (
                  <>
                    An insufficient response based on the investigator’s
                    judgment to 2 or more previous antipsychotic medications{' '}
                  </>
                ),
              },
              {
                text: <>Have been diagnosed with an Axis I disorder</>,
              },
              {
                text: (
                  <>
                    Currently have clinically significant neurological, hepatic,
                    renal, metabolic, hematologic, immunologic, cardiovascular,
                    pulmonary, gastrointestinal, or psychiatric disorders
                  </>
                ),
              },
              {
                text: (
                  <>
                    With uncontrolled hypertension or symptomatic hypotension,
                    or orthostatic hypotension
                  </>
                ),
              },
              {
                text: (
                  <>
                    With diabetes mellitus (insulin dependent and noninsulin
                    dependent) may be eligible for the trial if their condition
                    is stable and well controlled
                  </>
                ),
              },
            ],
          }}
        />
      </div>
    </div>
  </Modal>
);
export default ModalSelectionCriteria2;
