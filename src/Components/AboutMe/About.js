//#region IMPORTS
//*REACT
import React, { useEffect } from 'react';
//*ADDONS
import { useNavigate } from 'react-router-dom';
//*CSS
import './about.css';
//*FILES
import ImgMe1 from '../../Assets/Me1.png';
import ImgMe2 from '../../Assets/Me2.png';
import Resume from '../../Assets/HECTOR LOPEZ GONZALEZ RESUME.pdf'
//#endregion

const About = () => {
  //#region VARIABLES
  let navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //#endregion

  //#region FUNCTIONS
  //*Creates link to download Resume
  const downloadResume = () => {
    const dLink = document.createElement("a");
    dLink.href = Resume;
    dLink.download = "HECTOR LOPEZ GONZALEZ RESUME.pdf";
    document.body.appendChild(dLink);
    dLink.click();
    document.body.removeChild(dLink);
  }
  //#endregion

  //#region HTML
  return (
    <>
      <div className='centerDiv'>
        <span className='title'>ABOUT ME</span>
      </div>
      <div className='containerH'>
        <div className='divImgPR'>
          <img src={ImgMe1} alt='Me1' className='aboutImg' />
        </div>
        <p>
          I'm Hector Lopez Gonzalez, a Mechatronics Engineer originally from Mexico City and currently based in the captivating city of Gold Coast, Australia.
          From a young age, my fascination with disassembling and reassembling objects to understand their inner workings ignited my passion for engineering.
          My journey in this field began with a thirst for knowledge and a desire to make an impact on the world through technology.
          I thrive on pushing myself and exploring uncharted territories to bring cutting-edge ideas to life.
          <br /><br />
          I hold a Master of Science in Engineering, where I achieved a stellar 9.9/10 GPA and received an honorable mention for my thesis.
          Additionally, I earned a Bachelor of Mechatronics and Production Engineering with a remarkable 9.2/10 GPA, earning the highest awards for
          academic excellence and an honorable mention. I am deeply committed to excellence and innovation.
          <br /><br />
        </p>
      </div>
      <div className='containerH'>
        <div className='divImgPL'>
          <img src={ImgMe2} alt='Me2' className='aboutImg' />
        </div>
        <p>
          Beyond engineering, one of my biggest passions is football. Having played professionally in the third division in Mexico for six years, I've learned to be disciplined,
          perseverant, and to work as a team, both on and off the pitch. Someday, I hope to be able to combine both of my passions and make the beautiful game even better with technlogy.
          <br /><br />
          My curiosity and desire for adventure drive me to approach each day and task with an open mind, creativity, and patience.
          Research projects have been a constant companion in my academic and professional life, fueling my creativity and drive to solve problems.
          <br /><br /><br /><br />
        </p>
        <div className='divBtn'>
          <button href={'/contact'} className='regularBtn' onClick={() => { navigate("/contact") }}>CONTACT ME</button>
          <button className='regularBtn' onClick={() => { downloadResume() }}>DOWNLOAD RESUME</button>
          <button href={'/digitalcv'} className='regularBtn' onClick={() => { navigate("/digitalcv") }}>DIGITAL RESUME</button>
        </div>
      </div>

    </>
  )
  //#endregion
}

export default About