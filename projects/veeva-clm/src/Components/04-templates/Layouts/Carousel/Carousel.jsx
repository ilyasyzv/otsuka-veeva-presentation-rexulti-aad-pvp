import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import { Col, Container } from "./UI/Layout/Grid";
import { LeftSlide, RightSlide } from './Arrow';

import './Carousel.scss';

const CarouselLeftArrow = ({ onClick }) => (
  <a className='carousel-arrow-left' onClick={onClick}>
    <LeftSlide color='white' />
  </a>
);

CarouselLeftArrow.propTypes = {
  onClick: PropTypes.func,
};

const CarouselRightArrow = ({ onClick }) => (
  <a className='carousel-arrow-right' onClick={onClick}>
    <RightSlide color='white' />
  </a>
);

CarouselRightArrow.propTypes = {
  onClick: PropTypes.func,
};

const CarouselSlide = ({ activeIndex, index, slide }) => {
  const classname =
    index === activeIndex
      ? ('carousel-slide', 'carousel-slide-active')
      : 'carousel-slide';
  return (
    <li className={classname}>
      <div className='text'>
        <p className='white'>{slide.content}</p>
      </div>
      <div className='rating'>
        <p className='white'>{slide.title}</p>
      </div>
    </li>
  );
};

CarouselSlide.propTypes = {
  activeIndex: PropTypes.number,
  index: PropTypes.number,
  slide: PropTypes.object,
};

export class Carousel extends Component {
  state = {
    activeIndex: 0,
  };

  componentDidMount() {
    const intervalId = setInterval(this.nextSlide, 5000);

    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  goToSlide = (index) => {
    this.setState({
      activeIndex: index,
    });
  };

  prevSlide = () => {
    let index = this.state.activeIndex;
    const slidesLength = this.props.slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;
    this.setState({
      activeIndex: index,
    });
  };

  nextSlide = () => {
    let index = this.state.activeIndex;
    const { slides } = this.props;
    const slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;
    this.setState({
      activeIndex: index,
    });
  };

  goToNextSlide = (e) => {
    e.preventDefault();
    clearInterval(this.state.intervalId);
    this.nextSlide();
    const intervalId = setInterval(this.nextSlide, 5000);

    this.setState({ intervalId });
  };

  goToPrevSlide = (e) => {
    e.preventDefault();
    clearInterval(this.state.intervalId);
    this.prevSlide();
    const intervalId = setInterval(this.nextSlide, 5000);

    this.setState({ intervalId });
  };

  render() {
    const { slides } = this.props;

    if (!slides) {
      return null;
    }

    return (
      <div className='carousel-wrapper'>
        <CarouselLeftArrow onClick={(e) => this.goToPrevSlide(e)} />
        {slides.map((slide, i) => (
          <CarouselSlide
            key={i}
            index={i}
            activeIndex={this.state.activeIndex}
            slide={slide}
          />
        ))}
        <CarouselRightArrow onClick={(e) => this.goToNextSlide(e)} />
      </div>
    );
  }
}

export default Carousel;
