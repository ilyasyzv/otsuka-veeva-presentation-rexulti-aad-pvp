import React from 'react';
import Image7Day from './img/12_Insights_7_Day.png?format=webp';
import Image30Day from './img/12_Insights_30_Day.png?format=webp';
import Image60Day from './img/12_Insights_60_Day.png?format=webp';

export const tabsContent = [
  {
    id: 1,
    title: '7 Day',
    content: (
      <>
        <img src={Image7Day} width={375} />
      </>
    ),
  },
  {
    id: 2,
    title: '30 Day',
    content: (
      <>
        <img src={Image30Day} width={375} />
      </>
    ),
  },
  {
    id: 3,
    title: '60 Day',
    content: (
      <>
        <img src={Image60Day} width={375} />
      </>
    ),
  },
];
export default tabsContent;
