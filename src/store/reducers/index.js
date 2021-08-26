import { combineReducers } from 'redux'
import authReducer from "./auth/auth";
import blogReducer from './blog';
import albumReducer from './galerie';
import agendaReducer from './agenda'
import activiteReducer from './activite';
const rootReducers = combineReducers({
    auth: authReducer,
    blog: blogReducer,
    album: albumReducer,
    agenda: agendaReducer,
    activite: activiteReducer
})

export default rootReducers
