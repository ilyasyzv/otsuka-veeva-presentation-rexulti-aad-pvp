import React from 'react';
import { SafetyInfo } from './SafetyInfo';

export default {
  title: 'CLM/Atoms/SafetyInfo',
  component: SafetyInfo,
};

const Template = (args) => <SafetyInfo {...args} />;

export const Default = Template.bind({});

Default.args = {
  custom: 'mw-636',
  safetyInfo: [
    {
      text: (
        <span
          style={{ display: 'inline-block', marginBottom: '5px' }}
          className='highlighted'
        >
          Please see{' '}
          <a href='/' className='green-200'>
            IMPORTANT SAFETY INFORMATION
          </a>{' '}
          in this presentation.
        </span>
      ),
    },
    {
      text: 'FOR USE WITH FORMULARY DECISION-MAKERS ONLY. DO NOT DUPLICATE OR DISTRIBUTE.',
    },
  ],
};
