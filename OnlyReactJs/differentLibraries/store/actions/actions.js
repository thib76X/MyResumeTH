export const stateSwitchSuccessAsyncA = ()=>{
    return{type:'SNACK_SUCCESS_TRUE'};
}

export const stateSwitchSuccessAsyncB = ()=>{
    return{type:'SNACK_SUCCESS_FALSE'};
}

export const stateSwitchSuccess = ()=>{
    return(
        (dispatch)=>{
            dispatch(stateSwitchSuccessAsyncA())
            setTimeout(
                ()=>{dispatch(stateSwitchSuccessAsyncB())},
                4000
            )
        }
    )
}

export const stateSwitchErrorAsyncA = ()=>{
    return{type:'SNACK_ERROR_TRUE'};
}

export const stateSwitchErrorAsyncB = ()=>{
    return{type:'SNACK_ERROR_FALSE'};
}

export const stateSwitchError = ()=>{
    return(
        (dispatch)=>{
            dispatch(stateSwitchErrorAsyncA())
            setTimeout(
                ()=>{dispatch(stateSwitchErrorAsyncB())},
                4000
            )
        }
    )
}