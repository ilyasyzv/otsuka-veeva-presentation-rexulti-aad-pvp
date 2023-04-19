import React from 'react';
import {Button} from './button';

export default {
  title: 'CLM/Atoms/Button',
  component: Button,
};

const TemplateDefault = (args) => <Button {...args}/>;

const Template = () => (
    <>
      <p>Default State:</p>
      <Button text='Model Estimates' custom={'button__type-a'}/>
      <p>Active State 1:</p>
      <Button text='Model Estimates' custom={'button__type-a--active'}/>
      <p>Active State 2:</p>
      <Button text='Model Estimates'
              custom={'button__type-a--active button__type-a--active-right'}/>
    </>
);

const TemplateС = () => (
    <>
      <p>Default State:</p>
      <Button text='Continue' custom={'button__type-c'}/>
      <p className={'mt-20 mb-5'}>Disabled State:</p>
      <Button text='Continue' custom={'button__type-c button__type-c--disabled'}/>
      <p className={'mt-20 mb-5'}>Large:</p>
      <Button text='Short-term Study: Schizophrenia' custom={'button__type-c button__type-c-large'}/>
      <p className={'mt-20 mb-5'}>Large Blue:</p>
      <Button text='Long-term Study: Schizophrenia' custom={'button__type-c button__type-c-large button__type-c-large-blue'}/>
      <p className={'mt-20 mb-5'}>Large Gray:</p>
      <Button text='Long-term Study: Bipolar I Disorder' custom={'button__type-c button__type-c-large button__type-c-large-gray'}/>
      <p className={'mt-20 mb-5'}>Large Dark:</p>
      <Button text='Long-term Study: Bipolar I Disorder' custom={'button__type-c button__type-c-large button__type-c-large-dark'}/>
    </>
);

export const TypeA = Template.bind({});
export const TypeC = TemplateС.bind({});

export const Default = TemplateDefault.bind({});
Default.args = {
  text: 'Default',
};

export const TypeB = {
  args: {
    ...TypeA.args,
    custom: 'button__type-b',
    text: 'Adverse Reactions Table',
  },
};

