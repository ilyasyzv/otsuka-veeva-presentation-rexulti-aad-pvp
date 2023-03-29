import React from 'react';

import { Carousel } from './Carousel';

export default {
  title: 'CLM/Templates/Carousel',
  component: Carousel,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const slides = [
  { content: 'one', title: 'onecontent' },
  { content: 'two', title: 'twocontent' },
  { content: 'three', title: 'threecontent' },
];

const Template = (args) => <Carousel {...args} slides={slides} />;

export const Default = Template.bind({});
