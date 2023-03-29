import React from 'react';
import { Timeline, Controls, PlayState, Tween } from 'react-gsap';
import './AnimationExample.scss';

const AnimationExample = () => {
  // @ts-ignore

  const CallToActionButtons = () => (
    <>
      <a href='#' className='action-btn'>
        Try 4 Free
      </a>
      <a href='#' className='action-ghost-btn'>
        More Info
      </a>
    </>
  );

  return (
    <div>
      <Timeline
        labels={[
          { label: 'start', position: 0 },
          {
            label: 'header-end',
            position: 'start+=1.8',
          },
          { label: 'h1Show', position: 'header-end+=1.3' },
          { label: 'girl-start', position: 'h1Show-=0.5' },
          { label: 'boy-start', position: 'girl-start+=0.4' },
          { label: 'shapes-start', position: 'boy-start+=0.4' },
        ]}
      >
        <section id='home'>
          <div className='container'>
            <div className='content-area'>
              <div className='info-section'>
                <Timeline
                  target={
                    <>
                      <h1>Connect With Your Family</h1>
                      <h4>Secured and Always On</h4>
                      <div className='call-actions'>
                        <CallToActionButtons />
                      </div>
                    </>
                  }
                >
                  <Tween
                    target={0}
                    from={{ x: '0px', y: '100px', opacity: 0 }}
                    to={{ x: '0px', y: '0px', opacity: 1 }}
                    duration={1.3}
                    position='header-end'
                  />
                  <Tween
                    target={1}
                    from={{ x: '-50px', opacity: 0 }}
                    to={{ x: '0px', opacity: 1 }}
                    duration={1.3}
                    position='h1Show'
                  />
                  <Tween
                    target={2}
                    from={{ x: '-50px', opacity: 0 }}
                    to={{ x: '0px', opacity: 1 }}
                    duration={1.3}
                    position='h1Show+=1'
                  />
                </Timeline>
              </div>
              <div className='photos'>
                <Timeline
                  target={
                    <img
                      src='https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=236&w=400'
                      alt=''
                      className='girl'
                    />
                  }
                >
                  <Tween
                    target={0}
                    from={{ width: 0 }}
                    to={{ width: 400 }}
                    duration={1.4}
                    position='girl-start'
                  />
                </Timeline>
                <Timeline
                  target={
                    <>
                      <div className='shape1' />
                      <div className='shape2' />
                      <div className='shape3' />
                    </>
                  }
                >
                  <Tween
                    target={0}
                    from={{ scale: 0, opacity: 0 }}
                    to={{ scale: 1, opacity: 1 }}
                    position='shapes-start'
                  />
                  <Tween
                    target={2}
                    from={{ opacity: 0 }}
                    to={{ opacity: 0.6 }}
                    duration={1}
                    position='>-0.2'
                  />
                  <Tween
                    target={2}
                    from={{ x: -50, y: 500 }}
                    to={{ y: 465 }}
                    repeat={-1}
                    duration={1.5}
                    yoyo
                  />
                  <Tween
                    target={1}
                    from={{ opacity: 0 }}
                    to={{ opacity: 0.3 }}
                    duration={1}
                    position='>-2'
                  />
                  <Tween
                    target={1}
                    from={{ x: 550, y: -150 }}
                    to={{ y: -185 }}
                    duration={1.5}
                    repeat={-1}
                    yoyo
                  />
                </Timeline>
              </div>
            </div>
          </div>
        </section>
      </Timeline>
      <footer id='animationPlayOnMountHack' />
    </div>
  );
};

const MenuList = () => (
  <ul>
    <li>
      <a href='#'>Product</a>
    </li>
    <li>
      <a href='#'>Resources</a>
    </li>
    <li>
      <a href='#'>Contact</a>
    </li>
    <li>
      <a href='#' className='menu-btn'>
        Sign Up
      </a>
    </li>
  </ul>
);

export default AnimationExample;
