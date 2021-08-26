//types
import { SET_ACTIVITE_LIST, SET_ACTIVITE_LOADING,SET_ACTIVITE_ERRORS,SET_ACTIVITE} from '../types'

import {activiteList,createActivite,activiteDetails,updateActivite,deleteActivite} from '../../services/activite'

export const setActiviteList = (activites) =>({type : SET_ACTIVITE_LIST,activites})
export const setErrors = (errors) => ({type : SET_ACTIVITE_ERRORS,errors})
export const setActiviteLoading = (value) => ({type : SET_ACTIVITE_LOADING,value})
export const setActivite = (activite) => ({type : SET_ACTIVITE,activite})
export const activiteListService =  () => {
    return async (dispatch) => {
        try{
            dispatch(setActiviteLoading(true))
            const response = await activiteList()
            if(response.results){
                dispatch(setActiviteList(response.results))
            }
            dispatch(setActiviteLoading(false))
            
        }
        catch(e){
            dispatch(setActiviteLoading(false))
            dispatch(setErrors(e))
            console.log('erreur',e)
        }
    }

}

export const createActiviteService = (data) =>{
    return async (dispatch) => {
        try{
            console.log("data create=",data)
            
            const response = await createActivite(data)
            if(response.id){
                console.log('activite created')
            }
        }
        catch(e){
            console.log(e)
        }
    }

}

export const activiteDetailService = (id) => {
    return async (dispatch) => {
        try{
            const response = await activiteDetails(id)
            console.log(response)
            if(response){
                dispatch(setActivite(response))
            }
        }
        catch(e){
            console.log(e)
        }
    }
}

export const updateActiviteService = (data) => {
    return async (dispatch,getState) => {
        try{
            const {id} = getState().activite.activite

            // console.log(data)
            // console.log(id)
            // console.log(username[0].id)
            const dataFinal = {
                ...data,
                groupe_set : [
                    {nom : data.groupe}
                ]
            }
           
            const response = await updateActivite(
                id,
                dataFinal
            )

            console.log("update activite=",response)
           
            // if(response.id){
            //     dispatch(setBlog(response))
            // }
        }
        catch(e){
            console.log(e)
        }
    }
}

export const deleteActiviteService = (id) => {
    return async (dispatch) => {
        try{
            dispatch(setActiviteLoading(true))
            const response = await deleteActivite(id)
            if(response.status === 204){
                dispatch(activiteListService())
                dispatch(setActiviteLoading(false))
            }
        }
        catch(e){
            console.log('error delete',e)
            dispatch(setActiviteLoading(false))
        }
    }
}