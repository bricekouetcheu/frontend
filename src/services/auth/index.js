import {BASE_URL,BASE_URL_II} from '../../config/urls/base'


export const userLogin = async (userdata) => {
    const loginUrl = `${BASE_URL_II}api-token-auth/`
    const options = {
        method : 'POST',
        body : JSON.stringify(userdata),
        headers : {
            'Content-Type': 'application/json',
        }
    }

    const response = await fetch(loginUrl,options)
    const data = response.json()
    return data
}


export const getUserInfo = async (username) => {
    const userInfosUrl = `${BASE_URL}utilisateur/?username=${username}`

    const options = {
        method : 'GET',
        headers : {
            'Content-Type': 'application/json'
        }
    }
    const response = await fetch(userInfosUrl,options)
    const data = response.json()
    return data
}
