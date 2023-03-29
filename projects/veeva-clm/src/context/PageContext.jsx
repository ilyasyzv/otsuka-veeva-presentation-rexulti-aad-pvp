import React, { createContext } from 'react';

// export const PageContext = createContext();

export const PageContext = createContext({
  currentPage: '01_Launch_screen',
  setCurrentPage: (page) => {},
});

export default PageContext;
