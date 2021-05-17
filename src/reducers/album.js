import {
  ALBUM_LIST,
  DETAIL_ALBUM,
} from "../actions/types";


const initialState = [];


function galerieReducer(myalbum = initialState, action) {
  const { type, payload } = action;

  switch (type) {

      case ALBUM_LIST:
          return payload;

      case DETAIL_ALBUM:
          return payload;
      // return myalbum.map((tutorial) => {
      //     if (tutorial.slug === payload.slug) {
      //         return {
      //             ...tutorial,
      //             ...payload,
      //         };
      //     } else {
      //         return tutorial;
      //     }
      // });

      default:
          return myalbum;
  }
};

export default galerieReducer;