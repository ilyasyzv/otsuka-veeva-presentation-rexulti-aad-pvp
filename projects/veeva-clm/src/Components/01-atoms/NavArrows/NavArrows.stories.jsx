import React from 'react';
import styled from 'styled-components';
import { NavArrows } from './NavArrows';

export default {
  title: 'CLM/Atoms/NavArrows',
  component: NavArrows,
};

const BgColor = styled.div`
  background-color: #000;
`;

const Template = () => (
  <BgColor>
    <NavArrows />
  </BgColor>
);

export const Default = Template.bind({});
