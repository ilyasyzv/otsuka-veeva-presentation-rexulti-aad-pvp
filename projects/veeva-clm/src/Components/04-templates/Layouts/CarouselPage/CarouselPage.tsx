import React, { useState, useEffect } from 'react';
import './CarouselPage.scss';

type TCarouselPage = {
  children: React.ReactNode;
};

const CarouselPage = ({ children }: TCarouselPage) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [numSlides, setNumSlides] = useState(0);
  const sliderRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    setNumSlides(React.Children.count(children));
    setSliderWidth(sliderRef.current?.clientWidth || 0);
  }, [children]);

  const handlePrevClick = () => {
    setActiveIndex((activeIndex - 1 + numSlides) % numSlides);
  };

  const handleNextClick = () => {
    setActiveIndex((activeIndex + 1) % numSlides);
  };

  return (
    <div className='carousel-page' ref={sliderRef}>
      <div
        className='slider-items'
        style={{
          transform: `translateX(-${activeIndex * (100 / numSlides)}%)`,
          width: `${numSlides * 100}%`,
        }}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return child;
          }
          return null;
        })}
      </div>
      <div className='slider-dots'>
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className={`slider-dot ${activeIndex === index ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
      <div className='slider-arrows'>
        <button
          type='button'
          className='slider-arrow left'
          onClick={handlePrevClick}
        >
          Prev
        </button>
        <button
          type='button'
          className='slider-arrow right'
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CarouselPage;
