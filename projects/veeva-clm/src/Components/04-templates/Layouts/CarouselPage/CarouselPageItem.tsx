import React from 'react';
import './CarouselPageItem.scss';

export type SliderItemProps = {
  children: React.ReactNode;
};

const CarouselPageItem = ({ children }: SliderItemProps) => {
  return (
    <div className='slider-item'>
      <div className='content'>{children}</div>
    </div>
  );
};

export default CarouselPageItem;
