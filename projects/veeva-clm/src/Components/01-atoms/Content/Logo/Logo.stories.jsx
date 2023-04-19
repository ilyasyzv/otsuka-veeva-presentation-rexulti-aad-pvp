import React from 'react';
import { Logo } from './Logo';
import AsimtufiiLogo from '@/assets/asimtufii-logo.png'

export default {
  title: 'CLM/Atoms/Logo',
  component: Logo,
};

const Template = (args) => (
  <Logo { ...args } />
);

export const Default = Template.bind({});

Default.args = {
  image: <img src={ AsimtufiiLogo } alt='asimtufii-logo' width='142.5' />
}