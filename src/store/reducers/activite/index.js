import * as actionTypes from '../../types'

const initialState = {
    activites : "",
    laoding : false,
    error : "",
    activite : ""
}

const activiteReducer = (state = initialState,action) => {
    switch(action.type){
        case actionTypes.SET_ACTIVITE_LOADING:
            return{
                ...state,
                laoding : action.value
            }
        case actionTypes.SET_ACTIVITE_LIST:
            return {
                ...state,
                activites : action.activites
            }
        case actionTypes.SET_ACTIVITE_ERRORS:
            return {
                ...state,
                errors : action.errors
            }
        case actionTypes.SET_ACTIVITE:
            return {
                ...state,
                activite : action.activite
            }
        default:
            return state
    }
} 

export default activiteReducer