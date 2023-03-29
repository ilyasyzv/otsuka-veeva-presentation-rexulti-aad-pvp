import React from 'react';
import { Paragraph } from './Paragraph';

export default {
  title: 'CLM/Atoms/Paragraph',
  component: Paragraph,
};

const Template01 = () => (
  <>
    <Paragraph color='green' size='small' weight='bold'>
      This is green, small and bold paragraph.
    </Paragraph>
    <Paragraph color='orange' size='small' weight='bold'>
      This is blue-navy, small and bold paragraph.
    </Paragraph>
    <Paragraph color='orange'>This is regular blue-navy paragraph.</Paragraph>
    <Paragraph color='green' weight='bold'>
      This is bold green paragraph.
    </Paragraph>
    <Paragraph color='black' weight='bold'>
      This is bold black paragraph.
    </Paragraph>
  </>
);
export const ColorWeightParagraph = Template01.bind({});

const Template02 = () => (
  <>
    <Paragraph size='small'>This is small paragraph.</Paragraph>
    <Paragraph>This is normal paragraph.</Paragraph>
    <Paragraph size='large'>This is large paragraph.</Paragraph>
    <Paragraph size='x-large'>This is x-large paragraph.</Paragraph>
    <Paragraph size='xx-large'>This is xx-large paragraph.</Paragraph>
  </>
);
export const DifferentSizeParagraph = Template02.bind({});

const Template03 = () => (
  <>
    <Paragraph color='orange' weight='bold'>
      This is green, small and bold paragraph.
    </Paragraph>
    <Paragraph>
      <strong>Bold text:</strong> This is some paragraph text.
    </Paragraph>
    <Paragraph>
      <strong>Paragraph Title:</strong>
      <br />
      This is paragraph text. This is paragraph text.
    </Paragraph>
    <Paragraph>
      “Happiness is the meaning and the purpose of life, the whole aim and end
      of human existence.” ― Aristotle
    </Paragraph>
    <Paragraph position='center'>This is centered paragraph.</Paragraph>
  </>
);
export const SeveralParagraphs = Template03.bind({});
