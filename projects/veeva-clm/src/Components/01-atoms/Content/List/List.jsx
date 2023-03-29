import React from 'react';
import './List.scss';

const classNames = require('classnames');

export const ListType = ({ ...props }) =>
  props.listClassName.includes('numeric') ? (
    <ol className={props.listClassName}>{props.children}</ol>
  ) : (
    <ul className={props.listClassName}>{props.children}</ul>
  );

export const List = ({ content }) => (
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
        content.marker_color ? `marker-${content.marker_color}` : '',
        item.custom_style || '',
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
