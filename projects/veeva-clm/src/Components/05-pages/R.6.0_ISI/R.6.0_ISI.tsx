import React from 'react';
import styles from './R.6.0_ISI.module.scss';
import Header from '@/Components/01-atoms/Content/Header/Header';
import Paragraph from '@/Components/01-atoms/Content/Paragraph/Paragraph';
import List from '@/Components/01-atoms/Content/List/List';
import Footer from '@/Components/03-organisms/Footer/Footer';

const PageContent: React.FC = () => {
  return (
    <>
      <Header custom='mw-755 mb-8'>
        INDICATIONS and IMPORTANT SAFETY INFORMATION for REXULTI®
        (brexpiprazole)
      </Header>
      <div className={styles.page}>
        <Header custom='font-green-600' type='h3'>
          INDICATIONS
        </Header>
        <Paragraph>REXULTI is indicated for:</Paragraph>
        <List
          content={{
            columns: 'columns-1',
            type: 'circle',
            marker_color: 'black-100',
            data: [
              {
                text: 'Use as an adjunctive therapy to antidepressants for the treatment of major depressive disorder (MDD) in adults',
              },
              {
                text: 'Treatment of schizophrenia in adults and pediatric patients ages 13 years and older',
              },
            ],
          }}
        />
        <Header custom='mt-8 font-green-600' type='h3'>
          IMPORTANT SAFETY INFORMATION
        </Header>
        <Header custom='font-green-600' type='h3'>
          WARNING: INCREASED MORTALITY IN ELDERLY PATIENTS WITH DEMENTIA-RELATED
          PSYCHOSIS
        </Header>
        <Paragraph>
          <strong>
            Elderly patients with dementia-related psychosis treated with
            antipsychotic drugs are at increased risk of death. REXULTI is not
            approved for the treatment of patients with dementia-related
            psychosis.
          </strong>
        </Paragraph>
        <Header custom='font-green-600' type='h3'>
          WARNING: SUICIDAL THOUGHTS AND BEHAVIORS
        </Header>
        <Paragraph>
          <strong>
            Antidepressants increased the risk of suicidal thoughts and
            behaviors in patients aged 24 years and younger. Monitor for
            clinical worsening and emergence of suicidal thoughts and behaviors.
            The safety and effectiveness of REXULTI have not been established in
            pediatric patients with MDD.
          </strong>
        </Paragraph>
        <Paragraph>
          <strong>Contraindication:</strong> In patients with known
          hypersensitivity reaction to brexpiprazole or any of its components.
          Reactions have included: rash, facial swelling, urticaria and
          anaphylaxis.
        </Paragraph>
        <Paragraph>
          <strong>Cerebrovascular Adverse Events, Including Stroke:</strong> In
          clinical trials, elderly patients with dementia randomized to
          risperidone, aripiprazole, and olanzapine had a higher incidence of
          stroke and transient ischemic attack, including fatal stroke. REXULTI
          is not approved for the treatment of patients with dementia-related
          psychosis.
        </Paragraph>
        <Paragraph>
          <strong>Neuroleptic Malignant Syndrome (NMS):</strong> NMS is a
          potentially fatal symptom complex reported in association with
          administration of antipsychotic drugs including REXULTI. Clinical
          signs of NMS are hyperpyrexia, muscle rigidity, altered mental status
          and evidence of autonomic instability. Additional signs may include
          elevated creatinine phosphokinase, myoglobinuria (rhabdomyolysis), and
          acute renal failure. Manage NMS with immediate discontinuation of
          REXULTI, intensive symptomatic treatment, and monitoring.
        </Paragraph>
        <Paragraph>
          <strong>Tardive Dyskinesia (TD):</strong> Risk of TD, and the
          potential to become irreversible, are believed to increase with
          duration of treatment and total cumulative dose of antipsychotic
          drugs. TD can develop after a relatively brief treatment period, even
          at low doses, or after discontinuation of treatment. For chronic
          treatment, use the lowest dose and shortest duration of REXULTI needed
          to produce a clinical response. If signs and symptoms of TD appear,
          drug discontinuation should be considered.
        </Paragraph>
        <Paragraph>
          <strong>Metabolic Changes:</strong> Atypical antipsychotic drugs have
          caused metabolic changes including:
        </Paragraph>
        <List
          content={{
            columns: 'columns-1',
            type: 'circle',
            marker_color: 'green-300',
            data: [
              {
                text: (
                  <span>
                    <strong>Hyperglycemia/Diabetes Mellitus:</strong>
                    Hyperglycemia, in some cases extreme and associated with
                    ketoacidosis or hyperosmolar coma or death, has been
                    reported in patients treated with atypical antipsychotics.
                    Assess fasting plasma glucose before or soon after
                    initiation of antipsychotic medication, and monitor
                    periodically during long-term treatment.
                  </span>
                ),
              },
              {
                text: (
                  <span>
                    <strong>Dyslipidemia:</strong> Atypical antipsychotics cause
                    adverse alterations in lipids. Before or soon after
                    initiation of antipsychotic medication, obtain a fasting
                    lipid profile at baseline and monitor periodically during
                    treatment.
                  </span>
                ),
              },
              {
                text: (
                  <span>
                    <strong>Weight Gain:</strong> Weight gain has been observed
                    in patients treated with REXULTI. Monitor weight at baseline
                    and frequently thereafter.
                  </span>
                ),
              },
            ],
          }}
        />
        <Paragraph>
          <strong>Pathological Gambling and Other Compulsive Behaviors:</strong>{' '}
          Intense urges, particularly for gambling, and the inability to control
          these urges have been reported while taking REXULTI. Other compulsive
          urges have been reported less frequently. Prescribers should ask
          patients or their caregivers about the development of new or intense
          compulsive urges. Consider dose reduction or stopping REXULTI if such
          urges develop.
        </Paragraph>
        <Paragraph>
          <strong>Leukopenia, Neutropenia, and Agranulocytosis:</strong>{' '}
          Leukopenia and neutropenia have been reported with antipsychotics.
          Agranulocytosis (including fatal cases) has been reported with other
          agents in this class. Monitor complete blood count in patients with
          pre-existing low white blood cell count (WBC)/absolute neutrophil
          count or history of drug-induced leukopenia/neutropenia. Discontinue
          REXULTI at the first sign of a clinically significant decline in WBC
          and in severely neutropenic patients.
        </Paragraph>
        <Paragraph>
          <strong>Orthostatic Hypotension and Syncope:</strong> Atypical
          antipsychotics cause orthostatic hypotension and syncope. Generally,
          the risk is greatest during initial dose titration and when increasing
          the dose. Monitor in patients vulnerable to hypotension, and those
          with cardiovascular and cerebrovascular diseases.
        </Paragraph>
        <Paragraph>
          <strong>Falls:</strong> Antipsychotics may cause somnolence, postural
          hypotension, motor and sensory instability, which may lead to falls
          causing fractures or other injuries. For patients with diseases,
          conditions, or medications that could exacerbate these effects,
          complete fall risk assessments when initiating treatment and
          recurrently during therapy.
        </Paragraph>
        <Paragraph>
          <strong>Seizures:</strong> REXULTI may cause seizures and should be
          used with caution in patients with a history of seizures or with
          conditions that lower the seizure threshold.
        </Paragraph>
        <Paragraph>
          <strong>Body Temperature Dysregulation:</strong> Use REXULTI with
          caution in patients who may experience conditions that increase body
          temperature (e.g., strenuous exercise, extreme heat, dehydration, or
          concomitant use with anticholinergics).
        </Paragraph>
        <Paragraph>
          <strong>Dysphagia:</strong> Esophageal dysmotility and aspiration have
          been associated with antipsychotics, including REXULTI, and should be
          used with caution in patients at risk for aspiration.
        </Paragraph>
        <Paragraph>
          <strong>Potential for Cognitive and Motor Impairment:</strong> REXULTI
          has the potential to impair judgment, thinking, or motor skills.
          Patients should not drive or operate hazardous machinery until they
          are reasonably certain REXULTI does not affect them adversely.
        </Paragraph>
        <Paragraph>
          <strong>Concomitant Medication:</strong> Dosage adjustments are
          recommended in patients who are known cytochrome P450 (CYP) 2D6 poor
          metabolizers and in patients taking concomitant CYP3A4 inhibitors or
          CYP2D6 inhibitors or strong CYP3A4 inducers.
        </Paragraph>
        <Paragraph>
          <strong>Most commonly observed adverse reactions:</strong> In clinical
          trials of adults, the most common adverse reactions were:
        </Paragraph>
        <List
          content={{
            columns: 'columns-1',
            type: 'circle',
            marker_color: 'green-300',
            data: [
              {
                text: (
                  <span>
                    <strong>Major Depressive Disorder (MDD)</strong> (adjunctive
                    treatment to antidepressant therapy; 25% incidence and at
                    least twice the rate of placebo for REXULTI vs. placebo):
                    akathisia and weight increased
                  </span>
                ),
              },
              {
                text: (
                  <span>
                    <strong>Schizophrenia</strong> (≥4% incidence and at least
                    twice the rate of placebo for REXULTI vs. placebo): weight
                    increased. Adverse reactions in patients 13 to 17 years of
                    age were generally similar to those observed in adult
                    patients.
                  </span>
                ),
              },
            ],
          }}
        />
        <Paragraph>
          <strong>Dystonia:</strong> Symptoms of dystonia may occur in
          susceptible individuals during the first days of treatment and at low
          doses.
        </Paragraph>
        <Paragraph>
          <strong>Pregnancy:</strong> Adequate and well-controlled studies to
          assess the risks of REXULTI during pregnancy have not been conducted.
          REXULTI should be used during pregnancy only if the benefit justifies
          the risk to the fetus.
        </Paragraph>
        <Paragraph>
          <strong>Lactation:</strong> It is not known if REXULTI is excreted in
          human breast milk. A decision should be made whether to discontinue
          nursing or to discontinue the drug, taking into account the importance
          of the drug to the mother.
        </Paragraph>
        <Paragraph>
          To report SUSPECTED ADVERSE REACTIONS, contact Otsuka America
          Pharmaceutical, Inc. at 1-800-438-9927 or FDA at 1-800-FDA-1088
          (www.fda.gov/medwatch).
        </Paragraph>
        <Paragraph>
          Please see FULL PRESCRIBING INFORMATION, including{' '}
          <strong>BOXED WARNING</strong> in this presentation.
        </Paragraph>
        <Footer
          custom='mw-884'
          safetyInfo={{
            data: [
              {
                text: (
                  <span
                    style={{ display: 'inline-block', marginBottom: '4px' }}
                    className='highlighted'
                  >
                    Please see FULL PRESCRIBING INFORMATION, including BOXED
                    WARNING in this presentation.
                  </span>
                ),
              },
              {
                text: 'FOR USE WITH FORMULARY DECISION-MAKERS ONLY. DO NOT DUPLICATE OR DISTRIBUTE.',
              },
            ],
          }}
        />
      </div>
    </>
  );
};
export default PageContent;
