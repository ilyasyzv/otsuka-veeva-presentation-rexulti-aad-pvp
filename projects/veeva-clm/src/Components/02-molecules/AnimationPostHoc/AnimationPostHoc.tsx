import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

import { STORAGE_KEYS } from '@/storage/storage';

import './AnimationPostHoc.scss';

const AnimationPostHoc = () => {
  const [animationPlay, setAnimationPlay] = useState(true);

  const lineGrey1 = useRef(null);
  const lineGrey2 = useRef(null);
  const lineGreen1 = useRef(null);
  const lineGreen2 = useRef(null);
  const rectangles1 = useRef<(HTMLDivElement | null)[]>([]);
  const rectangles2 = useRef<(HTMLDivElement | null)[]>([]);
  const triangles1 = useRef<(HTMLDivElement | null)[]>([]);
  const triangles2 = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ls = sessionStorage.getItem(STORAGE_KEYS.animationR32);
    if (ls === '1') {
      setAnimationPlay(false);
    }
  }, []);

  const startAnimate = () => {
    gsap
      .timeline({})
      .addLabel('startLine1', 0)
      .addLabel('startLine2', 1)

      // Lines grey
      .to(
        [lineGrey1.current, lineGrey2.current],
        { width: '100%', duration: 1 },
        'startLine1',
      )
      .to(
        [rectangles1.current[0], rectangles2.current[0]],
        { opacity: 1, duration: 0.5 },
        'startLine1+=0.15',
      )
      .to(
        [rectangles1.current[1], rectangles2.current[1]],
        { opacity: 1, duration: 0.5 },
        'startLine1+=0.3',
      )
      .to(
        [rectangles1.current[2], rectangles2.current[2]],
        { opacity: 1, duration: 0.5 },
        'startLine1+=0.45',
      )
      .to(
        [rectangles1.current[3], rectangles2.current[3]],
        { opacity: 1, duration: 0.5 },
        'startLine1+=0.6',
      )
      .to(
        [rectangles1.current[4], rectangles2.current[4]],
        { opacity: 1, duration: 0.5 },
        'startLine1+=0.75',
      )
      .to(
        [rectangles1.current[5], rectangles2.current[5]],
        { opacity: 1, duration: 0.5 },
        'startLine1+=0.9',
      )
      .to(
        [rectangles1.current[6], rectangles2.current[6]],
        { opacity: 1, duration: 0.5 },
        'startLine1+=1.05',
      )

      // Lines green
      .to(
        [lineGreen1.current, lineGreen2.current],
        { width: '100%', duration: 1 },
        'startLine2',
      )
      .to(
        [triangles1.current[0], triangles2.current[0]],
        { opacity: 1, duration: 0.5 },
        'startLine2+=0.15',
      )
      .to(
        [triangles1.current[1], triangles2.current[1]],
        { opacity: 1, duration: 0.5 },
        'startLine2+=0.3',
      )
      .to(
        [triangles1.current[2], triangles2.current[2]],
        { opacity: 1, duration: 0.5 },
        'startLine2+=0.45',
      )
      .to(
        [triangles1.current[3], triangles2.current[3]],
        { opacity: 1, duration: 0.5 },
        'startLine2+=0.6',
      )
      .to(
        [triangles1.current[4], triangles2.current[4]],
        { opacity: 1, duration: 0.5 },
        'startLine2+=0.75',
      )
      .to(
        [triangles1.current[5], triangles2.current[5]],
        { opacity: 1, duration: 0.5 },
        'startLine2+=0.9',
      )
      .to(
        [triangles1.current[6], triangles2.current[6]],
        { opacity: 1, duration: 0.5 },
        'startLine2+=1.05',
      );
    sessionStorage.setItem(STORAGE_KEYS.animationR32, '1');
  };

  return (
    <div className={animationPlay ? '' : 'disable-animation'}>
      <div className='click-area' onClick={startAnimate} />
      <div className='chart-wrapper-2'>
        <div className='chart-2'>
          <div className='line-wrapper grey first'>
            <div ref={lineGrey1} className='line' />
            <div className='points'>
              {[0, 1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  ref={(el) => (rectangles1.current[item] = el)}
                  className='point'
                />
              ))}
            </div>
          </div>
          <div className='line-wrapper green first'>
            <div ref={lineGreen1} className='line' />
            <div className='points'>
              {[0, 1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  ref={(el) => (triangles1.current[item] = el)}
                  className='point'
                />
              ))}
            </div>
          </div>
          <div className='line-wrapper grey second'>
            <div ref={lineGrey2} className='line' />
            <div className='points'>
              {[0, 1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  ref={(el) => (rectangles2.current[item] = el)}
                  className='point'
                />
              ))}
            </div>
          </div>
          <div className='line-wrapper green second'>
            <div ref={lineGreen2} className='line' />
            <div className='points'>
              {[0, 1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  ref={(el) => (triangles2.current[item] = el)}
                  className='point'
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationPostHoc;
