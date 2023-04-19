import React from 'react';
import { Button } from './button';

export default {
  title: 'CLM/Atoms/Button',
  component: Button,
};

const TemplateDefault = (args) => <Button {...args} />;

const Template = () => (
  <>
    <p>Active State:</p>
    <Button
      text='Patient Setting and Severity'
      custom='button__type-a--active'
    />
    <p>Disabled State:</p>
    <Button
      text='Patient Setting and Severity'
      custom='button__type-a--active button__type-a--disabled'
    />
  </>
);

export const TypeA = Template.bind({});

export const Active = TemplateDefault.bind({});
Active.args = {
  text: 'Patient Setting and Severity',
  custom: 'button__type-a--active',
};

export const Disabled = TemplateDefault.bind({});
Disabled.args = {
  text: 'Patient Setting and Severity',
  custom: 'button__type-a--active button__type-a--disabled',
};
