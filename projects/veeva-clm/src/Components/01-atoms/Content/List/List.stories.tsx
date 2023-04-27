import React from 'react';
import { List } from './List';

export default {
  title: 'CLM/Atoms/List',
  component: List,
};

const Template = () => (
  <List
    content={{
      columns: 'columns-1',
      type: 'circle',
      data: [
        {
          text: (
            <>
              <strong>Phase 1: </strong>an open-label phase of 4 to 6 weeks in
              which patients were converted to oral aripiprazole (n=466)
            </>
          ),
        },
        {
          text: (
            <>
              <strong>Phase 2: </strong>an open-label phase of 2 to 8 weeks in
              which patients were stabilized on oral aripiprazole 15 mg to 30 mg
              once daily (n=632)
              <List
                content={{
                  columns: 'columns-1',
                  type: 'rectangle',
                  data: [
                    {
                      text: (
                        <>
                          This phase included patients who entered the trial on
                          oral aripiprazole
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
              <strong>Phase 3: </strong>a single-blind phase of 12 to 28 weeks
              in which patients were converted to and stabilized on ABILIFY
              MAINTENA® (aripiprazole) 400 mg (n=425)
              <List
                content={{
                  columns: 'columns-1',
                  type: 'rectangle',
                  data: [
                    {
                      text: (
                        <>
                          Patients continued on oral aripiprazole 10 mg to 20 mg
                          for the first 14 days following the initial
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
);

export const Default = Template.bind({});
