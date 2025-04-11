//#region IMPORTS
//*React
import React from 'react';
//*Css
import './intro.css';
//*Files
import Logo from '../../../Assets/MyLogo.png';
import Resume from '../../../Assets/HECTOR LOPEZ GONZALEZ RESUME.pdf'
import { useNavigate } from 'react-router-dom';
//#endregion

const Intro = () => {
  //#region HOOKS
  let navigate = useNavigate();
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
    <div id='0' className='introduction'>
      <div className='divImg'>
        <img alt="LogoHlgIntro" src={Logo} className='introImg' />
      </div>
      <div className='divText'>
        <span className='hello'>Hello! I am</span>
        <br />
        <span className='introName'>HECTOR LOPEZ GONZALEZ</span>
        <br />
        <div className='textmech'>
          <span>Mechatronics Engineer</span>
        </div>
        <br />
        <p className='introText'>
          Innovative and results-driven Mechatronics Engineer with over 5 years' experience in process control, embedded systems and virtual reality. Expertise in industrial automation, software development, and implementing cutting-edge technologies to develop complex systems that enhance productivity and efficiency. Proven track record of leading cross-functional teams, exceptional problem-solving abilities and thriving in high-pressure environments. Committed to leveraging advanced engineering skills to develop innovative solutions in mechatronics and related fields.<br /><br />
          I invite you to explore my portfolio to learn more about my projects and experiences. If you are interested in hiring me, discussing relevant topics, collaborating on projects, or exploring professional opportunities, please feel free to contact me.<br /><br />
          I look forward to the possibility of working together soon!
        </p>
        <div className='divBtn'>
          <button className='regularBtn' href='/about' onClick={() => { navigate("/about") }}>FIND OUT MORE</button>
          <button className='regularBtn' onClick={() => downloadResume()}>DOWNLOAD RESUME</button>
          <button className='regularBtn' href={'/contact'} onClick={() => { navigate("/contact") }}>CONTACT ME</button>
        </div>
      </div>
    </div>
  )
  //#endregion
}

export default Intro;