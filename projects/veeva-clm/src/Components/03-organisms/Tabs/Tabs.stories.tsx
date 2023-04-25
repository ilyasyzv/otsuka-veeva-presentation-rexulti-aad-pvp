import React from 'react';
import Tabs from '@organisms/Tabs/Tabs';
import Tab from '@organisms/Tabs/Tab';

export default {
  title: 'CLM/Organisms/Tabs',
  component: Tabs,
};

const Template = () => {
  return (
    <Tabs translateTabsX={37}>
      <Tab title='CMAI Overview'>
        <p>Content tab 1</p>
      </Tab>
      <Tab title='CMAI Items'>
        <p>Content tab 2</p>
      </Tab>
    </Tabs>
  );
};

export const Default = Template.bind({});
