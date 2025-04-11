import React from 'react'
import ProfessionalSkills from './ProfessionalSkills'
import TechnicalSkills from './TechnicalSkills'
import SoftwareSkills from './SoftwareSkills'

const CvSkills = () => {
  return (
    <>
      <ProfessionalSkills ID={0} />
      <TechnicalSkills ID={1} />
      <SoftwareSkills ID={2} />
    </>
  )
}

export default CvSkills