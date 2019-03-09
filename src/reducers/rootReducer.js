import { combineReducers } from 'redux'
import authReducers from './authReducers'
import projectReducers from './projcetReducers'
import { firestoreReducer } from 'redux-firestore'


const rootReducer = combineReducers({
    auth: authReducers,
    project: projectReducers,
    firestore: firestoreReducer
});

export default rootReducer