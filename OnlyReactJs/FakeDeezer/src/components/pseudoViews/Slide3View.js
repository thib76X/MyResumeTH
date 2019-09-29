import React from 'react';
import {Grid, makeStyles} from '@material-ui/core';
import {styles} from "../../assets/jss/components/pseudoViews/Slide3ViewStyles";

const useStyles = makeStyles(styles);

function Slide3View(props){
    const classes = useStyles(props);
    return(
        <Grid container className={classes.gridContainer}>
            <Grid item xs={12} className={classes.gridItem}>
                <div style={{fontSize:'40px', fontWeight:'bold'}}>
                    Toujours avec vous
                </div>
                <div style={{fontSize:'24px', display:'flex', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                    De votre footing matinal jusqu'au dîner du soir, votre musique vous suit partout avec Deezer Premium. Disponible tout le temps, sur tous vos appareils, même sans WiFi ni 4G.
                </div>
                <div style={{fontSize:'24px', fontWeight:'bold'}}>
                    Some Icon
                </div>
            </Grid>
        </Grid>
    );
}

export default Slide3View;