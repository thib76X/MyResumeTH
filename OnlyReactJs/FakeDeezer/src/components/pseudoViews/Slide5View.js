import React from 'react';
import {makeStyles, Grid, Button} from "@material-ui/core";
import {styles} from "../../assets/jss/components/pseudoViews/Slide5ViewStyles";

const useStyles = makeStyles(styles);


function Slide5View(props) {
    const classes = useStyles(props);
    return(
        <Grid container className={classes.gridContainer}>
            <Grid item xs={12} className={classes.gridItem}>
                <div style={{fontSize:'28px', fontWeight:'bold'}}>Abonnement annuel</div>
                <div style={{fontSize:'20px'}}>Un an d’abonnement à Deezer Premium pour 99,90 € au lieu de 119,88 €.</div>
                <Button variant='outlined' style={{borderRadius:'30px'}}>S'abonner</Button>
            </Grid>
            <Grid item xs={12} className={classes.gridItem}>
                <div style={{fontSize:'28px', fontWeight:'bold'}}>Deezer HiFi</div>
                <div style={{fontSize:'20px'}}>Un son authentique pour 19,99 €/mois</div>
                <Button variant='outlined' style={{borderRadius:'30px'}}>En savoir plus</Button>
            </Grid>
            <Grid item xs={12} className={classes.gridItem}>
                <div style={{fontSize:'28px', fontWeight:'bold'}}>Deezer Étudiant</div>
                <div style={{fontSize:'20px'}}>Deezer Premium pour seulement 4,99 €/mois</div>
                <Button variant='outlined' style={{borderRadius:'30px'}}>En savoir plus</Button>
            </Grid>
        </Grid>
    );
}

export default Slide5View;