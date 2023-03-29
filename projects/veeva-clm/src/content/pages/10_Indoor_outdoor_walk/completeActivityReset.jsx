import React from 'react';

export function completeActivityReset() {
  sessionStorage.removeItem('complete-activity');
  sessionStorage.setItem('alert-msg', 'pending');
}

export default completeActivityReset;
