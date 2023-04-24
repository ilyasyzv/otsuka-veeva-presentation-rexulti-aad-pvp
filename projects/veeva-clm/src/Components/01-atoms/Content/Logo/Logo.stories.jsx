import React from 'react';
import { Logo } from './Logo';
import RexultiLogo from '@/assets/rexulti-logo.png';

export default {
  title: 'CLM/Atoms/Logo',
  component: Logo,
};

const Template = (args) => <Logo {...args} />;

export const Default = Template.bind({});

Default.args = {
  image: <img src={RexultiLogo} alt='rexulti-logo' width='142.5' />,
};
