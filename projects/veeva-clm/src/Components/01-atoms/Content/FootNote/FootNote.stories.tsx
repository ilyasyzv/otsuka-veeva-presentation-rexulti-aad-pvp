import React from 'react';
import { FootNote } from './FootNote';

export default {
  title: 'CLM/Atoms/FootNote',
  component: FootNote,
};

const Template = (args) => <FootNote {...args} />;

export const Default = Template.bind({});

Default.args = {
  custom: 'mw-610',
  footnotes: [
    {
      innerText: `AAD, agitation associated with Alzheimer’s dementia; CMAI,
      Cohen-Mansfield Agitation Inventory; FDA, US Food and Drug
      Administration.`,
    },
  ],
};
