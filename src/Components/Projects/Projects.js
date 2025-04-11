//#region IMPORTS
//*REACT
import React, { useEffect } from 'react';
//*ADDONS
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
//*CSS
import './projects.css';
//*FILES
import AutomationImg from '../../Assets/AutomationFront.png';
import ControlImg from '../../Assets/ControlFront.png';
import ResearchImg from '../../Assets/ResearchFront.png';
import PublicationsImg from '../../Assets/PublicationsFront.png';
import EmbeddedImg from '../../Assets/EmbeddedFront.png';
import MyLogo from '../../Assets/MyLogo.png';
import VRImg from '../../Assets/VRFront.png';
//#endregion

const Projects = () => {
    //#region HOOKS
    let navigate = useNavigate();
    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);
    //#endregion

    //#region HTML
    return (
        <Grid container spacing={2} padding={2} justifyContent={'center'} alignContent={'center'} textAlign={'center'}>
            <Grid item xs={12}>
                <span className='title'>PROJECTS</span>
            </Grid>
           <Grid item xs={6} sm={4}>
                <img className='imgPro' onClick={() => { navigate("/allprojects") }} src={MyLogo} alt='allProjectsImg' />
                <br />
                <span className='subtitle'>All Projects</span>
            </Grid>
           <Grid item xs={6} sm={4}>
                <img className='imgPro' onClick={() => { navigate("/control") }} src={ControlImg} alt='ControlImg' />
                <br />
                <span className='subtitle'>Advanced Control Systems</span>
            </Grid>
            <Grid item xs={6} sm={4}>
                <img className='imgPro' onClick={() => { navigate("/embedded") }} src={EmbeddedImg} alt='EmbeddedImg' />
                <br />
                <span className='subtitle'>Embedded Systems</span>
            </Grid>
           <Grid item xs={6} sm={4}>
                <img className='imgPro' onClick={() => { navigate("/automation") }} src={AutomationImg} alt='AutomationImg' />
                <br />
                <span className='subtitle'>Industrial Automation</span>
            </Grid>
           <Grid item xs={6} sm={4}>
                <img className='imgPro' onClick={() => { navigate("/vr") }} src={VRImg} alt='VRImg' />
                <br />
                <span className='subtitle'>Virtual Reality</span>
            </Grid>
            <Grid item xs={6} sm={4}>
                <img className='imgPro' onClick={() => { navigate("/research") }} src={ResearchImg} alt='researchImg' />
                <br />
                <span className='subtitle'>Research</span>
            </Grid>
            <Grid item xs={6} sm={4}>
                <img className='imgPro' onClick={() => { navigate("/publications") }} src={PublicationsImg} alt='PublicationsImg' />
                <br />
                <span className='subtitle'>Publications</span>
            </Grid>
        </Grid>
    );
    //#endregion
}

export default Projects;