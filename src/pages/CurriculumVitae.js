import React from 'react';
import data from '../data/CVData.json';

const CurriculumVitae = () => {
  const { workExperience, education } = data;
  return (
    <>
      <main>
      <section className="work-experience">
        <h2>Work Experience</h2>
        <ul>
          {}
          {workExperience.map((exp, index) => (
            <li key={index}>
              <strong>{exp.position} | {exp.employer}</strong><br />
              <em>{exp.duration}</em><br />
              {exp.responsibilities}
            </li>
          ))}
        </ul>
      </section>
      <section className="education">
        <h2>Education</h2>
        <ul>
          {}
          {education.map((edu, index) => (
            <li key={index}>
              <strong>{edu.degree} | {edu.institution}</strong><br />
              <em>{edu.duration}</em><br />
              {edu.details}
            </li>
          ))}
        </ul>
      </section>
      </main>
    </>
  )
}

export default CurriculumVitae;