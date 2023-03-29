import React from 'react';
import { FootNote } from './FootNote';
import { SupLeft } from '../SupLeft/SupLeft';

export default {
  title: 'CLM/Atoms/FootNote',
  component: FootNote,
};

const Template = () => (
  <FootNote>
    <p>
      <SupLeft text='a' />
      This is an example text.
    </p>
  </FootNote>
);

export const Default = Template.bind({});
