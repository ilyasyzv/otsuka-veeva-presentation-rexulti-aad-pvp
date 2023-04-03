import React, { useState, Suspense } from 'react';
import { Route } from '@organisms';
import { Page, ErrorBoundary } from '@pages';
import { Layout } from '@templates';
import { PageContext } from '@/context/PageContext';
import './App.scss';

//todo: Old pages to delete
import LaunchScreen from '@/content/pages/01_Launch_screen/index.mdx';
import ContentHome from '@/content/pages/02_Home/index.mdx';
import ContentDailycheckin from '@/content/pages/03_Daily_checkin/index.mdx';
import ContributorSelections from '@/content/pages/04_Contributor_selections/index.mdx';
import RestLevel from '@/content/pages/05_Rest_level/index.mdx';

import R00Home from '@/content/pages/R.0.0_Home/index.mdx';
import Examples from '@/content/pages/examples/index.mdx';
import R10ExecutiveSummary from '@/content/pages/R.1.0_Executive_summary/index.mdx';
import R20AADoverview from '@/content/pages/R.2.0_AAD_overview/index.mdx';

type AppProps = {
  tab: string;
};

function App({ tab }: AppProps) {
  const [currentPage, setCurrentPage] = useState<string>(tab);

  return (
    <ErrorBoundary>
      <Suspense fallback={<h1>Loading application...</h1>}>
        <PageContext.Provider value={[currentPage, setCurrentPage]}>
          <Layout>
            <Route
              path='/'
              // component={() => <PageLoader name='home' />}
              component={() => <Page component={LaunchScreen} />}
            />
            {/* <Route */}
            {/*  path='/01_Launch_screen' */}
            {/*  component={() => <Page component={LaunchScreen} />} */}
            {/* /> */}
            <Route
              path='/02_Home'
              component={() => <Page component={ContentHome} />}
            />
            <Route
              path='/03_Daily_checkin'
              component={() => <Page component={ContentDailycheckin} />}
            />
            <Route
              path='/04_Contributor_selections'
              component={() => <Page component={ContributorSelections} />}
            />
            <Route
              path='/05_Rest_level'
              component={() => <Page component={RestLevel} />}
            />



            <Route
              path='/R.0.0_Home'
              component={() => <Page component={R00Home} />}
            />
            <Route
              path='/examples'
              component={() => <Page component={Examples} />}
            />
            <Route
              path='/R.1.0_Executive_summary'
              component={() => <Page component={R10ExecutiveSummary} />}
            />
            <Route
              path='/R.2.0_AAD_overview'
              component={() => <Page component={R20AADoverview} />}
            />
          </Layout>
        </PageContext.Provider>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
