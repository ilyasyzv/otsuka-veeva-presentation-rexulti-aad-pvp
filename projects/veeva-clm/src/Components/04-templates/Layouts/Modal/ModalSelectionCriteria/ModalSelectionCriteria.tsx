import React from 'react';
import classNames from 'classnames';

import { Footer } from '@/Components/03-organisms/Footer/Footer';
import Button from '@/Components/01-atoms/Content/Button/Button';
import Header from '@/Components/01-atoms/Content/Header/Header';
import { Modal } from '@templates/Layouts';
import List from '@atoms/Content/List/List';

import style from './ModalSelectionCriteria.module.scss';

/**
 * Component for modals page https://owp.atlassian.net/browse/DF-33474.
 */

export const ModalSelectionCriteria = () => (
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
        custom={classNames(style.footer, 'mw-880')}
        footnotes={{
          data: [
            {
              innerText: (
                <span>
                  <sup className='sup-left sup-left-asterisk'>*</sup>
                  The NPI-NH was completed by a clinician based on an interview
                  with the patient’s caregiver; Agitation/Aggression domain
                  score was obtained by multiplying the frequency rating (from 1
                  [rarely] to 4 [very often])
                  <br /> by the severity rating (from 1 [mild] to 3 [severe]).
                </span>
              ),
            },
            {
              supLeft: '†',
              innerText: (
                <span>
                  Medications for Alzheimer’s disease (cholinesterase
                  inhibitors, memantine, other cognitive enhancers),
                  antidepressants, and benzodiazepines were permitted under
                  certain circumstances.
                </span>
              ),
            },
            {
              innerText: (
                <span>
                  CT, computed tomography; DSM-IV-TR,
                  <em>
                    The Diagnostic and Statistical Manual of Mental Disorders,
                    fourth edition, text revision;
                  </em>{' '}
                  MMSE, Mini-Mental State Examination; MRI, magnetic resonance
                  imaging;
                </span>
              ),
            },
            {
              innerText: (
                <span>
                  NINCDS-ADRDA, National Institute of Neurological and
                  Communicative Diseases and Stroke/Alzheimer’s Disease and
                  Related Disorders Association; NPI, Neuropsychiatric
                  Inventory; NPI-NH, Neuropsychiatric Inventory - Nursing Home
                  version.
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
                  Grossberg GT, et al. <em>Am J Geriatr Psychiatry</em>.
                  2020;28(4):383-400.
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
                text: <>Adults, aged 55-90 years</>,
              },
              {
                text: (
                  <>
                    Diagnosis of probable Alzheimer’s disease (per NINCDS-ADRDA
                    criteria)
                  </>
                ),
              },
              {
                text: <>MMSE score of 5-22 at screening and baseline</>,
              },
              {
                text: (
                  <>
                    MRI or CT brain scan with findings consistent with a
                    diagnosis of Alzheimer’s disease
                  </>
                ),
              },
              {
                text: (
                  <>
                    Symptoms of agitation or aggression (NPI-NH
                    Agitation/Aggression domain score ≥4)*
                  </>
                ),
              },
              {
                text: (
                  <>
                    Residing at their current location (care or community
                    setting, provided they were not living alone) for ≥14 days
                    prior to screening and expected to remain there during the
                    trial
                  </>
                ),
              },
              {
                text: (
                  <>
                    In the investigator’s judgment, requiring and able to
                    benefit from pharmacotherapy for agitation, after evaluation
                    for reversible factors and trial of nonpharmacologic
                    interventions
                  </>
                ),
              },
              {
                text: (
                  <>
                    Caregiver able to spend ≥2 hours/day with the patient for 4
                    days/week to assess the patient’s condition
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
                    Dementia or memory impairment due to a reason <br />
                    other than Alzheimer’s disease (including mixed pathologies)
                  </>
                ),
              },
              {
                text: (
                  <>
                    Diagnosis of a specified DSM-IV-TR Axis I disorder,
                    including:
                    <List
                      content={{
                        columns: 'columns-1',
                        type: 'rectangle',
                        markerColor: 'green-300',
                        data: [
                          {
                            text: (
                              <>
                                Current major depressive disorder (unless on a
                                stable dose of antidepressant medication for 30
                                days prior to randomization)
                              </>
                            ),
                          },
                          {
                            text: <>History of bipolar disorder</>,
                          },
                          {
                            text: (
                              <>
                                History of a psychotic disorder not related to
                                dementia
                              </>
                            ),
                          },
                        ],
                      }}
                    />
                  </>
                ),
              },
              {
                text: (
                  <>
                    Any other specified comorbidity including history <br /> of
                    stroke
                  </>
                ),
              },
              {
                text: (
                  <>
                    Likely to require prohibited concomitant therapy
                    <br /> during the trial, including
                    <sup className={style.dagger}>†</sup>:
                    <List
                      content={{
                        columns: 'columns-1',
                        type: 'rectangle',
                        markerColor: 'green-300',
                        data: [
                          {
                            text: <>Antipsychotics</>,
                          },
                          {
                            text: <>Mood stabilizers </>,
                          },
                          {
                            text: <>Anticonvulsants</>,
                          },
                        ],
                      }}
                    />
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
export default ModalSelectionCriteria;
