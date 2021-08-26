import * as actionTypes from '../../types'

const initialState = {
    agendas : "",
    loading : false,
    errors : "",
    agenda : ""
}

const agendaReducer = (state = initialState,action) => {

    switch (action.type){
        case actionTypes.SET_AGENDA_LIST:
            return {
                ...state,
                agendas : action.agenda
            }
        case actionTypes.SET_AGENDA_LOADING:
            return {
                ...state,
                loading : action.value
            }
        case actionTypes.SET_AGENDA_ERRORS:
            return {
                ...state,
                errors : action.errors
            }
        case actionTypes.SET_AGENDA:
            return{
                ...state,
                agenda : action.agenda
            }
        default:
            return state
    }

}

export default agendaReducer