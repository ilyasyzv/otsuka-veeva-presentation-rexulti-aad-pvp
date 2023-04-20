import React from 'react';
import { Text } from '@/Components/01-atoms/Content/Text/Text';
import Button from '@/Components/01-atoms/Content/Button/button';
import Header from '@/Components/01-atoms/Content/Header/Header';
import { Footer } from '@/Components/03-organisms/Footer/Footer';
import List from '@/Components/01-atoms/Content/List/List';
import { FootNote } from '@/Components/01-atoms/Content/FootNote/FootNote';

const blockName = 'modal';
export const StudyDesignSupArgs = {
  customClass: `${blockName}_study-design`,
  link: <Button text='Study Design' custom='button__type-b' />,
  children: (
    <>
      <Header custom='mb-26'>
        Study design<sup>1</sup>
      </Header>
      <Text
        title='12-week, multiphase maintenance study'
        innerText='A randomized, double-blind,
        placebo-controlled clinical
        study of 340 acutely relapsed patients living with schizophrenia to determine the efficacy and safety of
        ABILIFY MAINTENA® (aripiprazole) 400 mg (n=168) vs placebo (n=172). All patients had a diagnosis of
        schizophrenia at study entry.'
      />
      <Text
        title='Patient population'
        list={{
          columns: 'columns-1',
          type: 'circle',
          data: [
            {
              text: (
                <>
                  Adults with schizophrenia who were experiencing an acute
                  psychiatric episode at the time of screening <br />
                  and baseline
                </>
              ),
            },
            {
              text: (
                <>
                  Patients with prior aripiprazole use had to undergo a 7-day
                  washout period from prior antipsychotics and other <br />
                  prohibited medications at study entry,
                </>
              ),
            },
            {
              text: (
                <>
                  Patients without prior aripiprazole use received open-label
                  treatment with oral aripiprazole 10 mg for 3 days to establish
                  tolerability prior to the 7-day washout period
                </>
              ),
            },
            {
              text: (
                <>
                  Patients were required to remain as inpatients for at least
                  the first 2 weeks of treatment, after which hospitalization
                  <br />
                  status was determined on the basis of the investigator’s
                  judgment of the patient’s clinical status. Those discharged
                  were followed with clinic visits and phone calls
                </>
              ),
            },
          ],
        }}
      />
      <Text
        title='Study endpoints'
        innerText={
          <>
            <strong className={`${blockName}_study-design__strong`}>
              Primary endpoint:&nbsp;
            </strong>
            Mean change in PANSS total score from baseline to Week 10
            <br />
            <strong className={`${blockName}_study-design__strong`}>
              Secondary endpoint: &nbsp;
            </strong>
            Mean change in CGI-S score from baseline to endpoint at Week 12.
          </>
        }
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
                CGI-S=Clinical Global Impression-Severity of Illness Scale;
                PANSS=Positive and Negative Syndrome Scale.
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
                Kane JM, et al. J Clin Psychiatry. 2014;75(11):1254-1260.
              </span>
            ),
          },
        ],
      }}
    />
  ),
};

export const StudyDesign1Args = {
  customClass: `${blockName}_study-design`,
  link: <Button text='Study Design' custom='button__type-b' />,
  children: (
    <>
      <Header custom='mb-18'>
        Study design<sup>1</sup>
      </Header>
      <Text
        title={
          <>
            52-Week, Multiphase Maintenance Study<sup>1</sup>
          </>
        }
        innerText='A 52-week, placebo-controlled maintenance study evaluated the time to relapse for adult patients
         living with schizophrenia.'
      />
      <Text
        title={
          <>
            Patient Population<sup>1</sup>
          </>
        }
        innerText='Patients living with schizophrenia diagnosed ≥3 years with a history of symptom exacerbation or
         relapse when not receiving antipsychotic treatment.*'
      />
      <Text
        title={
          <>
            4 Phases of Study<sup>1,2</sup>
          </>
        }
        list={{
          columns: 'columns-1',
          type: 'circle',
          data: [
            {
              text: (
                <>
                  <strong>Phase 1: </strong>an open-label phase of 4 to 6 weeks
                  in which patients were converted to oral aripiprazole (n=633)
                </>
              ),
            },
            {
              text: (
                <>
                  <strong>Phase 2: </strong>an open-label phase of 4 to 12 weeks
                  in which patients were stabilized on oral aripiprazole 10 mg
                  to 30 mg once daily (n=710)
                </>
              ),
            },
            {
              text: (
                <>
                  <strong>Phase 3: </strong>a single-blind phase of 12 to 36
                  weeks in which patients were converted to and stabilized on
                  <br />
                  ABILIFY MAINTENA<sup>®</sup> (aripiprazole) 400 mg (n=576)
                  <List
                    content={{
                      columns: 'columns-1',
                      type: 'rectangle',
                      data: [
                        {
                          text: (
                            <>
                              Patients continued on oral aripiprazole 10 mg to
                              20 mg for the first 14 days following the initial
                              ABILIFY MAINTENA dose
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
                  <strong>Phase 4: </strong>a double-blind, placebo-controlled,
                  randomized phase for up to 52 weeks in which patients received
                  either intramuscular ABILIFY MAINTENA (n=269) or placebo
                  intramuscular depot (n=134) once monthly
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
                <em>
                  <sup>*</sup>Diagnostic and Statistical Manual of Mental
                  Disorders, Fourth Edition, Text Revision (DSM-IV-TR)
                </em>
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
                Kane JM, et al. <em>J Clin Psychiatry. 2012;73(5):617-624 </em>.
              </span>
            ),
          },
        ],
      }}
    />
  ),
};

export const StudyDesign2Args = {
  customClass: `${blockName}_study-design`,
  link: <Button text='Study Design' custom='button__type-b' />,
  children: (
    <>
      <Header custom='mb-18'>
        Study design<sup>1</sup>
      </Header>
      <Text
        title={
          <>
            52-Week, Multiphase Maintenance Study<sup>1</sup>
          </>
        }
        innerText={
          <>
            A 52-week, placebo-controlled maintenance study that evaluated the
            time to recurrence of any mood episode in
            <br /> adult patients with bipolar I disorder.
          </>
        }
      />
      <Text
        title={
          <>
            Patient Population<sup>1</sup>
          </>
        }
        list={{
          columns: 'columns-1',
          type: 'circle',
          data: [
            {
              text: (
                <>
                  Patients with bipolar I disorder with a history of ≥1 manic or
                  mixed episode(s) that required hospitalization or treatment
                  with either a mood stabilizer or antipsychotic
                </>
              ),
            },
            {
              text: (
                <>
                  Baseline patient characteristics included patients currently
                  experiencing a manic episode and ≥20 YMRS total score
                </>
              ),
            },
            {
              text: (
                <>
                  Patients were excluded if they experienced ≥9 episodes (rapid
                  cycling) in the past year
                </>
              ),
            },
          ],
        }}
      />
      <Text
        title={
          <>
            4 Phases of Study<sup>1</sup>
          </>
        }
        list={{
          columns: 'columns-1',
          type: 'circle',
          data: [
            {
              text: (
                <>
                  <strong>Phase 1: </strong>an open-label phase of 4 to 6 weeks
                  in which patients were converted to oral aripiprazole (n=466)
                </>
              ),
            },
            {
              text: (
                <>
                  <strong>Phase 2: </strong>an open-label phase of 2 to 8 weeks
                  in which patients were stabilized on oral aripiprazole 15 mg
                  to 30 mg once daily (n=632)
                  <List
                    content={{
                      columns: 'columns-1',
                      type: 'rectangle',
                      data: [
                        {
                          text: (
                            <>
                              This phase included patients who entered the trial
                              on oral aripiprazole
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
                  <strong>Phase 3: </strong>a single-blind phase of 12 to 28
                  weeks in which patients were converted to and stabilized on
                  ABILIFY MAINTENA<sup>®</sup> (aripiprazole) 400 mg (n=425)
                  <List
                    content={{
                      columns: 'columns-1',
                      type: 'rectangle',
                      data: [
                        {
                          text: (
                            <>
                              Patients continued on oral aripiprazole 10 mg to
                              20 mg for the first 14 days following the initial
                              <br />
                              ABILIFY MAINTENA dose
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
                  <strong>Phase 4: </strong>a double-blind, placebo-controlled,
                  randomized phase for up to 52 weeks in which patients received
                  either intramuscular ABILIFY MAINTENA (n=133) or placebo
                  intramuscular depot (n=133) once monthly
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
            innerText: <span>YMRS=Young Mania Rating Scale.</span>,
          },
        ],
      }}
      references={{
        custom: 'mt-5',
        data: [
          {
            text: (
              <span>
                Calabrese JR, et al.
                <em>JJ Clin Psychiatry.</em>2017;78(3):324-331.
              </span>
            ),
          },
        ],
      }}
    />
  ),
};
