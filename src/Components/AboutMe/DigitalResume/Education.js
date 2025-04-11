import React from 'react';
import IberoLogo from '../../../Assets/IberoLogo.png';
import WollongongLogo from '../../../Assets/WollongongLogo.png'

const Education = () => {
    const degrees = [
        {
            title: "Bachelor of Mechatronics and Production Engineering (Exchange Program)",
            university: "University of Wollongong",
            city: "Wollongong, New South Wales, Australia",
            GPA: null,
            iniDate: "July/2018",
            finDate: "December/2018",
            awards: null,
            thesis: null,
            courses: "Robotics and Flexible Automation, Game Engine Essentials.",
            image: WollongongLogo,
            imageAlt: "WollongongLogo",
            url: "https://www.uow.edu.au",
        },
        {
            title: "Bachelor of Mechatronics and Production Engineering",
            university: "Universidad Iberoamericana",
            city: "Mexico City, Mexico",
            GPA: "9.2/10",
            iniDate: "August/2014",
            finDate: "May/2019",
            awards: "Academic Excellence and Honorable Mention.",
            thesis: "Parallel Cable Robot for Stock Control in Storage Facilities.",
            courses: "Process Dynamics, Embedded Systems, Process Control, Power Systems, Industrial Automation.",
            image: IberoLogo,
            imageAlt: "IberoLogo",
            url: "https://licenciaturas.ibero.mx/ingenieria-en-mecatronica-y-sistemas-ciberfisicos?_ga=2.75217618.1953241740.1720364281-970297110.1719223459",
        },
        {
            title: "Master of Science in Engineering",
            university: "Universidad Iberoamericana",
            city: "Mexico City, Mexico",
            GPA: "9.9/10",
            iniDate: "January/2020",
            finDate: "March/2022",
            awards: "Honorable Mention.",
            thesis: "Formation Control of Thermal Agents for Distributed Heat Sensations in Immersive Virtual Reality Applications.",
            courses: "Advanced Process Control, Advanced Biomechanics, Engineering Systems Design.",
            image: IberoLogo,
            imageAlt: "IberoLogo",
            url: "https://posgrados.ibero.mx/maestria/maestria-en-ciencias-de-la-ingenieria/",
        },
    ];

    return (
        <div className='containerHBorder' id={5}>
            <div className='subtitle'>
                <span>EDUCATION</span>
            </div>
            {degrees.length > 0 ?
                degrees.toReversed().map((item, index) => {
                    return (
                        <div key={"DCED" + index} className='containerExp'>
                            <div className='divImgPL'>
                                <img className='expImg' src={item.image} alt={item.imageAlt} onClick={() => { window.open(item.url, '_blank') }} />
                            </div>
                            <p>
                                <span className='roleText'>{item.title}</span><br />
                                <span className='orgText'>{item.university}</span><br />
                                <span className='cityText'>{item.city} &nbsp; &nbsp; &nbsp; &nbsp;</span><span className='dateText'>{item.iniDate} - {item.finDate}</span><br /><br />
                                {item.GPA ? <span>• GPA: {item.GPA} <br /></span> : null}
                                {item.awards ? <span>• Awards: {item.awards}</span> : null}
                                {item.thesis ? <span><br />• Thesis: {item.thesis}<br /></span> : null}
                                {item.courses ? <span>• Relevant courses: {item.courses}</span> : null}
                            </p>
                        </div>
                    );
                })
                :
                null
            }
        </div>
    )
}

export default Education