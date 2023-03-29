import React from 'react';
import nextStep from './NextStep.jsx';

export const AlertMsg = () => {
  if (sessionStorage.getItem('alert-msg') === 'pending') {
    setTimeout(function () {
      document.getElementById('home-complete-alert-msg').style.display = 'none';
      sessionStorage.setItem('alert-msg', 'shown');
    }, 3000);
  }
};

export function completeActivity() {
  if (sessionStorage.getItem('alert-msg') !== 'pending') {
    document.getElementById('home-complete-alert-msg').style.display = 'none';
  }
  if (sessionStorage.getItem('complete-activity') === 'completed') {
    document.getElementById('home-complete-alert-msg').style.display = 'none';
    nextStep();
  }
}

export default AlertMsg;
