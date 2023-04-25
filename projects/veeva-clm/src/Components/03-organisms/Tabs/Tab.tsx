import React from 'react';

export type TabItemProps = {
  title: string;
  children: React.ReactNode;
};

export const TabItem = ({ title, children }: TabItemProps) => {
  return <div>{children}</div>;
};

export default TabItem;
