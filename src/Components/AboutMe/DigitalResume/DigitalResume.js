import React, { useEffect } from 'react'
import SectionBar from '../../SectionBar/SectionBar';
import CvSkills from './CvSkills';
import Experience from './Experience';
import Education from './Education';
import Languages from './Languages';
import Certifications from './Certifications';
import Publications from './Publications';
import Extracurricular from './Extracurricular';
import ButtonsCV from './ButtonsCV';

const DigitalResume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      id: 0,
      title: "Technical Skills",
    },
    {
      id: 1,
      title: "Software Proficiency",
    },
    {
      id: 2,
      title: "Professional Skills",
    },
    {
      id: 3,
      title: "Languages",
    },
    {
      id: 4,
      title: "Professional Experience",
    },
    {
      id: 5,
      title: "Education",
    },
    {
      id: 6,
      title: "Certificates",
    },
    {
      id: 7,
      title: "Publications",
    },
    {
      id: 8,
      title: "Extracurricular Activities",
    },
  ]

  return (
    <>
      <SectionBar sections={sections} />
      <div className='centerDivBorder'>
        <div className='title'>
          <span >DIGITAL RESUME</span>
        </div>
      </div>
      <CvSkills />
      <Languages />
      <Experience />
      <Education />
      <Certifications />
      <Publications />
      <Extracurricular />
      <ButtonsCV />
      <br />
    </>
  )
}

export default DigitalResume;