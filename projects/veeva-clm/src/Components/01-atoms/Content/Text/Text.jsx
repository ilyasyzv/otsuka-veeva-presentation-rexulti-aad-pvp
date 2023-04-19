import React from 'react';
import './Text.scss';
import Header from '../Header/Header';
import Paragraph from '../Paragraph/Paragraph';
import List from '../List/List';

export const Text = ({ title, supText, innerText, list }) => {
  return (
    <div className='text'>
      <Header type={'h3'}>{title}<sup>{supText}</sup></Header>
      {innerText && <Paragraph>{innerText}</Paragraph>}
      {list && <List content={list}></List>}
    </div>
  );
}