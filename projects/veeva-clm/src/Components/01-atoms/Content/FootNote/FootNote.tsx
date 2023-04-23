import React from 'react';
import './FootNote.scss';
import SupLeft from '../SupLeft/SupLeft';
import classNames from 'classnames';
import { FootNoteProps, FootNoteType } from '@/types';

export const FootNote: React.FC<FootNoteProps> = ({
  custom = '',
  footnotes,
}) => {
  return (
    <div className={classNames('footnote', custom)}>
      {footnotes && (
        <ul className='footnote__list'>
          {footnotes.map((footnote: FootNoteType, index: number) => {
            return (
              <li key={index}>
                {footnote.supLeftBig && (
                  <SupLeft big text={footnote.supLeftBig} />
                )}
                {footnote.supLeft && <SupLeft text={footnote.supLeft} />}
                {footnote.innerText}
                {footnote.supRight && <sup>{footnote.supRight}</sup>}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default FootNote;
