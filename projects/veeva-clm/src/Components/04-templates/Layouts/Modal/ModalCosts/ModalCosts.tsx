import React from 'react';
import { Footer } from '@/Components/03-organisms/Footer/Footer';
import Button from '@/Components/01-atoms/Content/Button/Button';
import Header from '@/Components/01-atoms/Content/Header/Header';
import { Modal } from '@templates/Layouts';
import classNames from 'classnames';

import tableImg from './img/Costs.png';

import style from './ModalCosts.module.scss';

/**
 * Component for modals page https://owp.atlassian.net/browse/DF-33596.
 */

export const ModalCosts = () => (
  <Modal
    customClass={style.modalRoot}
    withHeader
    withFooter
    header={
      <Header custom='mb-15'>
        Institutionalization of Alzheimer’s Dementia Patients With Agitation Is
        Associated With Increased Healthcare Costs
      </Header>
    }
    link={
      <Button text='Additional Information' custom='button__type-a--active' />
    }
    footer={
      <Footer
        custom={classNames(style.footer, 'mb-23', 'mw-839')}
        footnotes={{
          data: [
            {
              supLeft: '*',
              innerText: (
                <span>
                  6603 individuals (58.2%) were included in the Agitation cohort
                  and 4745 individuals (41.8%) were included in the
                  Agitation-free cohort.
                </span>
              ),
            },
            {
              supLeft: '†',
              innerText: (
                <span>
                  All costs adjusted for inflation and expressed in 2018 US
                  dollars using the Consumer Price Index, Urban All Items
                  component.
                </span>
              ),
              supRight: '1',
            },
            {
              supLeft: '‡',
              innerText: (
                <span>
                  Excess number of individuals with AD in institutionalized
                  settings associated with agitation is based on a 50%
                  prevalence of agitation in institutionalized individuals with
                  AD, total number of individuals with AD in institutionalized
                  and noninstitutionalized settings.
                </span>
              ),
              supRight: '1',
            },
            {
              supLeft: '§',
              innerText: (
                <span>
                  Average annual incremental costs of institutionalization per
                  individual with AD is based on the average annual costs per
                  individual with AD in institutionalized settings and the
                  average annual costs per individual with AD in
                  noninstitutionalized settings.
                </span>
              ),
              supRight: '1',
            },
            {
              supLeft: '‖',
              innerText: (
                <span>
                  Based on Long-term Care Providers and Services Users in the
                  United States: Data From the National Study of Long-term Care
                  Providers, there were 1,021,068 individuals with AD in
                  institutionalized settings (nursing home n=690,329; assisted
                  living facility n=330,739).
                </span>
              ),
              supRight: '1',
            },
            {
              supLeft: '¶',
              innerText: (
                <span>
                  The average annual costs per individual with AD in
                  institutionalized settings is based on an average annual costs
                  of $94,637 per individual with AD in nursing homes and $56,646
                  per individual with AD in assisted living facilities. These
                  costs were derived from the Market Survey of Long-Term Care
                  Costs
                </span>
              ),
              supRight: '1',
            },
          ],
        }}
        references={{
          custom: 'mt-5',
          data: [
            {
              text: (
                <span>
                  Cloutier M, et al. <b>Alzheimers Dement (N Y).</b>
                  2019;5:851-861.
                </span>
              ),
            },
            {
              text: (
                <span>
                  Fillit H, et al. <b>Int J Geriatr Psychiatry.</b>&nbsp;
                  2021;36(12):1959-1969.
                </span>
              ),
            },
          ],
        }}
      />
    }
  >
    <Header type='h3' custom='mb-14'>
      A retrospective analysis of the National Alzheimer’s Coordinating Center
      Uniform Data Set (June 2005 to February
      <br /> 2018) was conducted to assess the incremental costs associated with
      LTC in 11,348 patients with Alzheimer’s dementia
      <br /> with and without agitation.<sup>*1</sup>
    </Header>
    <img src={tableImg} alt='reported table' className={style.imgBody} />
  </Modal>
);
export default ModalCosts;
