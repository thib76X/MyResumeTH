import React from 'react';
import {makeStyles, Grid, Button, Paper} from "@material-ui/core";
import {styles} from "../../assets/jss/components/pseudoViews/Slide4ViewStyles";

const useStyles = makeStyles(styles);

function Slide4View(props) {
    const classes = useStyles(props);
    return(
      <Grid container className={classes.gridContainer}>
          <Grid item xs={12} className={classes.gridItemA}>
              <div style={{fontSize:'40px', fontWeight:'bold', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', height:'100%'}}>Profitez de votre musique</div>
          </Grid>
          <Grid item xs={12} className={classes.gridItemB}>
              <div style={{fontSize:'12px', display:'flex', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                  RECOMMANDE
              </div>
              <section style={{height:'90%', width:'100%', display:'flex', justifyContent:'center', alignItems:'center',}}>
                  <Paper className={classes.paper} style={{height:'50%'}}>
                      <div style={{fontSize:'30px', fontWeight:'bold', display:'flex', justifyContent:'flex', alignItems:'center', flexDirection:'column', textAlign:'center'}}>
                          Deezer Gratuit<br/>
                          0,00 €<br/>
                          <span style={{fontSize:'17px', fontWeight:'normal'}}>/mois</span>
                      </div>
                      <div style={{fontSize:'17px', fontWeight:'bold', display:'flex', justifyContent:'flex', alignItems:'center', flexDirection:'column', textAlign:'center'}}>
                          <span style={{margin:'5px'}}>56 millions de titres</span>
                          <span style={{margin:'5px'}}>Sans publicité</span>
                          <span style={{margin:'5px'}}>Zappez en illimité</span>
                          <span style={{margin:'5px'}}>Mode hors connexion</span>
                          <span style={{margin:'5px'}}>6 profils</span>
                      </div>
                      <div>
                          <Button style={{backgroundColor:'#8e8e94', borderRadius:'30px'}}>
                              S'inscrire
                          </Button>
                      </div>
                  </Paper>
                  <Paper className={classes.paper} style={{height:'70%', backgroundColor:'#2d96c8', color:'white'}}>
                      <div style={{fontSize:'30px', fontWeight:'bold', display:'flex', justifyContent:'flex', alignItems:'center', flexDirection:'column', textAlign:'center'}}>
                          Deezer Premium<br/>
                          9,99 €<br/>
                          <span style={{fontSize:'17px', fontWeight:'normal'}}>/mois</span>
                      </div>
                      <div style={{fontSize:'17px', fontWeight:'bold', display:'flex', justifyContent:'flex', alignItems:'center', flexDirection:'column', textAlign:'center'}}>
                          <span style={{margin:'5px'}}>56 millions de titres</span>
                          <span style={{margin:'5px'}}>Sans publicité</span>
                          <span style={{margin:'5px'}}>Zappez en illimité</span>
                          <span style={{margin:'5px'}}>Mode hors connexion</span>
                          <span style={{margin:'5px'}}>6 profils</span>
                      </div>
                      <div>
                          <Button style={{backgroundColor:'#ef5466', borderRadius:'30px'}}>
                              Essayer Deezer Premium
                          </Button>
                      </div>
                  </Paper>
                  <Paper className={classes.paper} style={{height:'50%'}}>
                      <div style={{fontSize:'30px', fontWeight:'bold', display:'flex', justifyContent:'flex', alignItems:'center', flexDirection:'column', textAlign:'center'}}>
                          Deezer Famille<br/>
                          14,99 €<br/>
                          <span style={{fontSize:'17px', fontWeight:'normal'}}>/mois</span>
                      </div>
                      <div style={{fontSize:'17px', fontWeight:'bold', display:'flex', justifyContent:'flex', alignItems:'center', flexDirection:'column', textAlign:'center'}}>
                          <span style={{margin:'5px'}}>56 millions de titres</span>
                          <span style={{margin:'5px'}}>Sans publicité</span>
                          <span style={{margin:'5px'}}>Zappez en illimité</span>
                          <span style={{margin:'5px'}}>Mode hors connexion</span>
                          <span style={{margin:'5px'}}>6 profils</span>
                      </div>
                      <div>
                          <Button style={{backgroundColor:'#feaa2d', borderRadius:'30px'}}>
                              S'abonner
                          </Button>
                      </div>
                  </Paper>
              </section>
          </Grid>
          <Grid item xs={12} className={classes.gridItemC}>
              <div style={{fontSize:'12px', display:'flex', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                  Deezer Premium, 30 jours offerts : offre non cumulable, valable une seule fois et pendant 30 jours. Cette offre est sans engagement : vous pouvez résilier votre abonnement quand vous le souhaitez.
              </div>
          </Grid>
      </Grid>
    );
}

export default Slide4View;