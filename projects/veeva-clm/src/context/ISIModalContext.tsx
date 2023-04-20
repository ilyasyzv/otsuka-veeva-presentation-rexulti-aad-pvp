import React, { createContext, useState } from 'react';

type TISIModalContext = {
  children: React.ReactNode;
};

const ISIModalContext = createContext(false);

const ISIModalProvider = ({ children }: TISIModalContext) => {
  const [isShowISIModal, setIsShowISIModal] = useState(false);

  const showModalHandler = (val: boolean) => {
    setIsShowISIModal(val);
  };

  return (
    <ISIModalContext.Provider value={{ isShowISIModal, showModalHandler }}>
      {children}
    </ISIModalContext.Provider>
  );
};

export { ISIModalContext, ISIModalProvider };
