import React, { ReactNode } from 'react';
import './Paragraph.scss';
import classNames from 'classnames';

interface Props {
  color?: string;
  size?: string;
  weight?: string;
  position?: string;
  custom?: string;
  children?: ReactNode;
}

export const Paragraph: React.FC<Props> = ({
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
