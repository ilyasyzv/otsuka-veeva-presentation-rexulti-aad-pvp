import React from 'react';
import { HorizontalLine } from './HorizontalLine';

export default {
  title: 'CLM/Atoms/HorizontalLine',
  component: HorizontalLine,
};

const Template = () => (
  <>
    <HorizontalLine color='orange-dark' />
    <HorizontalLine color='black' />
    <HorizontalLine color='orange' />
  </>
);
export const Default = Template.bind({});
