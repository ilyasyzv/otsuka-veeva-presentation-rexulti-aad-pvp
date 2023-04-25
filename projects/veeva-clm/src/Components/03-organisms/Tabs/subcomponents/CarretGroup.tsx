import React from 'react';
import style from './CarretGroup.module.scss';
import Carret from './Carret';

export type CarretGroupProps = {
  carretSize: number;
  activeIndex: number;
  animationSpeed?: number;
  children: React.ReactNode;
  translateTabsX?: number;
};

export const CarretGroup: React.FC<CarretGroupProps> = ({
  carretSize,
  activeIndex,
  animationSpeed = 0.5,
  children,
  translateTabsX,
}) => {
  const leftIndent = carretSize * activeIndex;

  return (
    <div
      className={style.tabCarretWrapper}
      style={{
        transform: translateTabsX ? `translateX(${translateTabsX}px)` : 'none',
      }}
    >
      <Carret
        carretSize={carretSize}
        leftIndent={leftIndent}
        animationSpeed={animationSpeed}
        children={children}
      />
    </div>
  );
};
export default CarretGroup;
