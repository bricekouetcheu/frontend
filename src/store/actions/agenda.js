//types
import { SET_AGENDA_LIST, SET_AGENDA_ERRORS, SET_AGENDA_LOADING, SET_AGENDA } from '../types'

//services
import { agendaList, agendaDetails, createAgenda, updateAgenda, deleteAgenda } from '../../services/agenda'


export const setAgendaList = (agenda) => ({ type: SET_AGENDA_LIST, agenda })
export const setErrors = (errors) => ({ type: SET_AGENDA_ERRORS, errors })
export const setAgendaLoading = (value) => ({ type: SET_AGENDA_LOADING, value })
export const setAgenda = (agenda) => ({ type: SET_AGENDA, agenda })


export const agendaListService = () => {
    return async (dispatch) => {
        try {
            dispatch(setAgendaLoading(true))
            const response = await agendaList()
            if (response.results) {
                dispatch(setAgendaList(response.results))
            }
            dispatch(setAgendaLoading(false))

        }
        catch (e) {
            dispatch(setAgendaLoading(false))
            dispatch(setErrors(e))
            console.log('erreur', e)
        }
    }
}

export const agendaDetailService = (id) => {
    return async (dispatch) => {
        try {
            const response = await agendaDetails(id)
            if (response) {
                dispatch(setAgenda(response))
            }
        }
        catch (e) {
            console.log(e)
        }
    }
}

export const createAgendaService = (data) => {
    return async (dispatch) => {
        try {
            const datafinal = {
                ...data,
                groupe: [1]
            }
            const response = await createAgenda(datafinal)

            if (response.id) {
                dispatch(setAgenda(response))
            }
        }
        catch (e) {
            console.log(e)
        }
    }

}

export const updateAgendaService = (data) => {
    return async (dispatch, getState) => {
        try {

            const { id } = getState().agenda.agenda
            const finalData = {
                ...data,
                groupe: [1]
            }
            const response = await updateAgenda(
                id,
                finalData
            )
        }
        catch (e) {
            console.log(e)
        }
    }
}

export const deleteAgendaService = (id) => {
    return async (dispatch) => {
        try {
            dispatch(setAgendaLoading(true))
            const response = await deleteAgenda(id)
            if (response.status === 204) {
                dispatch(agendaListService())
                dispatch(setAgendaLoading(false))
            }
        }
        catch (e) {
            console.log('error delete', e)
            dispatch(setAgendaLoading(false))
        }
    }
}