import React from 'react';
import classNames from 'classnames';

import { Footer } from '@/Components/03-organisms/Footer/Footer';
import Button from '@/Components/01-atoms/Content/Button/Button';
import Header from '@/Components/01-atoms/Content/Header/Header';
import { Modal } from '@templates/Layouts';
import Tabs from '@organisms/Tabs/Tabs';
import Tab from '@organisms/Tabs/Tab';

import CaregiverBurdenImg from './img/CaregiverBurden.png';
import AdditionalInfoImg from './img/AdditionalInfo.png';

import style from './ModalAgitation.modules.scss';

/**
 * Component for modals page https://owp.atlassian.net/browse/DF-33593.
 */

export const ModalAgitation = () => (
  <Modal
    customClass={style.modalRoot}
    withHeader
    withFooter
    header={
      <Header custom='mb-15'>
        Agitation in Alzheimer’s Dementia May Lead to a High <br /> Clinical and
        Economic Burden on Caregivers
      </Header>
    }
    link={<Button text='Caregiver Burden' custom='button__type-a--active' />}
    footer={
      <Footer
        custom={classNames(style.footer, 'mb-17', 'mw-839')}
        footnotes={{
          data: [
            {
              supLeft: '*',
              innerText: (
                <span>
                  Derived a means to calculate an agitation score that reflected
                  elements of the IPA consensus on the definition of agitation.
                  Physicians rated each symptom as not present (0), mild (1),
                  moderate (2), or severe (3), and scores were summed to provide
                  a score between 0 (no symptoms) and 21 (all severe symptoms).
                </span>
              ),
              supRight: '1',
            },
            {
              supLeft: '†',
              innerText: (
                <span>
                  Caregiver burden as measured by the Short Form Zarit Burden
                  Interview (ZBI-12). ZBI-12 scores range from 0 to 48 points
                  and higher scores indicate greater caregiver burden. Scores
                  greater than 20 points have a high degree of burden.
                </span>
              ),
            },
            {
              innerText: (
                <span>
                  AAD, agitation associated with Alzheimer’s dementia; IPA,
                  International Psychogeriatric Association.
                </span>
              ),
              supRight: '1',
            },
          ],
        }}
        references={{
          custom: 'mt-10',
          data: [
            {
              text: (
                <span>
                  Schein J, et al.<b> J Alzheimers Dis. </b>2022;88(2):663-677.
                  2019;5:851-861.
                </span>
              ),
            },
            {
              text: <span>Data on file. Otsuka.</span>,
            },
          ],
        }}
      />
    }
  >
    <Tabs translateTabsX={37} className={style.tabs}>
      <Tab title='Caregiver Burden'>
        <Header type='h2' custom={style.tabHeader}>
          A retrospective analysis of physician and non-professional
          caregiver-reported data was
          <br /> conducted to assess the association of agitation severity
          <sup>⋆</sup> to caregiver burden, health
          <br /> status, and productivity.<sup>1</sup>
        </Header>
        <img
          src={CaregiverBurdenImg}
          alt='Caregiver BurdenImg'
          className={style.imgBodyCaregiver}
        />
      </Tab>
      <Tab title='Additional Information'>
        <Header type='h2' custom={style.tabHeader}>
          Findings from a study on Agitation in Patients with Alzheimer’s
          Dementia and the <br />
          Impact on Caregiver Experience with 250 caregivers of people with AAD
          suggest<sup>2</sup>:
        </Header>
        <img
          src={AdditionalInfoImg}
          alt='Additional Information'
          className={style.imgBodyAdditional}
        />
      </Tab>
    </Tabs>
  </Modal>
);
export default ModalAgitation;
