import React from 'react';
import CollapsibleGroup, { CollapsibleElement } from './CollpsibleGroup';
import DiagramPrimary from './img/Diagram-section2-8.png?format=webp';
import DiagramSecondary from './img/diagram-section2-24.png?format=webp';

export default {
  title: 'CLM/Organisms/CollapsibleGroup',
  component: CollapsibleGroup,
};

const items = [
  {
    title: {
      primary: 'Primary endpoint:',
      secondary: 'Mean change in PANSS total score from baseline* to Week 10',
    },
    image: <img src={DiagramPrimary} alt='DiagramPrimary' width='760' />,
  },
  {
    title: {
      primary: 'Key secondary endpoint:',
      secondary:
        'Mean change in CGI-S score from baseline to endpoint at Week 12',
    },
    image: <img src={DiagramSecondary} alt='DiagramSecondary' width='760' />,
  },
];

const Template = () => {
  return (
    <CollapsibleGroup>
      {items.map((item) => (
        <CollapsibleElement title={item.title}>{item.image}</CollapsibleElement>
      ))}
    </CollapsibleGroup>
  );
};

const TemplateOne = () => {
  return (
    <CollapsibleGroup openItemIndex={1}>
      {items.map((item) => (
        <CollapsibleElement title={item.title}>{item.image}</CollapsibleElement>
      ))}
    </CollapsibleGroup>
  );
};
export const Default = Template.bind({});
export const DefaultOne = TemplateOne.bind({});
