import {BASE_URL} from '../../config/urls/base'


const agendaList = async () => {
    const url = `${BASE_URL}agenda/`
    const options = {
        method : 'GET'
    }
    const response = await fetch(url,options)
    const data = response.json()
    return data
}
const agendaDetails = async (id) => {
    const url = `${BASE_URL}agenda/${id}/`
    const options = {
        method : 'GET'
    }
    const response = await fetch(url,options)
    const data = response.json()
    return data
}

const createAgenda = async (agendadata) => {
    const url = `${BASE_URL}agenda/`
    
    const options = {
            method : 'POST',
            body : JSON.stringify(agendadata),
            headers : {
                'Content-Type' : 'application/json'
            }
        }
        const response = await fetch(url,options)
        const data = response.json()
    return data 
}

const updateAgenda = async (idAgenda,agendadata) => {
    const url = `${BASE_URL}agenda/${idAgenda}/`
    
    const options = {
            method : 'PUT',
            body : JSON.stringify(agendadata),
            headers : {
                'Content-Type' : 'application/json'
            }
        }
        const response = await fetch(url,options)
        const data = response.json()
    return data 
}

const deleteAgenda = async (id) => {
    const url = `${BASE_URL}agenda/${id}/`

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

export {agendaList,agendaDetails,createAgenda,updateAgenda,deleteAgenda}