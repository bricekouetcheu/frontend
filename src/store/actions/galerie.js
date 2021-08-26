import {SET_ALBUM_GALERIE, SET_ALBUM_LIST,SET_ALBUM_LOADING} from '../types'

import {albumList,albumGalerie,createAlbum} from '../../services/galerie'


export const setAlbumList = (albums) => ({type : SET_ALBUM_LIST,albums})
export const setAlbumLoading = (value) => ({type : SET_ALBUM_LOADING,value})
export const setAlbumGalerie = galerie => ({type : SET_ALBUM_GALERIE,galerie})


export const albumListService = () => {
        return async (dispatch) => {
            try{
                dispatch(setAlbumLoading(true))
                const response = await albumList()
                if(response.results){
                    dispatch(setAlbumList(response.results))
                }
                dispatch(setAlbumLoading(false))
            }
            catch(e){
                dispatch(setAlbumLoading(false))
                console.log('e',e)
            }
        }
}

export const albumsGalerieService = (id) => {
    return async (dispatch) => {
        try{
            dispatch(setAlbumLoading(true))
            const response = await albumGalerie(id)
            console.log('galerie',response)
            if(response.id){
                dispatch(setAlbumGalerie(response))
                dispatch(setAlbumLoading(false))
            }
            dispatch(setAlbumLoading(false))
        }
        catch(e){
            dispatch(setAlbumLoading(false))
            console.log('e',e)
        }
    }
}

export const createAlbumService = (data) =>{
    return async () => {
        try{
            const response = await createAlbum(data)
            if(response.id){
                console.log('created success')
            }
        }
        catch(e){
            console.log(e)
        }
    }

}