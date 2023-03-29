import React, { useState } from 'react';
import Lottie from 'react-lottie-player';
import lottieJson from '../../../assets/lottie-animation/energy-level-animation.json';
import Button from '@atoms/Content/Button/button';
import Paragraph from '@atoms/Content/Paragraph/Paragraph';
import Link from '@organisms/Routing/Link/Link';
import './style.scss';
import minusIcon from '../../../assets/icons/minus.svg';
import plusIcon from '../../../assets/icons/plus.svg';

const initialSteps = [
  {
    id: 1,
    active: true,
    selected: false,
  },
  {
    id: 2,
    active: true,
    selected: false,
  },
  {
    id: 3,
    active: true,
    selected: true,
    title: 'Average',
    tooltip: {
      right: '-45%',
      arrowLeft: '40%',
    },
  },
  {
    id: 4,
    active: false,
    selected: false,
  },
  {
    id: 5,
    active: false,
    selected: false,
  },
];

const EnergyLevel = () => {
  const [energyLevelSteps, setEnergyLevelSteps] = useState(initialSteps);

  return (
    <>
      <div className='content-container'>
        <h1 className='title'>
          What's your energy <br /> level today?
        </h1>
        <Lottie
          loop
          play
          animationData={lottieJson}
          rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
        />
        <Paragraph color='gray-darker' custom='description'>
          I am feeling able to accomplish tasks and take care of myself today.
        </Paragraph>
        <div className='slider-container'>
          <div className='button-container'>
            <button>
              <img src={minusIcon} alt='Minus' />
            </button>
          </div>
          <div className='slider'>
            {energyLevelSteps.map((step) => (
              <div
                key={step.id}
                className={`slider-item ${step.active ? 'active' : ''} ${
                  step.selected ? 'selected' : ''
                }`}
              >
                <span
                  className='tooltip-info'
                  style={{
                    '--tooltip-right': step?.tooltip?.right,
                    '--arrow-left': step?.tooltip?.arrowLeft,
                  }}
                >
                  {step?.title}
                </span>
              </div>
            ))}
          </div>
          <div className='button-container'>
            <button>
              <img src={plusIcon} alt='Plus' />
            </button>
          </div>
        </div>
        <div className='submit-container'>
          <Link custom='button submit' to={'08_Activity_short'}>
            {' '}
            Save and Continue{' '}
          </Link>
        </div>
      </div>
    </>
  );
};

export default EnergyLevel;
