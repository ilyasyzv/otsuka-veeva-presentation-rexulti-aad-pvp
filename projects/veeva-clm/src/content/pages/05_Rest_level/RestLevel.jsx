import React, { useRef, useEffect, useState, useReducer } from 'react';
import Lottie from 'react-lottie-player';
import Link from '@organisms/Routing/Link/Link';
import Paragraph from '@atoms/Content/Paragraph/Paragraph';
import './style.scss';
import minusIcon from '../../../assets/icons/minus.svg';
import plusIcon from '../../../assets/icons/plus.svg';
import lottieJson from '../../../assets/lottie-animation/sun-animation.json';

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
    title: 'Rested',
    tooltip: {
      right: '-30%',
      arrowLeft: '40%',
    },
  },
  {
    id: 4,
    active: false,
    selected: false,
    title: 'Fully Rested',
    tooltip: {
      right: '-50%',
      arrowLeft: '50%',
    },
  },
  {
    id: 5,
    active: false,
    selected: false,
    title: 'Fully Refreshed',
    tooltip: {
      right: '-50%',
      arrowLeft: '70%',
    },
  },
];

const restStepsReducer = (state, action) => {
  const selectedStepId = action.selectedId;
  const nextStepId = selectedStepId + 1;
  const previousStepId = selectedStepId - 1;

  switch (action.type) {
    case 'PLUS':
      if (selectedStepId === state.length) {
        return state;
      }
      return state.map((step) => {
        if (step.id < nextStepId) {
          return { ...step, active: true, selected: false };
        }
        if (step.id === nextStepId) {
          return { ...step, active: true, selected: true };
        }
        return { ...step, active: false, selected: false };
      });
    case 'MINUS':
      if (selectedStepId === 3) {
        return state;
      }
      return state.map((step) => {
        if (step.id > previousStepId) {
          return { ...step, active: false, selected: false };
        }
        if (step.id === previousStepId) {
          return { ...step, active: true, selected: true };
        }
        return { ...step, active: true, selected: false };
      });
    default:
      return state;
  }
};

const RestLevel = () => {
  const lottieRef = useRef();
  const [playAnimation, setPlayAnimation] = useState(true);
  const [restSteps, restStepsDispatch] = useReducer(
    restStepsReducer,
    initialSteps,
  );
  const [segmentFrom, setSegmentFrom] = useState(0);
  const [segmentTo, setSegmentTo] = useState(25);
  const segments = [segmentFrom, segmentTo];
  const [selectedSliderStep, setSelectedSliderStep] = useState(3);

  const handleMinus = () => {
    const [selectedStep] = restSteps.filter((step) => step.selected === true);
    restStepsDispatch({ type: 'MINUS', selectedId: selectedStep.id });
    setSelectedSliderStep(selectedStep.id);
  };

  const handlePlus = () => {
    const [selectedStep] = restSteps.filter((step) => step.selected === true);
    restStepsDispatch({ type: 'PLUS', selectedId: selectedStep.id });
    setSelectedSliderStep(selectedStep.id);
  };

  useEffect(() => {
    const [selectedStep] = restSteps.filter((step) => step.selected === true);
    switch (selectedStep.id) {
      case 3:
        if (selectedSliderStep < 4) {
          setSegmentFrom(0);
          setSegmentTo(30);
        } else {
          setSegmentFrom(40);
          setSegmentTo(30);
        }
        break;
      case 4:
        if (selectedSliderStep < 4) {
          setSegmentFrom(30);
          setSegmentTo(40);
        } else {
          setSegmentFrom(62);
          setSegmentTo(40);
        }
        break;
      case 5:
        setSegmentFrom(40);
        setSegmentTo(62);
        break;
      default:
        setSegmentFrom(0);
        setSegmentTo(30);
    }
  }, [restSteps]);

  return (
    <div className='content-container'>
      <div className='description-container'>
        <h1 className='title'>I woke up feeling...</h1>
        <Paragraph color='gray-darker'>
          Sleep is super important to your overall well-being! We want to know
          how you last slept.
        </Paragraph>
      </div>
      <Lottie
        loop={false}
        ref={lottieRef}
        play={playAnimation}
        animationData={lottieJson}
        rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
        segments={true && segments}
      />
      <div className='slider-container'>
        <div className='button-container'>
          <button onClick={handleMinus}>
            <img src={minusIcon} alt='Minus' />
          </button>
        </div>
        <div className='slider'>
          {restSteps.map((step) => (
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
                {step.title}
              </span>
            </div>
          ))}
        </div>
        <div className='button-container'>
          <button onClick={handlePlus}>
            <img src={plusIcon} alt='Plus' />
          </button>
        </div>
      </div>
      <div className='submit-container'>
        <Link to={'06_Home_check_in'} custom={'submit button'}>
          Submit Check-In
        </Link>
      </div>
    </div>
  );
};

export default RestLevel;
