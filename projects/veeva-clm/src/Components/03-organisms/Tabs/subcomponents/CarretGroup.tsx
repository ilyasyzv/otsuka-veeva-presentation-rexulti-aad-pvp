import React from 'react';
import style from './CarretGroup.module.scss';
import Carret from './Carret';

export type CarretGroupProps = {
  carretSize: number;
  activeIndex: number;
  animationSpeed?: number;
  children: React.ReactNode;
  childrenCount: number;
  translateTabsX?: number;
  tabWidth?: number;
};

export const CarretGroup: React.FC<CarretGroupProps> = ({
  carretSize,
  activeIndex,
  animationSpeed = 0.5,
  children,
  childrenCount,
  translateTabsX,
  tabWidth,
}) => {
  const carretWidth = tabWidth || carretSize;
  const leftIndent = carretWidth * activeIndex;

  return (
    <div
      className={style.tabCarretWrapper}
      style={{
        width: tabWidth && `${tabWidth * childrenCount}px`,
        transform: translateTabsX ? `translateX(${translateTabsX}px)` : 'none',
      }}
    >
      <Carret
        carretSize={carretWidth}
        leftIndent={leftIndent}
        animationSpeed={animationSpeed}
        children={children}
      />
    </div>
  );
};
export default CarretGroup;
