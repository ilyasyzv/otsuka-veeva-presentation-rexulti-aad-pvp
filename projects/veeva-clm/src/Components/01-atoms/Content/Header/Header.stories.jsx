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
    <Header type='h1' color='orange-dark'>
      This is orange-dark h1
    </Header>
    <Header>This is default header</Header>
    <Header color='white' bgcolor='orange-dark'>
      This is header with background
    </Header>
  </>
);
export const Default = Template.bind({});
