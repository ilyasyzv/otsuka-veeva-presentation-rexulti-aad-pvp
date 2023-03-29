import React, { useState, Suspense } from 'react';
import { Route } from '@organisms';
import { Page, ErrorBoundary } from '@pages';
import { Layout } from '@templates';
import { PageContext } from '@/context/PageContext';
import './App.scss';

import LaunchScreen from '@/content/pages/01_Launch_screen/index.mdx';
import ContentHome from '@/content/pages/02_Home/index.mdx';
import ContentDailycheckin from '@/content/pages/03_Daily_checkin/index.mdx';
import ContributorSelections from '@/content/pages/04_Contributor_selections/index.mdx';
import RestLevel from '@/content/pages/05_Rest_level/index.mdx';
import HomeCheckin from '@/content/pages/06_Home_check_in/index.mdx';
import EnergyLevel from '@/content/pages/07_Energy_level/index.mdx';
import ActivityShort from '@/content/pages/08_Activity_short/index.mdx';
import ActivityLibrary from '@/content/pages/09_Activity_library/index.mdx';
import IndoorOutdoorWalk from '@/content/pages/10_Indoor_outdoor_walk/index.mdx';
import HomeComplete from '@/content/pages/11_Home_complete/index.mdx';
import Insights from '@/content/pages/12_Insights/index.mdx';
import WeeklyView from '@/content/pages/13_Weekly_view/index.mdx';
import MonthlyView from '@/content/pages/14_Monthly_view/index.mdx';
import HealthcareProviders from '@/content/pages/15_Healthcare_providers/index.mdx';
import FamilyFriends from '@/content/pages/16_Family_friends/index.mdx';

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
              path='/06_Home_check_in'
              component={() => <Page component={HomeCheckin} />}
            />
            <Route
              path='/07_Energy_level'
              component={() => <Page component={EnergyLevel} />}
            />
            <Route
              path='/08_Activity_short'
              component={() => <Page component={ActivityShort} />}
            />
            <Route
              path='/09_Activity_library'
              component={() => <Page component={ActivityLibrary} />}
            />
            <Route
              path='/10_Indoor_outdoor_walk'
              component={() => <Page component={IndoorOutdoorWalk} />}
            />
            <Route
              path='/11_Home_complete'
              component={() => <Page component={HomeComplete} />}
            />
            <Route
              path='/12_Insights'
              component={() => <Page component={Insights} />}
            />
            <Route
              path='/13_Weekly_view'
              component={() => <Page component={WeeklyView} />}
            />
            <Route
              path='/14_Monthly_view'
              component={() => <Page component={MonthlyView} />}
            />
            <Route
              path='/15_Healthcare_providers'
              component={() => <Page component={HealthcareProviders} />}
            />
            <Route
              path='/16_Family_friends'
              component={() => <Page component={FamilyFriends} />}
            />
          </Layout>
        </PageContext.Provider>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
