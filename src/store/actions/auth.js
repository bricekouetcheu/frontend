import {LOGIN_START,LOGIN_SUCCESS,LOGIN_FAILED,LOGOUT,
        SET_USERNAME, SET_ID, SET_ROLE} from '../types'

import {userLogin,getUserInfo} from '../../services/auth'

export const loginStart = () => ({
    type : LOGIN_START
})

export const loginSuccess = (token,username) =>({
    type : LOGIN_SUCCESS,
    token,
    username
})

export const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem("user")
    return{
        type : LOGOUT
    }
}

export const loginFailed = (error) => ({type : LOGIN_FAILED,error})
export const setUsername = (username) => ({type : SET_USERNAME,username})
export const setId = (id) => ({type : SET_ID,id})
export const setRole = (role) => ({type : SET_ROLE,role})


export const loginService = (data) => {
    return async (dispatch) => {
        try{
            dispatch(loginStart())
            const response = await userLogin(data)
            
            console.log('response',response)
            if(response.token){
                const user = await getUserInfo(data.username)
                // dispatch(setUsername(user.results))
                localStorage.setItem('token',response.token)
                localStorage.setItem('user',JSON.stringify(user.results))
                await dispatch(loginSuccess(response.token,user.results))
                
            }
            else{
                dispatch(loginFailed(response.non_field_errors[0]))
            }
        }
        catch(e){
            dispatch(loginFailed(e))

        }
    }
}

export const isUserAuthenticated = () => {
    return dispatch => {
        const token = localStorage.getItem('token')
        const user = localStorage.getItem("user")

       
        if(!token){
            dispatch(logoutUser())
        }
        else{
            dispatch(loginSuccess(token,JSON.parse(user)))
        }
    }
}

export const logoutUser = () => {
    return (dispatch) =>  {
        dispatch(logout())
    }
}