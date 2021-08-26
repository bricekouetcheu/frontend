//types
import { SET_BLOG_LIST, SET_BLOG_LOADING,SET_BLOG_ERRORS, SET_BLOG} from '../types'

//services
import {blogList,blogDetails,createBlog, updateBlog,deleteBlog} from '../../services/blog'


export const setBlogList = (blog) =>({type : SET_BLOG_LIST,blog})
export const setErrors = (errors) => ({type : SET_BLOG_ERRORS,errors})
export const setBlogLoading = (value) => ({type : SET_BLOG_LOADING,value})
export const setBlog = blog => ({type : SET_BLOG,blog})

export const blogListService =  () => {
    return async (dispatch) => {
        try{
            dispatch(setBlogLoading(true))
            const response = await blogList()
            if(response.results){
                dispatch(setBlogList(response.results))
            }
            dispatch(setBlogLoading(false))
            
        }
        catch(e){
            dispatch(setBlogLoading(false))
            dispatch(setErrors(e))
            console.log('erreur',e)
        }
    }
}

export const blogDetailService = (id) => {
    return async (dispatch) => {
        try{
            const response = await blogDetails(id)
            console.log(response)
            if(response){
                dispatch(setBlog(response))
            }
        }
        catch(e){
            console.log(e)
        }
    }
}
export const createBlogService = (data) =>{
    return async (dispatch,getState) => {
        try{
            const username = getState().auth.username
            const response = await createBlog(
                data.image,
                data.titre,
                username[0].id,
                true,
                data.description
            )
           
            if(response.id){
                dispatch(setBlog(response))
            }
        }
        catch(e){
            console.log(e)
        }
    }

}

export const updateBlogService = (data) => {
    return async (dispatch,getState) => {
        try{
            const username = getState().auth.username
            const {id} = getState().blog.blog

            console.log(data)
            console.log(id)
            console.log(username[0].id)
           
            const response = await updateBlog(
                id,
                data.image,
                data.titre,
                username[0].id,
                true,
                data.description
            )

            console.log("update blog=",response)
           
            // if(response.id){
            //     dispatch(setBlog(response))
            // }
        }
        catch(e){
            console.log(e)
        }
    }
}

export const deleteBlogService = (id) => {
    return async (dispatch) => {
        try{
            dispatch(setBlogLoading(true))
            const response = await deleteBlog(id)
            if(response.status === 204){
                dispatch(blogListService())
                dispatch(setBlogLoading(false))
            }
        }
        catch(e){
            console.log('error delete',e)
            dispatch(setBlogLoading(false))
        }
    }
}