import React from 'react';
import {Paper, Grid, makeStyles} from "@material-ui/core";
import {styles} from "../../assets/jss/components/main/MainStyles";
import Slide1View from "../pseudoViews/Slide1View";
import Slide2View from "../pseudoViews/Slide2View";
import Slide3View from "../pseudoViews/Slide3View";
import Slide4View from "../pseudoViews/Slide4View";
import Slide5View from "../pseudoViews/Slide5View";
import Slide6View from "../pseudoViews/Slide6View";

const useStyles = makeStyles(styles);

function Main(props) {
    const classes = useStyles(props);
    return(
            <Paper className={classes.paper}>
                <Grid container className={classes.gridContainer}>
                    <Grid item xs={12} className={classes.gridItemSlide1}>
                        <Slide1View/>
                    </Grid>
                    <Grid item xs={12} className={classes.gridItemSlide2}>
                        <Slide2View/>
                    </Grid>
                    <Grid item xs={12} className={classes.gridItemSlide3}>
                        <Slide3View/>
                    </Grid>
                    <Grid item xs={12} className={classes.gridItemSlide4}>
                        <Slide4View/>
                    </Grid>
                    <Grid item xs={12} className={classes.gridItemSlide5}>
                        <Slide5View/>
                    </Grid>
                    <Grid item xs={12} className={classes.gridItemSlide6}>
                        <Slide6View/>
                    </Grid>
                </Grid>
            </Paper>
    );
}

export default Main;