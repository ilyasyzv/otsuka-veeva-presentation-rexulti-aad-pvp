import React, { ReactNode } from 'react';
import style from './TabNames.module.scss';
import CarretGroup from './CarretGroup';

interface Props {
  activeIndex: number;
  handleTabClick: (index: number) => void;
  children: ReactNode;
  containerWidth?: number;
  translateTabsX?: number;
}

const TabNames: React.FC<Props> = ({
  activeIndex,
  handleTabClick,
  containerWidth = 408,
  children,
  translateTabsX,
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
      />
      <ul
        className={style.tabs}
        style={{
          width: `${containerWidth}px`,
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
              style={{ width: tabWidthPersent }}
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
