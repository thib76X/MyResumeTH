import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import * as actionCreator from "./store/actions/actions";
import {Snackbar, SnackbarContent} from "@material-ui/core";
import PanelTab from "./components/panelTab/PanelTab";
import FormCityName from "./components/form/FormCityName"
import FormZipCode from "./components/form/FormZipCode";

function App(props) {

  return (
        <div style={{height:'100vh', width:'100vw', margin:0, padding:0, display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={props.stateSnacksucces}
            >
                <SnackbarContent
                    message="SUCCESS REQUEST"
                    style={{backgroundColor:'green'}}
                />
            </Snackbar>
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={props.stateSnackError}
            >
                <SnackbarContent
                    message="FAIL REQUEST or THIS CITY DOESN'T EXIST"
                    style={{backgroundColor:'red'}}
                />
            </Snackbar>
            <PanelTab
                itemOne={<FormCityName name='cityName'/>}
                itemTwo={<FormZipCode name="ZIPCode"/>}
            />

        </div>
  );
}

const mapStateToProps = (state) => {
  return({
        stateSnacksucces:state.stateSnacksucces,
        stateSnackError:state.stateSnackError,
      });
};

const mapDispatchToProps = (dispatch) => {
  return({
        //something later
      })
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(App));
