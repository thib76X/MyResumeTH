import React from 'react';
import {makeStyles, Grid} from "@material-ui/core";
import {styles} from "../../assets/jss/components/pseudoViews/Slide6ViewStyles";

const useStyles = makeStyles(styles);

function Slide6View(props) {
    const classes = useStyles(props);
    return(
        <Grid container className={classes.gridContainer}>
            <Grid item xs={12} className={classes.gridItemA}></Grid>
            <Grid item xs={4} className={classes.gridItemC}>
                    LOGO
            </Grid>
            <Grid item xs={2} className={classes.gridItemB}>
                <div style={{color:'#2692b7', marginBottom:'20px'}}> DEEZER</div>
                <div style={{marginBottom:'10px'}}>Offre</div>
                <div style={{marginBottom:'10px'}}>Fonctionnalités</div>
                <div style={{marginBottom:'10px'}}>Appareils</div>
                <div style={{marginBottom:'10px'}}>Aide</div>
                <div style={{marginBottom:'10px'}}>A props</div>
                <div style={{marginBottom:'10px'}}>Carrières</div>
            </Grid>
            <Grid item xs={2} className={classes.gridItemB}>
                <div style={{color:'#2692b7', marginBottom:'20px'}}>EXPLORER</div>
                <div style={{marginBottom:'10px'}}>Tous les univers</div>
                <div style={{marginBottom:'10px'}}>Top écoutes</div>
                <div style={{marginBottom:'10px'}}>Sortie la plus populaire</div>
                <div style={{marginBottom:'10px'}}>Nouveautés</div>
            </Grid>
            <Grid item xs={2} className={classes.gridItemB}>
                <div style={{color:'#2692b7', marginBottom:'20px'}}>QUI SOMMES-NOUS?</div>
                <div style={{marginBottom:'10px'}}> Labels & artistes</div>
                <div style={{marginBottom:'10px'}}> Développeurs</div>
                <div style={{marginBottom:'10px'}}> Presse</div>
            </Grid>
            <Grid item xs={2} className={classes.gridItemB}>
                <div style={{color:'#2692b7', marginBottom:'20px'}}>LEGAL</div>
                <div style={{marginBottom:'10px'}}>Condition générales d'utilisation</div>
                <div style={{marginBottom:'10px'}}>Données personnelles et cookies</div>
                <div style={{marginBottom:'10px'}}>Contact: privacy@deezer.com</div>
                <div style={{marginBottom:'10px'}}>Mentions légales</div>
                <div style={{marginBottom:'10px'}}>Paramètres de confidentialité</div>
            </Grid>
        </Grid>
    );
}

export default Slide6View;