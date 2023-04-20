import React, { useState } from 'react';
import './TabSwitcher.scss';

export default function TabSwitcher({ tabs }) {
  const [selectedId, setSelectedId] = useState(tabs[0].id);
  const selectedTab = tabs.find((tab) => tab.id === selectedId);
  return (
    <div className='tab_switcher'>
      <div className='tab_switcher__header'>
        {tabs.map(tab => (
          <button
            className={selectedId === tab.id ? 'active' : ''}
            key={tab.id}
            onClick={() => setSelectedId(tab.id)}
          >
            <span>{tab.header}</span>
            <div />
          </button>
        ))}
      </div>
      <hr />
      <div className='tab_switcher__body' key={selectedId}>
        {selectedTab.content}
      </div>
    </div>
  );
}
