import {
    BLOG_LIST,
    DETAIL_BLOG,
} from "../actions/types";


const initialState = [];

function blogReducer(myblogg = initialState, action) {
    const { type, payload } = action;

    console.log("MMMMM", myblogg);

    switch (type) {

        case BLOG_LIST:
            return payload;
        
        case DETAIL_BLOG:
            return myblogg.map((tutorial) => {
                if (tutorial.id === payload.id) {
                return {
                    ...tutorial,
                    ...payload,
                };
                } else {
                return tutorial;
                }
            });
          

        default:
            return myblogg;
    }
};

export default blogReducer;