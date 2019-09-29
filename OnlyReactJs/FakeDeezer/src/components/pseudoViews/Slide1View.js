import React from 'react';
import {Button, Grid, makeStyles} from "@material-ui/core";
import {styles} from "../../assets/jss/components/pseudoViews/Slide1ViewStyles";

const useStyles = makeStyles(styles)

function Slide1View(props) {
    const classes = useStyles(props);
    return(
        <Grid container className={classes.gridContainer}>
            <Grid item xs={6} className={classes.gridItem}>
                <div style={{fontSize:'48px', fontWeight:'bold', letterSpacing:'3px'}}>
                    Vos émotions méritent d'avoir leur musique.
                </div>
                <div style={{fontSize:'32px'}}>
                    Essayez Deezer Premium gratuitement pendant 30 jours*
                </div>
                <div style={{width:'100%', display:'flex', justifyContent:'center', marginTop:'5px', marginBottom:'5px'}}>
                    <Button color="primary" variant={'contained'} className={classes.buttonA}>Deezer Premium</Button>
                    <Button color="primary" variant={'contained'} className={classes.buttonA}>Deezer Gratuit</Button>
                </div>
            </Grid>
            <Grid item xs={6} className={classes.gridItemVoid}>

            </Grid>
        </Grid>
    );
}

export default Slide1View;