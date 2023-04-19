import React, { Suspense, useState } from 'react';
import { Route } from '@organisms';
import { ErrorBoundary, Page } from '@pages';
import { Layout } from '@templates';
import { PageProvider } from '@/context/PageContext';

export const AppStorybook = ({ path, background = 'default', components }) => {
  const [currentPage, setCurrentPage] = useState(path);

  return (
    <ErrorBoundary>
      <Suspense fallback={<h1>Loading application...</h1>}>
        <PageProvider currPage={path}>
          <Layout>
            <Route
              path={`/${path}`}
              component={() => (
                <Page background={background} component={components} />
              )}
            />
          </Layout>
        </PageProvider>
      </Suspense>
    </ErrorBoundary>
  );
};

export default AppStorybook;
