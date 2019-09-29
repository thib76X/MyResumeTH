import React from 'react';
import {Paper, Grid, Button, makeStyles} from '@material-ui/core';
import {styles} from '../../assets/jss/components/header/HeaderStyles';

const useStyles = makeStyles(styles)

function Header(props){
    const classes = useStyles(props)
    return(
        <Paper className={classes.paper}>
          <Grid container className={classes.gridContainer}>
              <Grid item xs={6} className={classes.gridItemA}>
                  <div className={classes.imgFull}></div>
              </Grid>
              <Grid item xs={2} className={classes.gridItemB}>
                  <Button color="primary" className={classes.buttonA}>Download</Button>
              </Grid>
              <Grid item xs={1} className={classes.gridItemB}>
                  <Button color="primary" className={classes.buttonA}>Offers</Button>
              </Grid>
              <Grid item xs={2} className={classes.gridItemC}>
                  <Button color="primary" variant="outlined" className={classes.buttonB}>Subscribe</Button>
              </Grid>
              <Grid item xs={1} className={classes.gridItemC}>
                  <Button color="primary" variant="contained" className={classes.buttonB}>Login</Button>
              </Grid>
          </Grid>
        </Paper>
    )
}

export default Header;