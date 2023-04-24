import React, { Suspense, useState } from 'react';
import { Route } from '@organisms';
import { ErrorBoundary, Page } from '@pages';
import Layout from '@/Components/04-templates/Layouts/Layout/Layout';
import { PageProvider } from '@/context/PageContext';
import { ISIModalProvider } from '@/context/ISIModalContext';
import './App.scss';

import R_0_0_Home from '@/content/pages/R.0.0_Home/index.mdx';
import R_0_1_Popup_isi from '@/content/pages/R.0.1_Popup_isi/index.mdx';
import R_1_0_Executive_summary from '@/content/pages/R.1.0_Executive_summary/index.mdx';
import R_2_1_AAD_Overview from '@/content/pages/R.2.1_AAD_Overview/index.mdx';
import R_3_0_Clinical_profile from '@/content/pages/R.3.0_Clinical_profile/index.mdx';
import R_3_1_Mechanism_of_action from '@/content/pages/R.3.1_Mechanism_of_action/index.mdx';
import R_3_2_Clinical_studies_overview from '@/content/pages/R.3.2_Clinical_studies_overview/index.mdx';
import R_3_3_1_Study_6 from '@/content/pages/R.3.3.1_Study_6/index.mdx';
import R_3_4_1_Study_7 from '@/content/pages/R.3.4.1_Study_7/index.mdx';
import R_3_5_Study_6_and_7_safety from '@/content/pages/R.3.5_Study_6&7_safety/index.mdx';
import R_3_6_Dosing from '@/content/pages/R.3.6_Dosing/index.mdx';
import R_3_7_Summary from '@/content/pages/R.3.7_Summary/index.mdx';
import R_4_0_Patient_support from '@/content/pages/R.4.0_Patient_support/index.mdx';
import R_5_0_Appendix from '@/content/pages/R.5.0_Appendix/index.mdx';
import R_6_0_ISI from '@/content/pages/R.6.0_ISI/index.mdx';
import R_2_2_AAD_Reported from '@/content/pages/R.2.2_AAD_Reported/index.mdx';
import R_2_3_AAD_Underlying from '@/content/pages/R.2.3_AAD_Underlying/index.mdx';
import R_2_2_AAD_Overview from '@/content/pages/R.2.2_AAD_Overview/index.mdx';
import R_2_3_AAD_Overview from '@/content/pages/R.2.3_AAD_Overview/index.mdx';
import R_2_4_AAD_Overview from '@/content/pages/R.2.4_AAD_Overview/index.mdx';
import R_2_5_AAD_Overview from '@/content/pages/R.2.5_AAD_Overview/index.mdx';
import R_2_6_AAD_Overview from '@/content/pages/R.2.6_AAD_Overview/index.mdx';
import R_2_7_AAD_Overview from '@/content/pages/R.2.7_AAD_Overview/index.mdx';
import R_3_3_2_Study_6 from '@/content/pages/R.3.3.2_Study_6/index.mdx';
import R_3_3_3_Study_6 from '@/content/pages/R.3.3.3_Study_6/index.mdx';
import R_3_4_2_Study_7 from '@/content/pages/R.3.4.2_Study_7/index.mdx';
import R_3_4_3_Study_7 from '@/content/pages/R.3.4.3_Study_7/index.mdx';

type AppProps = {
  tab: string;
};

function App({ tab }: AppProps) {
  const [currentPage, setCurrentPage] = useState<string>(tab);
  return (
    <ErrorBoundary>
      <Suspense fallback={<h1>Loading application...</h1>}>
        <PageProvider currPage={currentPage}>
          <ISIModalProvider>
            <Layout>
              <Route
                path='/01_Launch_screen'
                component={() => <Page background='a' component={R_0_0_Home} />}
              />
              <Route
                path='/R.0.0_Home'
                component={() => <Page component={R_0_0_Home} />}
              />
              <Route
                path='/R.0.1_Popup_isi'
                component={() => <Page component={R_0_1_Popup_isi} />}
              />
              <Route
                path='/R.1.0_Executive_summary'
                component={() => <Page component={R_1_0_Executive_summary} />}
              />
              <Route
                path='/R.2.1_AAD_Overview'
                component={() => <Page component={R_2_1_AAD_Overview} />}
              />
              <Route
                path='/R.2.2_AAD_Reported'
                component={() => <Page component={R_2_2_AAD_reported} />}
              />
              <Route
                path='/R.2.3_AAD_Underlying'
                component={() => <Page component={R_2_3_AAD_Underlying} />}
              />
              <Route
                path='/R.3.0_Clinical_profile'
                component={() => (
                  <Page background='b' component={R_3_0_Clinical_profile} />
                )}
              />
              <Route
                path='/R.3.1_Mechanism_of_action'
                component={() => <Page component={R_3_1_Mechanism_of_action} />}
              />
              <Route
                path='/R.3.2_Clinical_studies_overview'
                component={() => (
                  <Page component={R_3_2_Clinical_studies_overview} />
                )}
              />
              <Route
                path='/R.3.3.1_Study_6'
                component={() => <Page component={R_3_3_1_Study_6} />}
              />
              <Route
                path='/R.3.4.1_Study_7'
                component={() => <Page component={R_3_4_1_Study_7} />}
              />
              <Route
                path='/R.3.5_Study_6&7_safety'
                component={() => (
                  <Page component={R_3_5_Study_6_and_7_safety} />
                )}
              />
              <Route
                path='/R.3.6_Dosing'
                component={() => <Page component={R_3_6_Dosing} />}
              />
              <Route
                path='/R.3.7_Summary'
                component={() => <Page component={R_3_7_Summary} />}
              />
              <Route
                path='/R.4.0_Patient_support'
                component={() => <Page component={R_4_0_Patient_support} />}
              />
              <Route
                path='/R.5.0_Appendix'
                component={() => <Page component={R_5_0_Appendix} />}
              />
              <Route
                path='/R.6.0_ISI'
                component={() => <Page component={R_6_0_ISI} />}
              />
              <Route
                path='/R.2.2_AAD_Overview'
                component={() => <Page component={R_2_2_AAD_Overview} />}
              />
              <Route
                path='/R.2.3_AAD_Overview'
                component={() => <Page component={R_2_3_AAD_Overview} />}
              />
              <Route
                path='/R.2.4_AAD_Overview'
                component={() => <Page component={R_2_4_AAD_Overview} />}
              />
              <Route
                path='/R.2.5_AAD_Overview'
                component={() => <Page component={R_2_5_AAD_Overview} />}
              />
              <Route
                path='/R.2.6_AAD_Overview'
                component={() => <Page component={R_2_6_AAD_Overview} />}
              />
              <Route
                path='/R.2.7_AAD_Overview'
                component={() => <Page component={R_2_7_AAD_Overview} />}
              />
              <Route
                path='/R.3.3.2_Study_6'
                component={() => <Page component={R_3_3_2_Study_6} />}
              />
              <Route
                path='/R.3.3.3_Study_6'
                component={() => <Page component={R_3_3_3_Study_6} />}
              />
              <Route
                path='/R.3.4.2_Study_7'
                component={() => <Page component={R_3_4_2_Study_7} />}
              />
              <Route
                path='/R.3.4.3_Study_7'
                component={() => <Page component={R_3_4_3_Study_7} />}
              />
            </Layout>
          </ISIModalProvider>
        </PageProvider>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
