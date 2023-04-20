import React from 'react';
import { Meta, Story } from '@storybook/react';
import Popup, { PopupProps } from './Popup';

export default {
  title: 'CLM/Atoms/Popup',
  component: Popup,
} as Meta;

const Template: Story<PopupProps> = (args) => <Popup {...args} />;

export const Default = Template.bind({});
Default.args = {
  link: 'Open popup',
  content: 'Popup content',
};
