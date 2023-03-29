import React from 'react';
import { SupLeft } from './SupLeft';

export default {
  title: 'CLM/Atoms/SupLeft',
  component: SupLeft,
};

const Template = () => (
  <>
    <SupLeft text='a' />
    This is an example text.
  </>
);

export const Default = Template.bind({});
