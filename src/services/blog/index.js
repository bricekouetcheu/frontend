import {BASE_URL} from '../../config/urls/base'

const blogList = async () => {
    const url = `${BASE_URL}blog`
    const options = {
        method : 'GET'
    }
    const response = await fetch(url,options)
    const data = response.json()
    return data
}

const blogDetails = async (id) => {
    const url = `${BASE_URL}blog/${id}`
    const options = {
        method : 'GET'
    }
    const response = await fetch(url,options)
    const data = response.json()
    return data
}

const createBlog = async (image,titre,auteur,status,description) => {
    const url = `${BASE_URL}blog/`
    
    const DATA = new FormData()
    
    DATA.append("titre",titre)
    DATA.append("description",description)
    DATA.append("image",image)
    DATA.append("status",status)
    DATA.append("auteur",auteur)
    
    const options = {
            method : 'POST',
            body : DATA
        }
        const response = await fetch(url,options)
        const data = response.json()
    return data 
}

const updateBlog = async (idBlog,image,titre,auteur,status,description) => {
    const url = `${BASE_URL}blog/${idBlog}/`
    
    const DATA = new FormData()
    
    DATA.append("titre",titre)
    DATA.append("description",description)
    DATA.append("image",image)
    DATA.append("status",status)
    DATA.append("auteur",auteur)
    
    const options = {
            method : 'PUT',
            body : DATA
        }
        const response = await fetch(url,options)
        const data = response.json()
    return data 
}

const deleteBlog = async (id) => {
    const url = `${BASE_URL}blog/${id}/`

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


export {blogList,blogDetails,createBlog,updateBlog,deleteBlog}