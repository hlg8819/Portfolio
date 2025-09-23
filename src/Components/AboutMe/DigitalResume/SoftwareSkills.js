import { Grid } from '@mui/material'
import React from 'react'

const SoftwareSkills = ({ ID = 0 }) => {
    const skills = ["MATLAB | SIMULINK", "Unity", "Autodesk Inventor", "VICON Software", "MQTT", "Ladder Logic", "Siemens TIA Portal", "Allen Bradley CCW", "JMobile", "Octoplant", "Embedded C", "C | C++ | C#", "Python | Micro Python", "REACT.JS", "HTML | CSS | SQL"];
    const skillsL = Math.ceil(skills.length / 3);
    const col1 = skills.slice(0, skillsL);
    const col2 = skills.slice(skillsL, skillsL * 2);
    const col3 = skills.slice(skillsL * 2, skillsL * 3);

    return (
        <Grid id={ID} container rowSpacing='1vw' className='containerHBorder'>
            <Grid item xs={12} className='subtitle'>
                SOFTWARE PROFICIENCY
            </Grid>
            <Grid item xs={4}>
                {col1.map((item, index) => {
                    return (
                        <p key={"L1S" + index} style={{ textAlign: 'center' }}>• {item}</p>
                    );
                })}
            </Grid>
            <Grid item xs={4}>
                {col2.map((item, index) => {
                    return (
                        <p key={"L2S" + index} style={{ textAlign: 'center' }}>• {item}</p>
                    );
                })}
            </Grid>
            <Grid item xs={4}>
                {col3.map((item, index) => {
                    return (
                        <p key={"L3S" + index} style={{ textAlign: 'center' }}>• {item}</p>
                    );
                })}
            </Grid>
        </Grid>
    );
}

export default SoftwareSkills;