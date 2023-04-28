import React, { ReactNode } from 'react';
import Header from '../Header/Header';
import Paragraph from '../Paragraph/Paragraph';
import List, { ListProps } from '../List/List';

import styles from './Text.module.scss';

interface TextProps {
  title?: string | ReactNode;
  supText?: string;
  innerText?: string | ReactNode;
  list?: ListProps;
}

export const Text = ({ title, supText, innerText, list }: TextProps) => {
  return (
    <div className={styles.text}>
      <Header type='h3'>
        {title}
        <sup>{supText}</sup>
      </Header>
      {innerText && <Paragraph>{innerText}</Paragraph>}
      {list && <List content={list.content} />}
    </div>
  );
};

export default Text;
