import React from 'react';

export function nextStep() {
  document.getElementsByClassName('mood-tiles')[0].style.display = 'none';
  document.getElementsByClassName('mood-tiles-selected')[0].style.display =
    'block';
  document.getElementsByClassName('btn-inactive')[0].style.display = 'none';
  document.getElementsByClassName('btn-continue')[0].style.display =
    'inline-block';
}

export default nextStep;
