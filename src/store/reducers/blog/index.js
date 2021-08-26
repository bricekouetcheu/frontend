import * as actionTypes from '../../types'

const initialState = {
    blogs : "",
    loading : false,
    errors : "",
    blog : ""
}


const blogReducer = (state = initialState,action) => {

    switch (action.type){
        case actionTypes.SET_BLOG_LIST:
            return {
                ...state,
                blogs : action.blog
            }
        case actionTypes.SET_BLOG_LOADING:
            return {
                ...state,
                loading : action.value
            }
        case actionTypes.SET_BLOG_ERRORS:
            return {
                ...state,
                errors : action.errors
            }
        case actionTypes.SET_BLOG:
            return{
                ...state,
                blog : action.blog
            }
        default:
            return state
    }


}
export default blogReducer