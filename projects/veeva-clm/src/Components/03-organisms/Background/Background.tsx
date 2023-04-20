import React, { ReactNode } from 'react';
import styles from './Background.module.scss';

export type BackgroundType = 'default' | 'a' | 'b' | 'c';

export type BackgroundProps = {
  children: ReactNode;
  type: BackgroundType;
};

const Background = ({ type, children }: BackgroundProps) => {
  return (
    <div className={`${styles['content-background']} ${styles[type]}`}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Background;
