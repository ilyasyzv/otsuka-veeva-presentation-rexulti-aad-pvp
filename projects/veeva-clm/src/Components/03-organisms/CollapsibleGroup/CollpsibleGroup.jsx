import React, { useState } from 'react';
import './CollapsibleGroup.scss';

const classNames = require('classnames');

export const CollapsibleGroup = ({ children, openItemIndex = 0 }) => {
  const [openItem, setOpenItem] = useState(openItemIndex);
  const handleElementClick = (index) => {
    setOpenItem(openItem === index ? null : index);
  };
  const items = React.Children.map(children, (child, index) =>
    React.cloneElement(child, {
      isOpen: openItem === index,
      onToggle: () => handleElementClick(index),
    }),
  );
  return <div className='collapsibleGroup'>{items}</div>;
};

export const CollapsibleElement = ({ title, children, isOpen, onToggle }) => {
  const { primary, secondary } = title;
  return (
    <div className='CollapsibleElement'>
      <div
        className={classNames('title', isOpen ? 'active' : '')}
        onClick={onToggle}
      >
        <span className='primary'>{primary}</span>
        &nbsp;<span>{secondary}</span>
      </div>
      {isOpen && <div className='element-content'>{children}</div>}
    </div>
  );
};
export default CollapsibleGroup;
