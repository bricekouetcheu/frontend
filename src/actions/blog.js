import {
    BLOG_LIST,
    DETAIL_BLOG,
} from "./types";

import BlogService from "../services/blog.service";


export const retrieveBlog = () => async (dispatch) => {
    try {
        const res = await BlogService.getAllBlog();
        console.log("Actions", res);
        dispatch({
            type: BLOG_LIST,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const retrieveBlogDetail = (id) => async (dispatch) => {
    try {
        const res = await BlogService.getBlog(id);
        console.log("Actions Detail Blog", res);
        dispatch({
            type: DETAIL_BLOG,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};