import { Grid } from '@mui/material'
import React from 'react'

const TechnicalSkills = ({ ID = 0 }) => {
    const skills = ["Advanced Control Systems", "Robotics", "Embedded Systems", "Artificial Intelligence", "Circuits Design", "Instrumentation", "Virtual Reality", "Rapid Prototyping", "Human-Machine Interfaces", "Internet of Things (IoT)", "Artificial Intelligence", "Wearable Devices"];
    const colNo = 3;
    const mod = skills.length % colNo;
    const skillsL = mod < colNo / 2 ? Math.floor(skills.length / colNo) : Math.ceil(skills.length / colNo);
    const col1 = skills.slice(0, mod < colNo / 2 ? skillsL + mod : skillsL);
    const col2 = skills.slice(mod < colNo / 2 ? skillsL + mod : skillsL, mod < colNo / 2 ? (skillsL * 2) + mod : skillsL * 2);
    const col3 = skills.slice(mod < colNo / 2 ? (skillsL * 2) + mod : skillsL * 2, skills.length);

    return (
        <Grid id={ID} container rowSpacing='1vw' className='containerHBorder'>
            <Grid item xs={12} className='subtitle'>
                TECHNICAL SKILLS
            </Grid>
            <Grid item xs={4}>
                {col1.map((item, index) => {
                    return (
                        <p key={"L1T" + index} style={{ textAlign: 'center' }}>• {item}</p>
                    );
                })}
            </Grid>
            <Grid item xs={4}>
                {col2.map((item, index) => {
                    return (
                        <p key={"L2T" + index} style={{ textAlign: 'center' }}>• {item}</p>
                    );
                })}
            </Grid>
            <Grid item xs={4}>
                {col3.map((item, index) => {
                    return (
                        <p key={"L3T" + index} style={{ textAlign: 'center' }}>• {item}</p>
                    );
                })}
            </Grid>
        </Grid>
    );
}

export default TechnicalSkills;