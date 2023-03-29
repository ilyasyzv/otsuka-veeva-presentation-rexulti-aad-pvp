import React from 'react';
import './Tabs.scss';

function Tab(props) {
  return <div className={'tabs__content'}>{props.tab.content}</div>;
}

function Navigation(props) {
  return (
    <div className={'tabs__nav'}>
      <ul>
        {props.tabs.map((item) => (
          <li
            key={item.id}
            className={`tabs__item ${
              props.activeTabId === item.id ? 'active' : ''
            }`}
            onClick={() => props.onNavClick(item.id)}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Tabs(props) {
  const [activeTabId, setActiveTab] = React.useState(props.tabs[0].id);

  const activeTab = React.useMemo(
    () => props.tabs.find((tab) => tab.id === activeTabId),
    [activeTabId, props.tabs],
  );

  return (
    <div className={'tabs'}>
      <Navigation
        tabs={props.tabs}
        onNavClick={setActiveTab}
        activeTabId={activeTabId}
      />
      <Tab tab={activeTab} />
    </div>
  );
}

export default Tabs;
