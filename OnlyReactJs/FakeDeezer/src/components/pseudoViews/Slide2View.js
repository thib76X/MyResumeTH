import React from 'react';
import {Grid, makeStyles} from '@material-ui/core';
import {styles} from "../../assets/jss/components/pseudoViews/Slide2ViewStyles";

const useStyles = makeStyles(styles);

function Slide2View(props){
    const classes = useStyles(props);
    return(
        <Grid container className={classes.gridContainer}>
            <Grid item xs={6} className={classes.gridItemLeft}>
                <div style={{fontSize:'40px', fontWeight:'bold'}}>
                    Deezer, c'est quoi ?
                </div>
                <div style={{fontSize:'24px', textAlign:'justify'}}>
                    <span style={{fontWeight:'bold'}}>Toute votre musique dans votre poche.</span><br/>
                    Parmi 56 millions de titres, retrouvez de vieilles connaissances et laissez-vous séduire par de nouveaux coups de cœur.
                </div>
                <div style={{fontSize:'24px', textAlign:'justify'}}>
                    <span style={{fontWeight:'bold'}}>Pas de WiFi ? Pas de problème.</span><br/>
                    Avec Deezer Premium, vous n'avez pas besoin d'être connecté à Internet pour profiter de votre musique préférée.
                </div>
                <div style={{fontSize:'24px', textAlign:'justify'}}>
                    <span style={{fontWeight:'bold'}}>Créez votre bibliothèque musicale.</span><br/>
                    Recherchez parmi des millions de titres pour créer vos propres playlists et emportez-les partout avec vous.
                </div>
                <div style={{fontSize:'24px', textAlign:'justify'}}>
                    <span style={{fontWeight:'bold'}}>Un Deezer qui vous ressemble.</span><br/>
                    Flow apprend à connaître ce que vous aimez et ce que vous n'aimez pas. Découvrez votre bande-son personnalisée.
                </div>
            </Grid>
            <Grid item xs={6} className={classes.gridItemRight}>

            </Grid>
        </Grid>
    )
}

export default Slide2View;