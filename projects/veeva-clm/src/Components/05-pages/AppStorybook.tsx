import React, { Suspense } from 'react';
import { Route } from '@organisms';
import { ErrorBoundary, Page } from '@pages';
import { Layout } from '@templates';
import { PageProvider } from '@/context/PageContext';
import { BackgroundType } from '@/Components/03-organisms/Background/Background';
import { ISIModalProvider } from '@/context/ISIModalContext';

interface AppStorybookProps {
  path: string;
  background: BackgroundType;
  components: React.ReactNode;
}

export const AppStorybook: React.FC<AppStorybookProps> = ({
  path,
  background = 'default',
  components,
}) => {
  const page = () => <Page background={background} component={components} />;

  return (
    <ErrorBoundary>
      <Suspense fallback={<h1>Loading application...</h1>}>
        <PageProvider currPage={path}>
          <ISIModalProvider>
            <Layout>
              <Route path={`/${path}`} component={page} />
            </Layout>
          </ISIModalProvider>
        </PageProvider>
      </Suspense>
    </ErrorBoundary>
  );
};

export default AppStorybook;
