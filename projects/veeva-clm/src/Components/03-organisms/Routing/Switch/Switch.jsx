import React, { useEffect, useState, useContext, Children } from 'react';

import { PageContext } from '@/context/PageContext';
import matchPath from '@organisms/Routing/matchPath/matchPath';

// inspired by https://github.com/remix-run/react-router/blob/v5/packages/react-router/modules/Switch.js

export const Switch = (props) => {
  const [location] = useState(window.location.pathname.replace('/', ''));
  const { currentPage } = useContext(PageContext);

  useEffect(() => {
    console.log('test', { currentPage });
  }, []);

  // const location = window.location.pathname.replace('/', '');

  let element;
  let match;

  // We use React.Children.forEach instead of React.Children.toArray().find()
  // here because toArray adds keys to all child elements and we do not want
  // to trigger an unmount/remount for two <Route>s that render the same
  // component at different URLs.
  React.Children.forEach(props.children, (child) => {
    if ((match == null || match === false) && React.isValidElement(child)) {
      element = child;

      const path = child.props.path || child.props.from;

      match = path ? matchPath(location, { ...child.props, path }) : null;
      match = path === location;
      console.log('===', { path, location, currentPage, match });
    }
    console.log('iterations');
  });

  console.log('finally', element);
  return <>{element}</>;
  // return match ? <>element:{element}</> : 'no element'
  // return match ? React.cloneElement(element) : null;
  // return match ? React.cloneElement(element, { location, computedMatch: match }) : null;
};
export class Switch0 extends React.Component {
  render() {}
}

export default Switch;
