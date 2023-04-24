import React from 'react';
import { References } from './References';

export default {
  title: 'CLM/Atoms/References',
  component: References,
};

const Template = (args) => <References {...args} />;

export const Default = Template.bind({});

Default.args = {
  custom: 'mw-563',
  references: [
    {
      text: (
        <span>
          Jones E, et al. <strong>J Alzheimers Dis.</strong> 2021;83(1):89-101.
        </span>
      ),
    },
  ],
};
