import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';
import './style.scss';
import Link from '@/Components/03-organisms/Routing/Link/Link';
import { Header } from '@atoms/Content/Header/Header';
import MaintenaLogo from '@/assets/maintena-logo.png';
import { Footer } from '@/Components/03-organisms/Footer/Footer';
import PageContent from './A.3.5.1_Additional';

export default {
  title: "CLM/Pages",
  component: "A.3.5.1_Additional",
  parameters: {
    layout: "fullscreen"
  },
};
const baseClass = 'page--A_3_5_1_Additional';
const content = () => (<div>
    <Header type="h1">The clinical profile of ABILIFY
      ASIMTUFII<sup>®</sup> (aripiprazole) in the treatment of schizophrenia and
      bipolar I disorder is supported in part by the established efficacy and
      safety of ABILIFY MAINTENA® (aripiprazole)</Header>
    <div className={"buttons-group"}>
      <div className={"buttons-group-row"}>
        
        <h2>ABILIFY MAINTENA Efficacy in Schizophrenia and Bipolar I
          Disorder</h2>
        <Link to={"A.3.0_Clinical_profile"}
              custom={"button__type-c button__type-c-large button__type-c-large-blue"}>Overview</Link>
        <Link to={"A.3.1_Clinical_overview"}
              custom={"button__type-c button__type-c-large button__type-c-large-blue"}>PK
          Study</Link>
        <Link to={"A.3.2.1_Efficacy"}
              custom={"button__type-c button__type-c-large button__type-c-large-blue"}>ABILIFY
          MAINTENA® Pivotal Studies</Link>
      </div>
      <div className={"buttons-group-row"}>
        <Link to={"A.3.2.1_Efficacy"}
              custom={"button__type-c button__type-c-large button__type-c-large-blue"}>ABILIFY
          MAINTENA® Pivotal Studies</Link>
      </div>
    </div>
  </div>
);

const Template = () => {
  return <AppStorybook path="A.3.5.1_Additional" components={PageContent} />;
};

export const A_3_5_1_Additional = Template.bind({});
