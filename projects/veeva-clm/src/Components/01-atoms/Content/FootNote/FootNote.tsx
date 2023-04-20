import React from 'react';
import './FootNote.scss';
import { FootNote as FootNoteType } from '@/types';
import SupLeft from '../SupLeft/SupLeft';
import classNames from 'classnames';

interface FootNoteProps {
  custom?: string;
  footnotes?: FootNoteType[];
}

export const FootNote: React.FC<FootNoteProps> = ({
  custom = '',
  footnotes,
}) => {
  return (
    <div className={classNames('footnote', custom)}>
      {footnotes && (
        <ul className='footnote__list'>
          {footnotes.map((footnote, index) => {
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
