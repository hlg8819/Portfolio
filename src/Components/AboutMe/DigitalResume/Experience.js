import React from 'react';
import IberoLogo from '../../../Assets/IberoLogo.png';
import UltrasistLogo from '../../../Assets/UltrasistLogo.png';
import AllRobotLogo from '../../../Assets/AllRobot.png';
import MyLogo from '../../../Assets/MyLogo.png';
import iOpenLogo from '../../../Assets/iOpenLogo.png';

const Experience = () => {
  const jobs = [
    {
      company: "All Robot",
      city: "Mexico City, Mexico",
      roles: ["EMBEDDED AND PROCESS CONTROL SYSTEMS ENGINEER"],
      iniDate: ["April/2019"],
      finDate: ["December/2020"],
      summary: [
        <span>
          •	Implemented process control systems, developed embedded software, programmed PLCs, selected and installed sensors and actuators, and designed mechanical parts for a 9 modules automation testing system and developed embedded software for 2 courses for professionals in the automotive industry.<br />
        </span>
      ],
      logo: AllRobotLogo,
      altLogo: "AllRobotLogo",
      url: "https://www.allrobot.com.mx",
    },
    {
      company: "Freelance (self-employed)",
      city: "Mexico City, Mexico",
      roles: ["EMBEDDED AND PROCESS CONTROL SYSTEMS ENGINEER"],
      iniDate: ["April/2020"],
      finDate: ["June/2022"],
      summary: [
        <span>
          •	Managed client relationships, designed process control systems, developed embedded software, programmed PLCs, designed mechanical parts, created prototypes and led teams to deliver multiple successful projects.<br /><br />
          •	Increased the productivity of an industrial face mask production system by 100% and installed 17 drone port systems across Mexico.<br />
        </span>
      ],
      logo: MyLogo,
      altLogo: "MyLogo",
      url: "/",
    },
    {
      company: "Ultrasist S.A. de C.V",
      city: "Mexico City, Mexico",
      roles: [
        "SENIOR SOFTWARE ENGINEER",
        "LEAD FRONTEND ENGINEER"
      ],
      iniDate: [
        "July/2022",
        "March/2023"
      ],
      finDate: [
        "March/2023",
        "December/2023"
      ],
      summary: [
        <span>
          •	Developed APIs in C# and contributed to front-end development using React.Js.<br /><br />
          •	Successfully delivered 2 confidential projects in 50% of the allocated time.
        </span>,
        <span>
          •	Led a team of 6 programmers to deliver 2 web applications, conducted client meetings, managed client relationships, delegated tasks and developed front-end solutions using React.Js.<br /><br />
          •	Achieved a 50% increase in front-end performance through optimized code and user interface enhancements.<br />
        </span>
      ],
      logo: UltrasistLogo,
      altLogo: "UltrasistLogo",
      url: "https://www.ultrasist.mx/ultrasite/",
    },
    {
      company: "Universidad Iberoamericana",
      city: "Mexico City, Mexico",
      roles: [
        "UNDERGRADUATE RESEARCH ASSISTANT",
        "POSTGRADUATE RESEARCH ASSISTANT",
        "UNIVERSITY LECTURER"
      ],
      iniDate: [
        "August/2015",
        "January/2020",
        "January/2022"
      ],
      finDate: [
        "January/2020",
        "March/2022",
        "December/2023"
      ],
      summary: [
        <span>
          •	Programmed and implemented embedded systems for robotics and multi-agent systems for the Institute of Applied Research and Technology (INIAT), contributing to more than 5 successful projects.<br />
        </span>,
        <span>
          •	Developed 4 immersive virtual reality environments and 3 innovative haptic devices, resulting in 1 published paper, 2 conference presentations and 1 radio program feature.<br /><br />
          •	Mentored and provided technical guidance to postgraduate researchers on advanced control systems, robotics and virtual reality, contributing to 3 successful project completions.<br />
        </span>,
        <span>
          •	Designed and conducted a master's-level course on Virtual Reality and Haptic Devices Programming.<br /><br />
          •	Delivered weekly lectures on Circuits Engineering and Embedded Systems Engineering to over 100 undergraduate students, achieving a 95%+ course satisfaction rate.<br />
        </span>,
      ],
      logo: IberoLogo,
      altLogo: "IberoLogo",
      url: "https://ibero.mx",
    },
    {
      company: "iOpen",
      city: "New South Wales, Australia",
      roles: ["APPLICATIONS & SALES ENGINEER"],
      iniDate: ["November/2024"],
      finDate: ["current"],
      summary: [
        <span>
          •	Designed, implemented and presented automation systems showcasing advanced control and IoT solutions.<br /><br />
          •	Delivered training programs to enhance client adoption of innovative systems.<br />
        </span>
      ],
      logo: iOpenLogo,
      altLogo: "iOpenLogo",
      url: "https://www.iopen.com.au",
    },
  ]

  return (
    <div className='containerHBorder' id={4}>
      <div className='subtitle'>
        <span>PROFESSIONAL EXPERIENCE</span>
      </div>
      {jobs.length > 0 ?
        jobs.toReversed().map((item, index) => {
          return (
            <div key={"DCE" + index} className='containerExp'>
              <div className='divImgPR'>
                <img className='expImg' src={item.logo} alt={item.altLogo} onClick={() => { window.open(item.url, '_blank') }} />
              </div>
              <p>
                <span className='orgText'>{item.company}</span>
              </p>
              {item.roles.toReversed().map((roleItem, indexRole) => {
                return (
                  <p key={"TE" + indexRole}>
                    <span className='roleText'>{roleItem}</span><br />
                    <span className='cityText'>{item.city}</span>&nbsp; &nbsp; &nbsp; &nbsp;<span className='dateText'>{item.iniDate.toReversed()[indexRole]} - {item.finDate.toReversed()[indexRole]}</span><br /><br />
                    <span>{item.summary.toReversed()[indexRole]}<br /><br /></span>
                  </p>
                );
              })}
            </div>
          )
        })
        :
        null
      }
    </div>
  )
}

export default Experience;