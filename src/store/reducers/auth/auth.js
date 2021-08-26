import * as actionTypes from '../../types'

const initialState = {
    id : null,
    username : '',
    error : null,
    pending : false,
    role : "",
    token : null
}

const authReducer = (state = initialState,action) => {

    switch(action.type){
        case actionTypes.LOGIN_START:
            return {
                ...state,
                pending : true
            }
        case actionTypes.LOGIN_FAILED:
            return {
                ...state,
                error : action.error,
                pending : false
            }
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                token : action.token,
                pending : false,
                error : null,
                username : action.username
            }
        case actionTypes.SET_USERNAME:
            return {
                ...state,
                username : action.username
            }
        case actionTypes.SET_ID:
            return{
                ...state,
                id : action.id
            }
        case actionTypes.SET_ROLE:
            return {
                ...state,
                role : action.role
            }
        case actionTypes.LOGOUT:
            return{
                ...state,
                token : null,
                error : null
            }
        default:
            return state
    }
}

export default authReducer
