import React from 'react';
import './style.scss';
import Arrow from './img/arrow.png?format=webp';
import { Link } from '@organisms';

interface CardProps {
  title: string;
  link: string;
}

export const Card: React.FC<CardProps> = ({ title, link }) => {
  return (
    <div className='card'>
      <span className='card__title'>{title}</span>
      <Link to={link}>
        <img src={Arrow} alt='card' />
      </Link>
    </div>
  );
};

export default Card;
