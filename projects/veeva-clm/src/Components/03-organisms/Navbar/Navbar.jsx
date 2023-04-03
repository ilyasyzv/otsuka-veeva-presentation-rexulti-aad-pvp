import React from 'react';
import { LinkGroup } from '@organisms/Routing/LinkGroup/LinkGroup';
import HomeIcon from './img/home-icon.png?format=webp';
import './Navbar.scss';
import Link from '@organisms/Routing/Link/Link';

export const mainMenu = {
  type: 'main',
  data: [
    {
      name: 'Executive Summary',
      url: '/R.1.0_Executive_summary',
    },
    {
      name: 'AAD Overview',
      url: '/R.2.0_AAD_overview',
      children: [
        {
          name: 'Old home',
          url: '/02_Home',
        },
        {
          name: 'old dayly',
          url: '/03_Daily_checkin',
        },
        {
          name: 'Justin',
          url: '/R.2.3_Patient_profile_Justin',
        },
      ],
    },
    {
      name: 'Clinical Profile for Rexulti',
      url: '/R.3.0_Efficacy',
      children: [
        {
          name: 'Full Study Design',
          url: '/R.3.1_Efficacy_full_study_design',
        },
        {
          name: 'Secondary Endpoint',
          url: '/R.3.3_Key_secondary_endpoint',
        },
        {
          name: 'Post-hoc Analysis',
          url: '/R.3.2_Efficacy_post_hoc_analysis',
        },
      ],
    },
    {
      name: 'Otsuka patient support',
      url: '/R.4.1_Adverse_reactions',
      children: [
        {
          name: 'Adverse Reactions',
          url: '/R.4.1_Adverse_reactions',
        },
        {
          name: 'Discontinuation Rates',
          url: '/R.4.2_Discontinuation_rates',
        },
        {
          name: 'Short- and Long-term Safety Data',
          url: '/R.4.3_Short_and_long_term_safety_data',
        },
      ],
    },
    {
      name: 'Appendix',
      url: '/R.5.0_Dosing',
    },
    {
      name: 'ISI',
      url: '/R.6.0_Saving_and_coverage',
      children: [
        {
          name: [
            'Post-clinical',
            <br />,
            'conviction:',
            <br />,
            'OPS Overview',
          ],
          url: 'R.6.1_Post_clinical_conviction',
        },
      ],
    },
  ],
};

export const Navbar = () => {
  return (
    <div className='navigation'>
      <Link to='R.0.0_Home'>
        <img src={HomeIcon.src} alt="home icon"/>
      </Link>

      <ul className='main-nav'>
        {mainMenu.data.map((link, i) => (
            <LinkGroup linkGroup={link} key={i} />
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
