//#region IMPORTS
//*REACT
import React from 'react'
//#endregion

const ProjectPage = ({ projects = [] }) => {
    //#region HTML
    return (
        <>
            {projects.map((item, index) => {
                return (
                    <div key={"DPR" + index} className={projects.length - 1 === index ? 'containerH' : 'containerHBorder'} id={index}>
                        <div className={index % 2 === 0 ? 'divImgPL' : 'divImgPR'}>
                            <img className={'projImg'} src={item.image} alt={item.imageAlt} />
                        </div>
                        <div className='centerDiv'>
                            <span className='subtitle'>{item.title.toUpperCase()}</span><br /><br />
                        </div>
                        <p>
                            Role: {item.role} <br /><br />
                            Summary: {item.summary} <br /><br />
                            {item.responsibilities !== null ? <span>Responsibilities:<br />{item.responsibilities}<br /><br /></span> : null}
                            {item.skills.length > 0 ? <span>Skills Applied: </span> : null}
                            {item.skills.length > 0 ?
                                item.skills.map((itemSkill, indexSkill) => {
                                    return (
                                        <span key={"PRS" + indexSkill}>{itemSkill} | </span>
                                    )
                                })
                                :
                                null
                            }
                        </p>
                    </div>
                )
            })}
        </>
    );
    //#endregion
}

export default ProjectPage