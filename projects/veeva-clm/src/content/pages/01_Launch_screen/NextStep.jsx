import React from 'react';

export function nextStep() {
  document.getElementsByClassName('begin-btn-01')[0].style.display = 'none';
  document.getElementsByClassName('begin-btn-02')[0].style.display =
    'inline-block';
}

export default nextStep;
