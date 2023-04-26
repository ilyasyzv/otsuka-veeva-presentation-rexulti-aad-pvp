import React, { ReactNode } from 'react';
import style from './TabNames.module.scss';
import CarretGroup from './CarretGroup';

interface Props {
  activeIndex: number;
  handleTabClick: (index: number) => void;
  children: ReactNode;
  containerWidth?: number;
  translateTabsX?: number;
  tabWidth?: number;
}

const TabNames: React.FC<Props> = ({
  activeIndex,
  handleTabClick,
  containerWidth = 408,
  children,
  translateTabsX,
  tabWidth,
}) => {
  const childrenCount = React.Children.count(children);
  const carretSize = containerWidth / childrenCount;
  const tabWidthPersent = `${100 / childrenCount}%`;

  return (
    <div className={style.tabGroup}>
      <CarretGroup
        carretSize={carretSize}
        activeIndex={activeIndex}
        translateTabsX={translateTabsX}
        tabWidth={tabWidth}
        childrenCount={childrenCount}
      />
      <ul
        className={style.tabs}
        style={{
          width: `${tabWidth ? tabWidth * childrenCount : containerWidth}px`,
          transform: translateTabsX
            ? `translateX(${translateTabsX}px)`
            : 'none',
        }}
      >
        {React.Children.map(children, (child, index) => {
          return (
            <li
              key={index}
              className={activeIndex === index ? style.activeTab : undefined}
              style={{ width: tabWidth || tabWidthPersent }}
              onClick={() => handleTabClick(index)}
            >
              {child.props.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TabNames;
