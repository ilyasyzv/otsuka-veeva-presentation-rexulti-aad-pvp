import React, { ReactNode } from 'react';
import classNames from 'classnames';

import './List.scss';

interface ListTypeProps {
  listClassName?: string;
  children: ReactNode;
}

export interface DataListProps {
  customStyle?: string;
  text: string | ReactNode;
}

export interface ListProps {
  content: {
    type?: string;
    columns?: string;
    custom?: string;
    markerColor?: string;
    data: DataListProps[];
  };
}

export const ListType = ({ listClassName, children }: ListTypeProps) =>
  listClassName?.includes('numeric') ? (
    <ol className={listClassName}>{children}</ol>
  ) : (
    <ul className={listClassName}>{children}</ul>
  );

export const List = ({ content }: ListProps) => (
  <ListType
    listClassName={classNames(
      'list',
      content.type,
      content.columns,
      content.custom,
    )}
  >
    {content.data.map((item, index) => {
      const itemClass = classNames(
        content.markerColor ? `marker-${content.markerColor}` : '',
        item.customStyle || '',
      );

      return (
        <li className={itemClass} key={index}>
          {item.text}
        </li>
      );
    })}
  </ListType>
);

export default List;
