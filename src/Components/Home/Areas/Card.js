//#region IMPORTS
//*ADDONS
import { useNavigate } from 'react-router-dom';
//*CSS
import './areas.css';
import { Grid } from '@mui/material';
//#endregion

const Card = ({ id, src, link, cardText, slideNo }) => {
    let navigate = useNavigate();
    //#region HTML
    return (
        <Grid container className='cardContainer' spacing={2} direction={'column'}>
            <Grid item xs={12}>
                <img alt="cardImg" src={src} className='cardImg' onClick={() => id === slideNo ? navigate(link) : null} />
            </Grid>
            <Grid item xs={12}>
                <p style={{ textAlign: 'center' }}>{cardText}</p>
            </Grid>
        </Grid>
    );
    //#endregion
}

export default Card;