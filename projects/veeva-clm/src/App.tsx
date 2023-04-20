import React, { Suspense, useState } from 'react';
import { Route } from '@organisms';
import { Page, ErrorBoundary } from '@pages';
import Layout from '@/Components/04-templates/Layouts/Layout/Layout';
import { PageProvider } from '@/context/PageContext';
import { ISIModalProvider } from '@/context/ISIModalContext';
import './App.scss';

import A_0_Home from '@/content/pages/A.0.Home/index.mdx';
import A_1_0_Executive_summary from '@/content/pages/A.1.0_Executive_summary/index.mdx';
import A_2_1_1_S_Overview from '@/content/pages/A.2.1.1_S_Overview/index.mdx';
import A_2_1_2_S_Overview from '@/content/pages/A.2.1.2_S_Overview/index.mdx';
import A_2_1_3_S_Overview from '@/content/pages/A.2.1.3_S_Overview/index.mdx';
import A_2_2_1_B_Overview from '@/content/pages/A.2.2.1_B_Overview/index.mdx';
import A_2_2_2_B_Overview from '@/content/pages/A.2.2.2_B_Overview/index.mdx';
import A_2_2_3_B_Overview from '@/content/pages/A.2.2.3_B_Overview/index.mdx';
import A_2_3_1_LAIs from '@/content/pages/A.2.3.1_LAIs/index.mdx';
import A_2_3_2_LAIs from '@/content/pages/A.2.3.2_LAIs/index.mdx';
import A_2_4_Summary from '@/content/pages/A.2.4_Summary/index.mdx';
import A_3_0_Clinical_profile from '@/content/pages/A.3.0_Clinical_profile/index.mdx';
import A_3_1_1_Overview from '@/content/pages/A.3.0_Clinical_profile/index.mdx';
import A_3_1_Clinical_overview from '@/content/pages/A.3.1_Clinical_overview/index.mdx';
import A_3_2_1_Efficacy from '@/content/pages/A.3.2.1_Efficacy/index.mdx';
import A_3_2_2_Efficacy from '@/content/pages/A.3.2.2_Efficacy/index.mdx';
import A_3_2_3_Efficacy from '@/content/pages/A.3.2.3_Efficacy/index.mdx';
import A_3_3_1_Safety from '@/content/pages/A.3.3.1_Safety/index.mdx';
import A_3_3_2_Safety from '@/content/pages/A.3.3.2_Safety/index.mdx';
import A_3_3_3_Safety from '@/content/pages/A.3.3.3_Safety/index.mdx';
import A_3_3_4_Safety from '@/content/pages/A.3.3.4_Safety/index.mdx';
import A_3_4_Dosing from '@/content/pages/A.3.4_Dosing/index.mdx';
import A_3_5_1_Additional from '@/content/pages/A.3.5.1_Additional/index.mdx';
import A_3_5_2_Additional from '@/content/pages/A.3.5.2_Additional/index.mdx';
import A_3_5_3_Additional from '@/content/pages/A.3.5.3_Additional/index.mdx';
import A_3_5_4_Additional from '@/content/pages/A.3.5.4_Additional/index.mdx';
import A_3_5_5_Additional from '@/content/pages/A.3.5.5_Additional/index.mdx';
import A_4_0_Economic_value from '@/content/pages/A.4.0_Economic_value/index.mdx';
import A_5_1_Patients_support_providers from '@/content/pages/A.5.1_Patients_support_providers/index.mdx';
import A_5_2_Patients_support_providers from '@/content/pages/A.5.2_Patients_support_providers/index.mdx';
import A_6_1_1_Appendix_Safety from '@/content/pages/A.6.1.1_Appendix_Safety/index.mdx';
import A_6_2_Apendix_MOA from '@/content/pages/A.6.2_Apendix_MOA/index.mdx';
import A_6_3_X_Apendix_Safety from '@/content/pages/A.6.3.X_Apendix_Safety/index.mdx';
import A_7_0_ISI from '@/content/pages/A.7.0_ISI/index.mdx';

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
                component={() => <Page background='b' component={A_0_Home} />}
              />
              <Route
                path='/A.0.Home'
                component={() => <Page background='b' component={A_0_Home} />}
              />
              <Route
                path='/A.1.0_Executive_summary'
                component={() => <Page component={A_1_0_Executive_summary} />}
              />
              <Route
                path='/A.2.1.1_S_Overview'
                component={() => <Page component={A_2_1_1_S_Overview} />}
              />
              <Route
                path='/A.2.1.2_S_Overview'
                component={() => <Page component={A_2_1_2_S_Overview} />}
              />
              <Route
                path='/A.2.1.3_S_Overview'
                component={() => <Page component={A_2_1_3_S_Overview} />}
              />
              <Route
                path='/A.2.2.1_B_Overview'
                component={() => <Page component={A_2_2_1_B_Overview} />}
              />
              <Route
                path='/A.2.2.2_B_Overview'
                component={() => <Page component={A_2_2_2_B_Overview} />}
              />
              <Route
                path='/A.2.2.3_B_Overview'
                component={() => <Page component={A_2_2_3_B_Overview} />}
              />
              <Route
                path='/A.2.3.1_LAIs'
                component={() => <Page component={A_2_3_1_LAIs} />}
              />
              <Route
                path='/A.2.3.2_LAIs'
                component={() => <Page component={A_2_3_2_LAIs} />}
              />
              <Route
                path='/A.2.4_Summary'
                component={() => <Page component={A_2_4_Summary} />}
              />
              <Route
                path='/A.3.0_Clinical_profile'
                component={() => (
                  <Page background='a' component={A_3_0_Clinical_profile} />
                )}
              />
              <Route
                path='/A.3.1.1_Overview'
                component={() => (
                  <Page background='a' component={A_3_1_1_Overview} />
                )}
              />
              <Route
                path='/A.3.1_Clinical_overview'
                component={() => <Page component={A_3_1_Clinical_overview} />}
              />
              <Route
                path='/A.3.2.1_Efficacy'
                component={() => <Page component={A_3_2_1_Efficacy} />}
              />
              <Route
                path='/A.3.2.2_Efficacy'
                component={() => <Page component={A_3_2_2_Efficacy} />}
              />
              <Route
                path='/A.3.2.3_Efficacy'
                component={() => <Page component={A_3_2_3_Efficacy} />}
              />
              <Route
                path='/A.3.3.1_Safety'
                component={() => <Page component={A_3_3_1_Safety} />}
              />
              <Route
                path='/A.3.3.2_Safety'
                component={() => <Page component={A_3_3_2_Safety} />}
              />
              <Route
                path='/A.3.3.3_Safety'
                component={() => <Page component={A_3_3_3_Safety} />}
              />
              <Route
                path='/A.3.3.4_Safety'
                component={() => <Page component={A_3_3_4_Safety} />}
              />
              <Route
                path='/A.3.4_Dosing'
                component={() => <Page component={A_3_4_Dosing} />}
              />
              <Route
                path='/A.3.5.1_Additional'
                component={() => <Page component={A_3_5_1_Additional} />}
              />
              <Route
                path='/A.3.5.2_Additional'
                component={() => <Page component={A_3_5_2_Additional} />}
              />
              <Route
                path='/A.3.5.3_Additional'
                component={() => <Page component={A_3_5_3_Additional} />}
              />
              <Route
                path='/A.3.5.4_Additional'
                component={() => <Page component={A_3_5_4_Additional} />}
              />
              <Route
                path='/A.3.5.5_Additional'
                component={() => <Page component={A_3_5_5_Additional} />}
              />
              <Route
                path='/A.4.0_Economic_value'
                component={() => <Page component={A_4_0_Economic_value} />}
              />
              <Route
                path='/A.5.1_Patients_support_providers'
                component={() => (
                  <Page component={A_5_1_Patients_support_providers} />
                )}
              />
              <Route
                path='/A.5.2_Patients_support_providers'
                component={() => (
                  <Page component={A_5_2_Patients_support_providers} />
                )}
              />
              <Route
                path='/A.6.1.1_Appendix_Safety'
                component={() => (
                  <Page background='a' component={A_6_1_1_Appendix_Safety} />
                )}
              />
              <Route
                path='/A.6.2_Apendix_MOA'
                component={() => <Page component={A_6_2_Apendix_MOA} />}
              />
              <Route
                path='/A.6.3.X_Apendix_Safety'
                component={() => <Page component={A_6_3_X_Apendix_Safety} />}
              />
              <Route
                path='/A.7.0_ISI'
                component={() => <Page component={A_7_0_ISI} />}
              />
            </Layout>
          </ISIModalProvider>
        </PageProvider>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
