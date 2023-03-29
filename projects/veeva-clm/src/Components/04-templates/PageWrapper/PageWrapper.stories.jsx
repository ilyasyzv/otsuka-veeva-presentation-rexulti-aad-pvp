import React from 'react';
import { PageWrapper } from './PageWrapper';
import ExampleVerticalImage from './img/example_vertical.png';
import ExampleHorizontalImage from './img/example_horizontal.png';

export default {
  title: 'CLM/Templates/PageWrapper',
  component: PageWrapper,
};

const Vertical = () => (
  <PageWrapper type={'vertical'}>
    <img className='img-test' src={ExampleVerticalImage} alt={'content'} />
  </PageWrapper>
);

export const PhoneVertical = Vertical.bind({});

const Horizontal = () => (
  <PageWrapper type={'horizontal'}>
    <img className='img-test' src={ExampleHorizontalImage} alt={'content'} />
  </PageWrapper>
);

export const PhoneHorizontal = Horizontal.bind({});
