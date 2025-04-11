//#region IMPORTS
//*REACT
import React, { useEffect, useState } from 'react';
//*COMPONENTS
import ProjectPage from './ProjectPage';
import SectionBar from '../SectionBar/SectionBar';
import ProjectsList from './ProjectsList';
//#endregion

const ProjectsControl = () => {
    //#region HOOKS
    const [projects, setProjects] = useState(ProjectsList);

    useEffect(() => {
        let filteredData = ProjectsList;
        filteredData = ProjectsList.filter((data) => data.control);
        setProjects(filteredData.toReversed());
        window.scrollTo(0, 0);
    }, []);
    //#endregion

    //#region HTML
    return (
        <>
            <SectionBar sections={projects} />
            <div className='centerDivBorder'>
                <span className='title'>Advanced Control Systems</span>
            </div>
            <ProjectPage projects={projects} />
        </>
    );
    //#endregion
}

export default ProjectsControl;