import React, { useState, useCallback } from 'react';
import TabNames from './subcomponents/TabNames';
import { TabItemProps } from './Tab';

import style from './Tabs.module.scss';

interface SlidersProps {
  className?: string;
  focusedIdx: number;
  duration?: number;
  children: React.ReactNode;
}
interface SlidersProps {
  className?: string;
  focusedIdx: number;
  duration?: number;
  disableAnimation?: boolean;
  children: React.ReactNode;
}

const Sliders = ({
  className,
  focusedIdx,
  children,
  duration = 500,
  disableAnimation = false,
}: SlidersProps) => {
  const offset = -100 * focusedIdx;
  const transition = disableAnimation ? '' : `${duration}ms`;

  return (
    <div className={`${style.outerSliders} ${className}`}>
      <div
        className={style.sliders}
        style={{
          transform: `translateX(${offset}%)`,
          transition,
        }}
      >
        {children}
      </div>
    </div>
  );
};
type TabsProps = {
  children:
    | React.ReactElement<TabItemProps>
    | React.ReactElement<TabItemProps>[];
  className?: string;
  disableAnimation?: boolean;
  vertical?: boolean;
  translateTabsX?: number;
  tabWidth?: number;
};

export const Tabs = ({
  children,
  className,
  disableAnimation = false,
  vertical = false,
  translateTabsX,
  tabWidth,
}: TabsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const childrenCount = React.Children.count(children);
  return (
    <div
      className={`${className || ''} ${style.tabsContainer} ${
        vertical ? style.vertical : ''
      }`}
    >
      <TabNames
        activeIndex={activeIndex}
        handleTabClick={handleTabClick}
        children={children}
        translateTabsX={translateTabsX}
        tabWidth={tabWidth}
      />
      <Sliders
        disableAnimation={disableAnimation}
        className={style.tabContent}
        focusedIdx={activeIndex}
      >
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className={activeIndex === index ? style.activeTab : undefined}
            onClick={() => handleTabClick(index)}
          >
            {child}
          </div>
        ))}
      </Sliders>
    </div>
  );
};

export default Tabs;
