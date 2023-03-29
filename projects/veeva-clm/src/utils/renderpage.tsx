import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';

export const renderPage = (сomponent: any, containerId = 'app') => {
  const container = document.getElementById(containerId) as HTMLElement;

  if (container.hasChildNodes()) {
    hydrateRoot(
      container,
      <>{React.cloneElement(сomponent, { tab: container.dataset.page })}</>,
    );
  } else {
    const root = createRoot(container);
    root.render(
      <>{React.cloneElement(сomponent, { tab: container.dataset.page })}</>,
    );
  }
  // delete container.dataset.page;
  // document.addEventListener('DOMContentLoaded', (event) => {
  //   if (typeof window.react_processed === 'undefined') {
  //   } else {
  //     console.log('do not add');
  //   }
  // });
};
export default renderPage;
