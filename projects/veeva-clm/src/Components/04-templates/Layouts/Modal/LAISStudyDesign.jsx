import React from 'react';

import { Text } from '@/Components/01-atoms/Content/Text/Text';
import List from '@/Components/01-atoms/Content/List/List';
import { Footer } from '@/Components/03-organisms/Footer/Footer';
import { FootNote } from '@/Components/01-atoms/Content/FootNote/FootNote';
import Button from '@/Components/01-atoms/Content/Button/button';
import Header from '@/Components/01-atoms/Content/Header/Header';

const blockName = 'modal';

export const StudyDesignLAIs1Args = {
  customClass: `${blockName}_study-design`,
  withHeader: true,
  link: <Button text='Study Design' custom='button__type-b' />,
  header: (
    <Header custom='mb-18'>
      Study design<sup>1</sup>
    </Header>
  ),
  children: (
    <>
      <Text
        title='Objective'
        list={{
          columns: 'columns-1',
          type: 'circle',
          data: [
            {
              text: (
                <>
                  To compare differences in medication adherence and
                  discontinuation between patients who initiated an
                  <br /> LAI and patients who changed from one oral
                  antipsychotic monotherapy to another
                </>
              ),
            },
          ],
        }}
      />
      <Text
        title={<>Primary Endpoint</>}
        list={{
          columns: 'columns-1',
          type: 'circle',
          data: [
            {
              text: (
                <>
                  Medication adherence assessed by proportion of day covered
                  (PDC) during the 1-year post-index period
                </>
              ),
            },
          ],
        }}
      />
      <Text
        title='Indices'
        list={{
          columns: 'columns-1',
          type: 'circle',
          data: [
            {
              text: (
                <>
                  The index date was defined as the earliest occurrence (the
                  first date) of a claim for one of the available LAI therapies
                  of interest during the identification (ID) period between
                  January 1, 2013, and June 30, 2014
                  <br />
                </>
              ),
            },
            {
              text: (
                <>
                  The index therapy was identified as the therapy observed on
                  the index date
                </>
              ),
            },
          ],
        }}
      />
      <Text
        title='Data Source'
        list={{
          columns: 'columns-1',
          type: 'circle',
          data: [
            {
              text: (
                <>
                  Truven Health Analytics MarketScan Multi-State Medicaid and 
                  Truven MarketScan commercial and Medicaid databases (January 1, 2012, through June 30, 2015)
                </>
              ),
            },
          ],
        }}
      />
      <Text
        title='Inclusion Criteria'
        list={{
          columns: 'columns-1',
          type: 'circle',
          data: [
            {
              text: (
                <>
                  Patients with existing or newly diagnosed bipolar disorder
                  were identified as having at least 1 inpatient claim or at
                  <br />
                  least 2 outpatient claims for bipolar disorder in any
                  diagnosis field for a claim during the entire study period
                </>
              ),
            },
            {
              text: (
                <>
                  Among patients with bipolar disorder identified, the following
                  2 mutually exclusive cohorts were included: 1) LAI
                  <br /> cohort and 2) oral antipsychotic cohort
                </>
              ),
            },
            {
              text: (
                <>
                  For the LAI cohort, patients with bipolar disorder had at
                  least 1 claim for an LAI therapy (aripiprazole
                  <br /> monohydrate, fluphenazine decanoate, haloperidol
                  decanoate, olanzapine pamoate, paliperidone palmitate
                  <br /> [4-week], or risperidone microspheres) during the ID
                  period
                  <List
                    content={{
                      columns: 'columns-1',
                      type: 'rectangle',
                      data: [
                        {
                          text: (
                            <>
                              The index date was defined as the earliest
                              occurrence (the first date) of a claim for 1 of
                              the LAI therapies of <br /> interest during the ID
                              period
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
                  For the oral antipsychotic cohort, patients with bipolar
                  disorder had changed from 1 oral antipsychotic therapy to
                  <br />
                  another oral antipsychotic monotherapy during the ID period
                  <List
                    content={{
                      columns: 'columns-1',
                      type: 'rectangle',
                      data: [
                        {
                          text: (
                            <>
                              The index date for this cohort was identified as
                              the earliest date of the new oral antipsychotic
                              prescription
                            </>
                          ),
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
      <Text
        title='Exclusion Criteria'
        list={{
          columns: 'columns-1',
          type: 'circle',
          data: [
            {
              text: (
                <>
                  Since the approval dates for aripiprazole lauroxil and
                  paliperidone palmitate (12-week) were beyond the study
                  <br /> end date, patients with claims for these 2 LAI
                  therapies were not included in the study
                </>
              ),
            },
            {
              text: (
                <>
                  Patients without 1-year continuous enrollment prior to and
                  after the ID period
                </>
              ),
            },
            {
              text: (
                <>
                  Patients having occurrence of first bipolar diagnosis after
                  the index date
                </>
              ),
            },
          ],
        }}
      />
      <Text
        title='Limitations'
        list={{
          columns: 'columns-1',
          type: 'circle',
          data: [
            {
              text: (
                <>
                  Clinical differences that were not measurable by analysis of
                  this claims database may have existed and may be
                  <br /> responsible for adherence advantages observed
                  <List
                    content={{
                      columns: 'columns-1',
                      type: 'rectangle',
                      data: [
                        {
                          text: (
                            <>
                              These differences may include attitudes of
                              clinicians and patients about LAIs or disease
                              severity, leading to the
                              <br /> choice of LAI vs oral antipsychotics
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
                  A diagnosis of bipolar disorder and schizophrenia was identified from health
                  care claims coded for reimbursement. Coding errors are
                  <br />
                  possible and were not accounted for in this study
                </>
              ),
            },
            {
              text: (
                <>
                  Medication use cannot be wholly determined by claims analysis
                  because a prescription fill does not verify that a<br />
                  medication was used or taken as prescribed
                </>
              ),
            },
            {
              text: (
                <>
                  If intended dosing intervals differ from the prescribing
                  label, estimates of adherence may not be accurate
                </>
              ),
            },
          ],
        }}
      />
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
                LAI=long-acting injectable <br />
                ID=idcntification LAI=long-acting injectable.
              </span>
            ),
          },
        ],
      }}
      references={{
        custom: 'mt-5',
        data: [
          {
            text: <span>Greene M,  et al. <em>J Med Econ.</em> 2018;2l(2):127-134.</span>,
          },
        ],
      }}
    />
  ),
};

export const StudyDesignLAIs2Args = {
  customClass: `${blockName}_study-design`,
  withHeader: true,
  link: <Button text='Study Design' custom='button__type-b' />,
  header: (
    <Header custom='mb-18'>
      Study design<sup>1</sup>
    </Header>
  ),
  children: (
    <>
      <Text
        title='Objective'
        list={{
          columns: 'columns-1',
          type: 'circle',
          data: [
            {
              text: (
                <>
                  To compare the impact of switching to long-acting injectables
                  (LAIs) versus continuation of oral
                  <br /> antipsychotics on the recurrence of hospitalizations
                  and emergency room (ER) visits among patients
                  <br /> with schizophrenia
                </>
              ),
            },
          ],
        }}
      />
      <Text
        title='Endpoints'
        list={{
          columns: 'columns-1',
          type: 'circle',
          data: [
            {
              text: (
                <>
                  The number of rehospitalizations and the number of ER visits
                  occurring after the index hospitalization
                </>
              ),
            },
            {
              text: <>The number of days in the hospital</>,
            },
            {
              text: (
                <>
                  The time to first rehospitalization or ER visit (defined as
                  the number of months between the index hospitalization
                  <br /> and the first rehospitalization or ER visit during
                  follow-up)
                </>
              ),
            },
            {
              text: (
                <>
                  The frequency of events within the same month or within 1, 3,
                  and 6 months after the index hospitalization
                  <br /> (ie, relapse)
                </>
              ),
            },
          ],
        }}
      />
      <Text
        title='Data Source'
        list={{
          columns: 'columns-1',
          type: 'circle',
          data: [
            {
              text: (
                <>
                  Premier Perspective Comparative Hospital Database (first
                  quarter of 2006 to the fourth quarter of 2010)
                </>
              ),
            },
          ],
        }}
      />
      <Text
        title='Patient Population'
        list={{
          columns: 'columns-1',
          type: 'circle',
          data: [
            {
              text: (
                <>
                  Adult patients with schizophrenia aged ≥18 years who were
                  treated with oral antipsychotics during a first
                  <br />
                  schizophrenia-related hospitalization
                </>
              ),
            },
          ],
        }}
      />
      <Text
        title='Indices'
        list={{
          columns: 'columns-1',
          type: 'circle',
          data: [
            {
              text: (
                <>
                  The index hospitalization had to occur at least 3 months
                  before December 2010
                </>
              ),
            },
          ],
        }}
      />
      <Text
        title='Limitations'
        list={{
          columns: 'columns-1',
          type: 'circle',
          data: [
            {
              text: (
                <>
                  The data were subject to billing inaccuracies and missing
                  data. The history of rehospitalizations and ER visits for a
                  given
                  <br /> patient in the databases may have been incomplete
                </>
              ),
            },
            {
              text: (
                <>
                  Rehospitalizations recorded in the database were based only on
                  information available during hospitalizations occurring at
                  <br /> the same hospital
                </>
              ),
            },
            {
              text: (
                <>
                  Patients’ disease severity and the occurrence of a relapse
                  event could not be assessed due to a lack of clinical data
                </>
              ),
            },
          ],
        }}
      />
    </>
  ),
  withFooter: true,
  footer: (
    <Footer
      custom='mb-15'
      footnotes={{
        data: [
          {
            innerText: <span>ER=emergency room.</span>,
          },
        ],
      }}
      references={{
        custom: 'mt-5',
        data: [
          {
            text: (
              <span>Lafeuille M-H, et al. <em>BMC Psychiatry.</em> 2013;13:221.</span>
            ),
          },
        ],
      }}
    />
  ),
};
