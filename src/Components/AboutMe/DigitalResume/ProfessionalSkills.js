import { Grid } from '@mui/material'
import React from 'react'

const ProfessionalSkills = ({ ID = 0 }) => {
    const skills = ["Leadership", "Problem-Solving", "Critical Thinking", "Adaptability", "Communication", "Creativity", "Innovation", "Quick Learning", "Stress Management"];
    const colNo = 3;
    const mod = skills.length % colNo;
    const skillsL = mod < colNo / 2 ? Math.floor(skills.length / colNo) : Math.ceil(skills.length / colNo);
    const col1 = skills.slice(0, mod < colNo / 2 ? skillsL + mod : skillsL);
    const col2 = skills.slice(mod < colNo / 2 ? skillsL + mod : skillsL, mod < colNo / 2 ? (skillsL * 2) + mod : skillsL * 2);
    const col3 = skills.slice(mod < colNo / 2 ? (skillsL * 2) + mod : skillsL * 2, skills.length);

    return (
        <Grid id={ID} key={ID} container spacing={1} className='containerHBorder'>
            <Grid item xs={12} className='subtitle'>
                PROFESSIONAL SKILLS
            </Grid>
            <Grid item xs={4}>
                {col1.map((item, index) => {
                    return (
                        <p key={"L1P" + index} style={{ textAlign: 'center' }}>• {item}</p>
                    );
                })}
            </Grid>
            <Grid item xs={4}>
                {col2.map((item, index) => {
                    return (
                        <p key={"L2P" + index} style={{ textAlign: 'center' }}>• {item}</p>
                    );
                })}
            </Grid>
            <Grid item xs={4}>
                {col3.map((item, index) => {
                    return (
                        <p key={"L3P" + index} style={{ textAlign: 'center' }}>• {item}</p>
                    );
                })}
            </Grid>
        </Grid>
    );
}

export default ProfessionalSkills