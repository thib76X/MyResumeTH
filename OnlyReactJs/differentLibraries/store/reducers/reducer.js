const initialState = {
    stateSnacksucces: false,
    stateSnackError:false
};

const reducer = (state = initialState, action)=>{
    const newState = {...state};

    if (action.type === 'SNACK_SUCCESS_TRUE') {
        newState.stateSnacksucces=true;
    }
    if (action.type === 'SNACK_SUCCESS_FALSE') {
        newState.stateSnacksucces=false;
    }
    if (action.type === 'SNACK_ERROR_TRUE') {
        newState.stateSnackError=true;
    }
    if (action.type === 'SNACK_ERROR_FALSE') {
        newState.stateSnackError=false;
    }
    return newState;
};

export default reducer;