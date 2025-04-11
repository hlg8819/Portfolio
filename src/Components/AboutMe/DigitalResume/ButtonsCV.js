import React from 'react';
import { useNavigate } from 'react-router-dom';
import Resume from '../../../Assets/HECTOR LOPEZ GONZALEZ RESUME.pdf';
import AcademicCV from '../../../Assets/AcademicCVHectorLopezGonzalez.pdf';

const ButtonsCV = () => {
    let navigate = useNavigate();
    //*Creates link to download Resume
    const downloadResume = () => {
        const dLink = document.createElement("a");
        dLink.href = Resume;
        dLink.download = "HECTOR LOPEZ GONZALEZ RESUME.pdf";
        document.body.appendChild(dLink);
        dLink.click();
        document.body.removeChild(dLink);
    }

    const downloadAcademic = () => {
        const dLink = document.createElement("a");
        dLink.href = AcademicCV;
        dLink.download = "HECTOR LOPEZ GONZALEZ Academic CV.pdf";
        document.body.appendChild(dLink);
        dLink.click();
        document.body.removeChild(dLink);
    }

    //#endregion
    return (
        <div className='divBtn'>
            <button href={'/contact'} className='regularBtn' onClick={() => { navigate("/contact") }}>Contact Me</button>
            <button className='regularBtn' onClick={() => { downloadResume() }}>Download Resume</button>
            <button href={'about'} className='regularBtn' onClick={() => { downloadAcademic() }}>Download Academic CV</button>
        </div>
    )
}

export default ButtonsCV