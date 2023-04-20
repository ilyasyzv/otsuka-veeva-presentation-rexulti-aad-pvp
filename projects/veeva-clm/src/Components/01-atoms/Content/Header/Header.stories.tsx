import React from 'react';
import { Header } from './Header';

export default {
  title: 'CLM/Atoms/Header',
  component: Header,
};

const Template = () => (
  <>
    <Header type='h1'>Header h1</Header>
    <Header type='h2'>Header h2</Header>
    <Header type='h3'>Header h3</Header>
  </>
);
export const Default = Template.bind({});
