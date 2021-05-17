import axios from "axios";

const API_URL = "https://crechesite.herokuapp.com/api/";


const getAllBlog = () => {

    return axios
        .get(API_URL + "blog/", {})
};


const getBlog = id => {
    console.log("myslud", id);
    return axios
        .get(API_URL + `blog/${id}`, {})
};


const myBlog = {
    getAllBlog,
    getBlog
}


export default myBlog;