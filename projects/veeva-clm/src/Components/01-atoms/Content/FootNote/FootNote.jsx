import React from 'react';
import './FootNote.scss';
import SupLeft from '../SupLeft/SupLeft';

const classNames = require('classnames');

export const FootNote = ({ custom, footnotes }) => {
  const customClass = custom || '';

  return (
    <div className={classNames('footnote', customClass)}>
      {footnotes && (
        <ul className='footnote__list'>
          {footnotes.map((footnote, index) => {
            return (
              <li key={ index }>
                { footnote.supLeftBig && <SupLeft big text={ footnote.supLeftBig } /> }
                { footnote.supLeft && <SupLeft text={ footnote.supLeft } /> }
                { footnote.innerText }
                { footnote.supRight && <sup>{ footnote.supRight }</sup> }
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
