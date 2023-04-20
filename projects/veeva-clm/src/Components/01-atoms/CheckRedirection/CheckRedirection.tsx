import React from 'react';

const SetHomeState = ({ state }: { state: string }): void => {
  sessionStorage.setItem('home-state', state);
};

const CheckRedirection = (): string | null => {
  return sessionStorage.getItem('home-state');
};

export default { CheckRedirection, SetHomeState };
