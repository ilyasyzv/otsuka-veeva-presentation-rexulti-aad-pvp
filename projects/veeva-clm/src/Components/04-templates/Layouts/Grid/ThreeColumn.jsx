import React from 'react';
import './ThreeColumns.scss';

export const ThreeSplitScreen = ({
  left: Left,
  middle: Middle,
  right: Right,
  leftsize: LeftSize,
  middlesize: MiddleSize,
  rightsize: RightSize,
  className = '',
}) => {
  const isSizeSet =
    Number.isInteger(LeftSize) &&
    Number.isInteger(RightSize) &&
    Number.isInteger(MiddleSize);
  const leftColumn = isSizeSet ? { flexBasis: `${LeftSize}%` } : {};
  const middleColumn = isSizeSet ? { flexBasis: `${MiddleSize}%` } : {};
  const rightColumn = isSizeSet ? { flexBasis: `${RightSize}%` } : {};
  const layoutClassName = ['three-columns'];

  layoutClassName.push(className);

  return (
    <div className={layoutClassName.join(' ')}>
      <div className='three-columns__left-pane' style={leftColumn}>
        <Left />
      </div>
      <div className='three-columns__middle-pane' style={middleColumn}>
        <Middle />
      </div>
      <div className='three-columns__right-pane' style={rightColumn}>
        <Right />
      </div>
    </div>
  );
};

export default ThreeSplitScreen;
