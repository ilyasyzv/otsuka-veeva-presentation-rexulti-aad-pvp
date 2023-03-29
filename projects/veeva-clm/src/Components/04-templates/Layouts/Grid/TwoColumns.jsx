import React from 'react';
import './TwoColumns.scss';

export const SplitScreen = ({
  left: Left,
  right: Right,
  leftsize: LeftSize,
  rightsize: RightSize,
  className = '',
}) => {
  const isSizeSet = Number.isInteger(LeftSize) && Number.isInteger(RightSize);
  const leftColumn = isSizeSet ? { flexBasis: `${LeftSize}%` } : {};
  const rightColumn = isSizeSet ? { flexBasis: `${RightSize}%` } : {};
  const layoutClassName = ['two-columns'];

  layoutClassName.push(className);

  return (
    <div className={layoutClassName.join(' ')}>
      <div className='two-columns__left-pane' style={leftColumn}>
        <Left />
      </div>
      <div className='two-columns__right-pane' style={rightColumn}>
        <Right />
      </div>
    </div>
  );
};

export default SplitScreen;
