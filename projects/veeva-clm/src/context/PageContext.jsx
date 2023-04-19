import React, { createContext, useState } from 'react';

const defaultPage = '01_Launch_screen';

const PageContext = createContext(defaultPage);

const PageProvider = ({ children, currPage = defaultPage }) => {
  const [currentPage, setCurrentPage] = useState(currPage);

  const changePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <PageContext.Provider value={{ currentPage, changePage }}>
      {children}
    </PageContext.Provider>
  );
};

export { PageContext, PageProvider };
