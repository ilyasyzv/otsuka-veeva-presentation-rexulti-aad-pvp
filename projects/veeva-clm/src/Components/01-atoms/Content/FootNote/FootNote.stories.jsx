import React from 'react';
import { FootNote } from './FootNote';

export default {
  title: 'CLM/Atoms/FootNote',
  component: FootNote,
};

const Template = (args) => (
  <FootNote { ...args } />
);

export const Default = Template.bind({});

Default.args = {
  footnotes: [
    {
      innerText: <span>C<sub>min</sub>=minimum aripiprazole plasma concentration.</span>,
    },
  ]
}