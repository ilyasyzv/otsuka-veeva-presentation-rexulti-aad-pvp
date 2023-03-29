import React, { useState, useEffect } from 'react';
// import { Layout } from '@templates/Layouts/Layout/Layout';
import { Page, PageNotFound } from '@pages';

export const PageLoader = ({ name }) => {
  const [pageContent, setPageContent] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      console.log(`Trying to load by name:  ${name}--`);
      if (name !== '') {
        // @todo check why index.html shows here.
        const preparedName = name.replace('/', '').replace('/index.html', '');
        await import(
          /* webpackChunkName: "page-content" */
          /* webpackPreload: true */
          `@/content/pages/${preparedName}/index.mdx`
        ).then((Module) => {
          setPageContent(<Page component={Module.default} />);
        });
      }
    };

    fetchData().catch((error) => {
      console.warn(error);
      setPageContent(<PageNotFound />);
    });
  }, [name]);

  return <>{pageContent}</>;
};

// renderPage(<PageLoader />);

export default PageLoader;
