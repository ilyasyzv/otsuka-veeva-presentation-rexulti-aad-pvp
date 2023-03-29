import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

import { STORAGE_KEYS } from '@/storage/storage';

import './AnimationEfficacy.scss';

const AnimationEfficacy = () => {
  const [animationPlay, setAnimationPlay] = useState(true);

  const lineGrey = useRef(null);
  const lineGreyText = useRef(null);
  const lineGreen = useRef(null);
  const lineGreenText = useRef(null);
  const lineGreenTextN = useRef(null);
  const rectangles = useRef<(HTMLDivElement | null)[]>([]);
  const triangles = useRef<(HTMLDivElement | null)[]>([]);
  const concat = useRef(null);
  const percent = useRef(null);

  useEffect(() => {
    const ls = sessionStorage.getItem(STORAGE_KEYS.animationR30);
    if (ls === '1') {
      setAnimationPlay(false);
    }
  }, []);

  const startAnimate = () => {
    gsap
      .timeline({})
      .addLabel('startLine1', 0)
      .addLabel('startLine2', 1)
      .addLabel('startYellowBanner', 2.3)

      // Line 1
      .to(lineGrey.current, { width: '100%', duration: 1 }, 'startLine1')
      .to(
        rectangles.current[0],
        { opacity: 1, duration: 0.5 },
        'startLine1+=0.3',
      )
      .to(
        rectangles.current[1],
        { opacity: 1, duration: 0.5 },
        'startLine1+=0.45',
      )
      .to(
        rectangles.current[2],
        { opacity: 1, duration: 0.5 },
        'startLine1+=0.6',
      )
      .to(
        rectangles.current[3],
        { opacity: 1, duration: 0.5 },
        'startLine1+=0.75',
      )
      .to(
        rectangles.current[4],
        { opacity: 1, duration: 0.5 },
        'startLine1+=0.9',
      )
      .to(
        rectangles.current[5],
        { opacity: 1, duration: 0.5 },
        'startLine1+=1.05',
      )
      .to(
        lineGreyText.current,
        { opacity: 1, duration: 0.5 },
        'startLine1+=1.1',
      )

      // Line 2
      .to(lineGreen.current, { width: '100%', duration: 1 }, 'startLine2')
      .to(
        triangles.current[0],
        { opacity: 1, duration: 0.5 },
        'startLine2+=0.3',
      )
      .to(
        triangles.current[1],
        { opacity: 1, duration: 0.5 },
        'startLine2+=0.45',
      )
      .to(
        triangles.current[2],
        { opacity: 1, duration: 0.5 },
        'startLine2+=0.6',
      )
      .to(
        triangles.current[3],
        { opacity: 1, duration: 0.5 },
        'startLine2+=0.75',
      )
      .to(
        triangles.current[4],
        { opacity: 1, duration: 0.5 },
        'startLine2+=0.9',
      )
      .to(
        triangles.current[5],
        { opacity: 1, duration: 0.5 },
        'startLine2+=1.05',
      )
      .to(
        lineGreenTextN.current,
        { opacity: 1, duration: 0.5 },
        'startLine2+=0.4',
      )
      .to(
        lineGreenText.current,
        { opacity: 1, duration: 0.5 },
        'startLine2+=1.1',
      )

      // Yellow Banner
      .to(concat.current, { opacity: 1, duration: 1.5 }, 'startYellowBanner')
      .to(percent.current, { opacity: 1, duration: 1.5 }, 'startYellowBanner');
    sessionStorage.setItem(STORAGE_KEYS.animationR30, '1');
  };

  return (
    <div className={animationPlay ? '' : 'disable-animation'}>
      <div className='click-area' onClick={startAnimate} />
      <div className='chart-wrapper'>
        <div className='chart'>
          <div className='point point-0' />
          <div className='line-wrapper grey'>
            <div ref={lineGrey} className='line' />
            <div className='points'>
              {[0, 1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  ref={(el) => (rectangles.current[item] = el)}
                  className='point'
                />
              ))}
            </div>
            <div ref={lineGreyText} className='line-text'>
              -5.2
            </div>
          </div>
          <div className='line-wrapper green'>
            <div ref={lineGreen} className='line' />
            <div className='points'>
              {[0, 1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  ref={(el) => (triangles.current[item] = el)}
                  className='point'
                />
              ))}
            </div>
            <div ref={lineGreenText} className='line-text'>
              -8.4
            </div>
            <div ref={lineGreenTextN} className='line-text-n'>
              (n=175)
            </div>
          </div>
          <div ref={concat} className='concat' />
        </div>
        <div ref={percent} className='percent' />
      </div>
    </div>
  );
};

export default AnimationEfficacy;
