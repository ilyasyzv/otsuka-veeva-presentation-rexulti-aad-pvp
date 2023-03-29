import React from 'react';

export const SetHomeState = ({ state }) => {
  sessionStorage.setItem('home-state', state);
};

export const CheckRedirection = () => {
  return sessionStorage.getItem('home-state');
};

export default { CheckRedirection, SetHomeState };
