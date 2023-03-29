import React from 'react';
import { List } from './List';

export default {
  title: 'CLM/Atoms/List',
  component: List,
};

const Template = () => (
  <List
    content={{
      columns: 'columns-2',
      type: 'triangle',
      marker_color: 'green',
      data: [
        {
          text: (
            <>
              This is an <strong>HTML</strong> string.
            </>
          ),
        },
        {
          text: "I'm a second text",
        },
        {
          text: "I'm a third text",
        },
        {
          text: (
            <>
              And I'm 4<sup>th</sup> text.
            </>
          ),
        },
      ],
    }}
  />
);

export const Default = Template.bind({});
