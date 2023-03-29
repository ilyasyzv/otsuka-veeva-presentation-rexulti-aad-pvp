import React, { useEffect, useContext, useState } from 'react';
import { PageContext } from '@/context/PageContext';
import { PageLoader } from '@pages/PageLoader';

// const Page = ({ component: Component }) => <Component />;
// Example : <Route path="/" component={() => <Page component={Post} />} />
export const Route = ({ path, exact = false, component, ...props }) => {
  /**
   * Current Page path. get from browser.
   */
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  /**
   * Get Page context.
   */
  const [currentPageContext, setContext] = useContext(PageContext);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('navigate', onLocationChange);

    return () => window.removeEventListener('navigate', onLocationChange);
  }, []);
  // Remove first and last slash
  const preparedPath = path.replace(/^\/|\/$/g, '');
  // To handle both 3 cases we need to use such complex constcution
  // 1. Current Path of webproject and path of component to handle dev mode
  // 2. second and third cases to handle veeva mode.
  //  it check from context current state and show exact page that require.

  // console.log('***', { preparedPath, currentPath, currentPageContext });

  if (preparedPath === '' && currentPageContext === '01_Launch_screen') {
    setContext('01_Launch_screen');
    // Display Dynamic content.
    return <PageLoader name='01_Launch_screen' />;
  }

  // if (path === '*') {
  //   // @todo : Temp fix . should be implemented in Switch
  //   if (currentPath === '/') {
  //     setContext('home');
  //     // Display Dynamic content.
  //     return <PageLoader name='home' />;
  //   }
  //   currentPath.replace('/', '');
  //   // Display Dynamic content.
  //   return <PageLoader name={currentPath} />;
  // }

  return currentPath === preparedPath ||
    currentPageContext === preparedPath ||
    `${currentPath}/index.html` === preparedPath
    ? component()
    : null;
};

export default Route;
