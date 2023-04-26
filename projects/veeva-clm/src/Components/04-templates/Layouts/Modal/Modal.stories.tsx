import React from 'react';
import { Modal } from '@templates/Layouts';

export default {
  title: 'CLM/Templates/Modal',
  component: Modal,
};

const Template = () => (
  <Modal>
    <p>Some content</p>,
  </Modal>
);

export const Default = Template.bind({});
