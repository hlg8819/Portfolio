import React from 'react'
import ProfessionalSkills from './ProfessionalSkills'
import TechnicalSkills from './TechnicalSkills'
import SoftwareSkills from './SoftwareSkills'

const CvSkills = () => {
  return (
    <>
      <TechnicalSkills ID={0} />
      <SoftwareSkills ID={1} />
      <ProfessionalSkills ID={2} />
    </>
  )
}

export default CvSkills