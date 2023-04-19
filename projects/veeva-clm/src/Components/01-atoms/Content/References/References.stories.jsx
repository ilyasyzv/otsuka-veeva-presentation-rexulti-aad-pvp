import React from 'react';
import { References } from './References';

export default {
  title: 'CLM/Atoms/References',
  component: References,
};

const Template = (args) => (
  <References { ...args } />
);

export const Default = Template.bind({});

Default.args = {
  references: [
    {
      text: <span>Harlin M, et al <em>CNS Drugs.</em> 2023;10.1007/s40263-023-00996-8.</span>,
    }
  ]
}