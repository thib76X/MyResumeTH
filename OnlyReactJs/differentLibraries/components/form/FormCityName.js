import React from 'react';
import axios from 'axios';
import { TextField, InputAdornment, Icon, Button } from "@material-ui/core";
import { Check, Close } from '@material-ui/icons'
import {Formik, Form as FormikForm} from "formik";
import * as yup from 'yup';
import * as actionCreator from "../../store/actions/actions";
import {connect} from 'react-redux';

function checkOutSchema(name) {
    switch (name) {
        case 'cityName':
            return(
                yup.object().shape({
                    cityName: yup
                        .string('you must enter string')
                        .max(163)
                        .matches(/[^0-9]/)
                        .trim()
                        .required('you must enter something')
                })
            )
        case 'ZIPCode':
            return(
                yup.object().shape({
                    ZIPCode: yup
                        .string('you must enter string')
                        .length(10)
                        .required('you must enter something')
                })
            )
        default:
            console.log('default')
    }
}

function FormCityName(props){
    const [weatherState, setWeatherState] = React.useState({
        country:null,
        city:null,
        weather:null,
        isLoading:false,
        message:null
    });
    const call=(type, value)=>{
    axios.get(`http://api.openweathermap.org/data/2.5/weather?${type}=${value}&APPID=bab4bfdba3b531e1dbf75fd3d6dce0ec`).
    then(res=>{
        const {data} = res;
        const weatherInfo = data.main;
        const weatherLocation = data.name;
        const countryLocation = data.sys.country;
        const weatherLandscape = data.weather[0].description
        setWeatherState({
            ...weatherState,
            country: countryLocation,
            city: weatherLocation,
            weather: weatherInfo,
            landscape: weatherLandscape,
            isLoading: true,
            message:null
        });
        props.onSwitchSucces()
    })
    .catch((res)=>{
        console.log(res)
        setWeatherState({
            ...weatherState,
            message: 'location, not found'
        });
        props.onSwitchError()
    })
}

    console.log(props.stateSnacksucces)
    return(
        <>
            <Formik
                initialValues={
                    {cityName:''}
                }
                onSubmit={(values)=>{
                    call('q', values.cityName);
                }}
                validationSchema={checkOutSchema(props.name)}
            >
                {(props)=>{
                    const {values, handleChange, handleBlur, errors, touched, handleReset, isSubmitting, isValid} = props;
                    return(
                        <FormikForm>
                            <section style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                    <label htmlFor='cityName'>CITY NAME</label>
                                    <TextField
                                        error={errors.cityName!==undefined}
                                        name='cityName'
                                        type='text'
                                        id='cityName'
                                        placeholder={'city name'}
                                        value={values.cityName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        helperText={'a snackbar will appear when send your form'}
                                        disabled={isSubmitting}
                                        InputProps={(touched.cityName)&&{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <Icon
                                                        edge="end"
                                                    >
                                                        {errors.cityName!==undefined ? <Close style={{color:'red'}}/> : <Check style={{color:'green'}}/>}
                                                    </Icon>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                    {errors.cityName && touched.cityName && (
                                        <div style={{color: "red"}}>{errors.cityName}</div>
                                    )}
                                </div>
                                <div style={{display:'flex', justifyContent:'center', alignItems:'center', paddingTop:'10px'}}>
                                    <Button variant='contained' color='primary' type='submit' disabled={!isValid || isSubmitting} style={{marginRight:'10px'}}>SEND REQUEST</Button>
                                    <Button variant='contained' color='secondary' onClick={handleReset} type='button'>RESET</Button>
                                </div>
                            </section>
                        </FormikForm>
                    )
                }}
            </Formik>
            {weatherState.isLoading ?
                (<>
                    <p>STATE: <strong>{weatherState.country}</strong></p>
                    <p>MEAN TEMPERATURE (°C): <strong>{Math.round(weatherState.weather.temp-273)}</strong></p>
                    <p>MAX TEMPERATURE (°C): <strong>{Math.round(weatherState.weather.temp_max-273)}</strong></p>
                    <p>MIN TEMPERATURE (°C): <strong>{Math.round(weatherState.weather.temp_min-273)}</strong></p>
                    <p>CITY NAME: <strong>{weatherState.city}</strong></p>
                </>)
                : ''}
                </>
    )
}
const mapStateToProps = (state) => {
    return({
        stateSnacksucces:state.stateSnacksucces,
        stateSnackError:state.stateSnackError,
    });
};

const mapDispatchToProps = (dispatch) => {
    return({
        onSwitchSucces:  ()=> dispatch(actionCreator.stateSwitchSuccess()),
        onSwitchError: ()=>dispatch(actionCreator.stateSwitchError())
    })
};


export default connect(mapStateToProps, mapDispatchToProps)(React.memo(FormCityName));