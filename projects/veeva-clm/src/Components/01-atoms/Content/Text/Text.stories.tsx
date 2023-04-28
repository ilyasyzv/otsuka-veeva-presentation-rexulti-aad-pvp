import React from 'react';
import List from '@atoms/Content/List/List';
import Text from './Text';

export default {
  title: 'CLM/Atoms/Text',
  parameters: {
    backgrounds: { default: 'dark' },
  },
  component: Text,
};

const Template = () => (
  <>
    <Text
      title='52-Week, Multiphase Maintenance Study'
      supText='1'
      innerText='A 52 week, placebo-controlled maintenance study evaluated the time to relapse for
      adult patients living with schizophrenia'
    />
    <Text
      title='Patient Population'
      supText='1'
      innerText={
        <>
          Patients living with schizophrenia diagnosed ≥ 3 years with a history
          of symptom exacerbation or relapse when not receiving antipsychotic
          treatment.<sup>*</sup>
        </>
      }
    />
    <Text
      title='4 Phases of Study'
      supText='1,2'
      list={{
        content: {
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
                  ABILIFY MAINTENA® (aripiprazole) 400 mg (n=576)
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
        },
      }}
    />
  </>
);

export const Default = Template.bind({});
