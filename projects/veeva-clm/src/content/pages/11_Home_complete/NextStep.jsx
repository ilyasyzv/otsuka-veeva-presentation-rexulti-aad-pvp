import React from 'react';

export function nextStep() {
  document.getElementsByClassName('home-complete')[0].style.display = 'none';
  document.getElementsByClassName('home-complete-2')[0].style.display = 'block';
  document.getElementsByClassName('btn-yes-container')[0].style.display =
    'none';
  document
    .getElementsByClassName('btn-view-insights')[0]
    .classList.add('new-position');
  sessionStorage.setItem('complete-activity', 'completed');
}

export default nextStep;
