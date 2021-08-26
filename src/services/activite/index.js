import {BASE_URL} from '../../config/urls/base'

const activiteList = async () => {
    const url = `${BASE_URL}activite`
    const options = {
        method : 'GET'
    }
    const response = await fetch(url,options)
    const data = response.json()
    return data
}

const createActivite = async (activitedata) => {
    const url = `${BASE_URL}activite/`
    
    const options = {
            method : 'POST',
            body : JSON.stringify(activitedata),
            headers : {
                'Content-Type' : 'application/json'
            }
        }
        const response = await fetch(url,options)
        const data = response.json()
    return data 
}

const activiteDetails = async (id) => {
    const url = `${BASE_URL}activite/${id}`
    const options = {
        method : 'GET'
    }
    const response = await fetch(url,options)
    const data = response.json()
    return data
}


const updateActivite = async (idActivite,activitedata) => {
    const url = `${BASE_URL}activite/${idActivite}/`

    const options = {
            method : 'PUT',
            body : JSON.stringify(activitedata),
            headers : {
                'Content-Type' : 'application/json'
            }
        }
        const response = await fetch(url,options)
        const data = response
    return data 
}

const deleteActivite = async (id) => {
    const url = `${BASE_URL}activite/${id}/`

    const options = {
        method : 'DELETE',
        headers : {
            'Content-Type' : 'application/json'
        }
    }
    const response = await fetch(url,options)
    const data = response
    return data
    
}

export {activiteList,createActivite,activiteDetails,updateActivite,deleteActivite}