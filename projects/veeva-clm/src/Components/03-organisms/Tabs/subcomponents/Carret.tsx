import React from 'react';
import style from './Carret.module.scss';

export type CarretProps = {
  carretSize: number;
  leftIndent: number;
  animationSpeed: number;
  children: React.ReactNode;
};

export const Carret: React.FC<CarretProps> = ({
  carretSize,
  leftIndent,
  animationSpeed,
  children,
}) => {
  const carretStyle = {
    width: `${carretSize}px`,
    transform: `translateX(${leftIndent}px)`,
    transition: `${animationSpeed}s`,
  };
  return (
    <div className={style.activeTabCarret} style={carretStyle}>
      <div className={style.left} />
      <div className={style.center} />
      <div className={style.right} />
      <div className='container'>{children}</div>
    </div>
  );
};
export default Carret;
