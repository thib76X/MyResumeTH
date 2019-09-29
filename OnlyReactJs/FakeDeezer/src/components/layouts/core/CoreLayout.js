import React from 'react';
import {Grid} from '@material-ui/core';
import {styles} from '../../../assets/jss/components/layouts/core/CoreLayoutStyles'

function CoreLayout(props) {
    return(
        <Grid container style={styles.gridContainer}>
            <Grid item xs={12} style={styles.gridHeader}>
                {props.header}
            </Grid>
            <Grid item xs={12} style={styles.gridMain}>
                {props.main}
            </Grid>
        </Grid>
    )
}

export default CoreLayout;