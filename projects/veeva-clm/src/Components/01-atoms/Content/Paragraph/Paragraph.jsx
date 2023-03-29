import React from 'react';
import './Paragraph.scss';

const classNames = require('classnames');

export const Paragraph = ({
  color,
  size,
  weight,
  position,
  custom,
  children = <>Loading</>,
}) => {
  const colorClass = color ? `font-${color}` : '';
  const sizeClass = size ? `font-${size}` : '';
  const weightClass = weight ? `font-${weight}` : '';
  const positionClass = position ? `font-${position}` : '';
  const customClass = custom || '';

  const paragraphClass = classNames(
    'paragraph',
    colorClass,
    sizeClass,
    weightClass,
    positionClass,
    customClass,
  );

  return <p className={paragraphClass}>{children}</p>;
};

export default Paragraph;
