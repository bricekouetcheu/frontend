import * as actionTypes from '../../types'

const initialState = {
    albums : "",
    laoding : false,
    error : "",
    galerie : ""
}

const albumReducer = (state = initialState,action) => {
    switch(action.type){
        case actionTypes.SET_ALBUM_LOADING:
            return{
                ...state,
                laoding : action.value
            }
        case actionTypes.SET_ALBUM_LIST:
            return {
                ...state,
                albums : action.albums
            }
        case actionTypes.SET_ALBUM_GALERIE:
            return {
                ...state,
                galerie : action.galerie
            }
        default:
            return state
    }
} 

export default albumReducer