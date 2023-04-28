import React, { createContext, useState } from 'react';

type TISIModalContext = {
  children: React.ReactNode;
};

type TParams = {
  show: boolean;
  pageName: string;
};

export type TISIModalValue = {
  isiModalParams: TParams;
  setIsiModalParams: ({ show, pageName }: TParams) => void;
};

const ISIModalContext = createContext(false);

const ISIModalProvider = ({ children }: TISIModalContext) => {
  const [isShowISIModal, setIsShowISIModal] = useState(false);
  const [preparedPageName, setPreparedPageName] = useState('');

  const setIsiModalParams = ({ show, pageName }: TParams) => {
    setIsShowISIModal(show);
    setPreparedPageName(pageName);
  };

  const value: TISIModalValue = {
    isiModalParams: { show: isShowISIModal, pageName: preparedPageName },
    setIsiModalParams,
  };

  return (
    <ISIModalContext.Provider value={value}>
      {children}
    </ISIModalContext.Provider>
  );
};

export { ISIModalContext, ISIModalProvider };
