import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';
import { Header } from '@atoms/Content/Header/Header';
import { Paragraph } from '@atoms/Content/Paragraph/Paragraph';
import { List } from '@atoms/Content/List/List';
import { Footer } from '@organisms/Footer/Footer';
import './style.scss';
import AsimtufiiLogo from '@assets/asimtufii-logo.png';

export default {
  title: 'CLM/Pages',
  component: 'A.7.0_ISI',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_7_0_ISI_content'],
};

const baseClass = 'page--A_7_0_ISI';

const content = () => (
  <>
    <Header custom='mb-25'>INDICATIONS and IMPORTANT SAFETY INFORMATION</Header>
    <div className={`${baseClass}-wrapper`}>
      <Header type='h3'>INDICATIONS</Header>
      <Paragraph>
        ABILIFY MAINTENA is an atypical antipsychotic indicated for:
      </Paragraph>
      <List
        content={{
          type: 'circle',
          data: [
            {
              text: 'Treatment of schizophrenia in adults',
            },
            {
              text: 'Maintenance monotherapy treatment of bipolar I disorder in adults',
            },
          ],
        }}
      />
      <Header custom='mb-15 mt-15' type='h3'>
        IMPORTANT SAFETY INFORMATION
      </Header>
      <Header custom='mb-10' type='h3'>
        WARNING: INCREASED MORTALITY IN ELDERLY PATIENTS WITH DEMENTIA-RELATED
        PSYCHOSIS
      </Header>
      <Header custom={`${baseClass}-header-2`} type='h2'>
        ELDERLY PATIENTS WITH DEMENTIA-RELATED PSYCHOSIS TREATED WITH
        ANTIPSYCHOTIC DRUGS ARE AT INCREASED RISK OF DEATH (1.6 TO 1.7 TIMES)
        COMPARED TO PLACEBO-TREATED PATIENTS. ABILIFY MAINTENA IS NOT APPROVED
        FOR THE TREATMENT OF PATIENTS WITH DEMENTIA-RELATED PSYCHOSIS.
      </Header>
      <Paragraph>
        <strong>Contraindication:</strong> Known hypersensitivity reaction to
        aripiprazole. Reactions have ranged from pruritus/urticaria to
        anaphylaxis.
      </Paragraph>
      <Paragraph>
        <strong>Cerebrovascular Adverse Events, Including Stroke:</strong>{' '}
        Increased incidence of cerebrovascular adverse events (e.g., stroke,
        transient ischemic attack), including fatalities, have been reported in
        clinical trials of elderly patients with dementia-related psychosis
        treated with oral aripiprazole.
      </Paragraph>
      <Paragraph>
        <strong>Neuroleptic Malignant Syndrome (Nms):</strong> NMS is a
        potentially fatal symptom complex reported in association with
        administration of antipsychotic drugs including ABILIFY MAINTENA.
        Clinical signs of NMS are hyperpyrexia, muscle rigidity, altered mental
        status and evidence of autonomic instability. Additional signs may
        include elevated creatine phosphokinase, myoglobinuria (rhabdomyolysis),
        and acute renal failure. Manage NMS with immediate discontinuation of
        ABILIFY MAINTENA, intensive symptomatic treatment, and monitoring.
      </Paragraph>
      <Paragraph>
        <strong>Tardive Dyskinesia (Td):</strong> Risk of TD, and the potential
        to become irreversible, are believed to increase with duration of
        treatment and total cumulative dose of antipsychotic drugs. TD can
        develop after a relatively brief treatment period, even at low doses, or
        after discontinuation of treatment. Prescribing should be consistent
        with the need to minimize TD. If antipsychotic treatment is withdrawn,
        TD may remit, partially or completely.
      </Paragraph>
      <Paragraph>
        <strong>Metabolic Changes:</strong> Atypical antipsychotic drugs have
        caused metabolic changes including:
      </Paragraph>
      <List
        content={{
          type: 'circle',
          data: [
            {
              text: (
                <span>
                  <strong>Hyperglycemia/Diabetes Mellitus:</strong>{' '}
                  Hyperglycemia, in some cases extreme and associated with
                  ketoacidosis, hyperosmolar coma, or death, has been reported
                  in patients treated with atypical antipsychotics including
                  aripiprazole. Patients with diabetes mellitus should be
                  regularly monitored for worsening of glucose control; those
                  with risk factors for diabetes (e.g., obesity, family history
                  of diabetes), should undergo baseline and periodic fasting
                  blood glucose testing. Any patient treated with atypical
                  antipsychotics should be monitored for symptoms of
                  hyperglycemia including polydipsia, polyuria, polyphagia, and
                  weakness. Patients who develop symptoms of hyperglycemia
                  should also undergo fasting blood glucose testing. In some
                  cases, hyperglycemia has resolved when the atypical
                  antipsychotic was discontinued; however, some patients
                  required continuation of anti-diabetic treatment despite
                  discontinuation of the suspect drug.
                </span>
              ),
            },
            {
              text: (
                <span>
                  <strong>Dyslipidemia:</strong> Undesirable alterations in
                  lipids have been observed in patients treated with atypical
                  antipsychotics.
                </span>
              ),
            },
            {
              text: (
                <span>
                  <strong>Weight Gain:</strong> Weight gain has been observed
                  with atypical antipsychotic use. Clinical monitoring of weight
                  is recommended.
                </span>
              ),
            },
          ],
        }}
      />
      <Paragraph>
        <strong>Pathological Gambling And Other Compulsive Behaviors:</strong>{' '}
        Intense urges, particularly for gambling, and the inability to control
        these urges have been reported while taking aripiprazole. Other
        compulsive urges have been reported less frequently. Prescribers should
        ask patients or their caregivers about the development of new or intense
        compulsive urges. Consider dose reduction or stopping aripiprazole if
        such urges develop.
      </Paragraph>
      <Paragraph>
        <strong>Orthostatic Hypotension:</strong> ABILIFY MAINTENA may cause
        orthostatic hypotension and should be used with caution in patients with
        known cardiovascular disease, cerebrovascular disease, or conditions
        which would predispose them to hypotension.
      </Paragraph>
      <Paragraph>
        <strong>Falls:</strong> Antipsychotics may cause somnolence, postural
        hypotension, motor and sensory instability, which may lead to falls
        causing fractures or other injuries. For patients with diseases,
        conditions, or medications that could exacerbate these effects, complete
        fall risk assessments when initiating treatment and recurrently during
        therapy.
      </Paragraph>
      <Paragraph>
        <strong>Leukopenia, Neutropenia, And Agranulocytosis:</strong>{' '}
        Leukopenia, neutropenia and agranulocytosis have been reported with
        antipsychotics. Monitor complete blood count in patients with
        pre-existing low white blood cell count (WBC)/absolute neutrophil count
        or history of drug-induced leukopenia/neutropenia. Discontinue ABILIFY
        MAINTENA at the first sign of a clinically significant decline in WBC
        and in severely neutropenic patients.
      </Paragraph>
      <Paragraph>
        <strong>Seizures:</strong> ABILIFY MAINTENA should be used with caution
        in patients with a history of seizures or with conditions that lower the
        seizure threshold.
      </Paragraph>
      <Paragraph>
        <strong>Potential For Cognitive And Motor Impairment:</strong> ABILIFY
        MAINTENA may impair judgment, thinking, or motor skills. Instruct
        patients to avoid operating hazardous machinery, including automobiles,
        until they are certain ABILIFY MAINTENA does not affect them adversely.
      </Paragraph>
      <Paragraph>
        <strong>Body Temperature Regulation:</strong> Use ABILIFY MAINTENA with
        caution in patients who may experience conditions that increase body
        temperature (e.g., strenuous exercise, extreme heat, dehydration, or
        concomitant use with anticholinergics).
      </Paragraph>
      <Paragraph>
        <strong>Dysphagia:</strong> Esophageal dysmotility and aspiration have
        been associated with ABILIFY MAINTENA. Use caution in patients at risk
        for aspiration pneumonia.
      </Paragraph>
      <Paragraph>
        <strong>Alcohol:</strong> Advise patients to avoid alcohol while taking
        ABILIFY MAINTENA.
      </Paragraph>
      <Paragraph>
        <strong>Concomitant Medication:</strong> Dosage adjustments are
        recommended in patients who are CYP2D6 poor metabolizers and in patients
        taking concomitant CYP3A4 inhibitors or CYP2D6 inhibitors for greater
        than 14 days. Avoid concomitant use of CYP3A4 inducers with ABILIFY
        MAINTENA for greater than 14 days. Dosage adjustments are not
        recommended for patients with concomitant use of CYP3A4 inhibitors,
        CYP2D6 inhibitors or CYP3A4 inducers for less than 14 days.
      </Paragraph>
      <Paragraph>
        <strong>Most Commonly Observed Adverse Reactions:</strong> The most
        commonly observed adverse reactions with ABILIFY MAINTENA in patients
        with schizophrenia (incidence ≥5% and at least twice that for placebo)
        were increased weight, akathisia, injection site pain, and sedation.
      </Paragraph>
      <Paragraph>
        <strong>Injection Site Reactions:</strong> In a short-term, clinical
        trial with ABILIFY MAINTENA in patients with schizophrenia treated with
        gluteal administered ABILIFY MAINTENA, the percent of patients reporting
        any injection site-related adverse reaction was 5.4%, and 0.6% for
        placebo. In an open label study of ABILIFY MAINTENA administered in the
        deltoid or gluteal muscle, injection site pain was observed at
        approximately equal rates.
      </Paragraph>
      <Paragraph>
        <strong>Dystonia:</strong> Symptoms of dystonia may occur in susceptible
        individuals during the first days of treatment and at low doses.
      </Paragraph>
      <Paragraph>
        <strong>Pregnancy:</strong> Neonates exposed to antipsychotic drugs,
        including ABILIFY MAINTENA, during the third trimester of pregnancy are
        at risk for extrapyramidal and/or withdrawal symptoms. Consider the
        benefits and risks of ABILIFY MAINTENA and possible risks to the fetus
        when prescribing ABILIFY MAINTENA to a pregnant woman. Advise pregnant
        women of potential fetal risk.
      </Paragraph>
      <Paragraph>
        <strong>Lactation:</strong> Aripiprazole is present in human breast
        milk. A decision should be made whether to discontinue nursing or to
        discontinue the drug, taking into account the importance of the drug to
        the mother and any potential risks to the infant.
      </Paragraph>
      <Paragraph>
        To report SUSPECTED ADVERSE REACTIONS, contact Otsuka America
        Pharmaceutical, Inc. at 1-800-438-9927 or FDA at 1-800-FDA-1088
        (www.fda.gov/medwatch).
      </Paragraph>
    </div>
    <Footer
      custom='bottom-5'
      safetyInfo={{
        data: [
          {
            text: (
              <span>
                Please see{' '}
                <a href='/' className='blue-500'>
                  IMPORTANT SAFETY INFORMATION
                </a>{' '}
                in this presentation.
              </span>
            ),
          },
          {
            text: 'FOR USE WITH FORMULARY DECISION-MAKERS ONLY. DO NOT DUPLICATE OR DISTRIBUTE. ',
          },
        ],
      }}
      image={<img src={AsimtufiiLogo} alt='asimtufii-logo' width='142.5' />}
    />
  </>
);

const Template = () => {
  return <AppStorybook path='A.7.0_ISI' components={content} />;
};

export const A_7_0_ISI = Template.bind({});
export const A_7_0_ISI_content = content.bind({});
