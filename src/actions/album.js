import {
  ALBUM_LIST,
  DETAIL_ALBUM,
} from "./types";

import AlbumService from "../services/album.service";


export const retrieveAlbum = () => async (dispatch) => {
  try {
      const res = await AlbumService.getAllAlbum();
      console.log("Actions", res);
      dispatch({
          type: ALBUM_LIST,
          payload: res.data,
      });
  } catch (err) {
      console.log(err);
  }
};


export const retrieveAlbumDetail = (slug) => async (dispatch) => {
  try {
      const res = await AlbumService.getAlbum(slug);
      console.log("Actions Album", res);
      dispatch({
          type: DETAIL_ALBUM,
          payload: res.data,
      });
  } catch (err) {
      console.log(err);
  }
};