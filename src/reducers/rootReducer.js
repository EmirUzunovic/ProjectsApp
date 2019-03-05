import { combineReducers } from 'redux'
import authReducers from './authReducers'
import projectReducers from './projcetReducers'

const rootReducer = combineReducers({
    auth: authReducers,
    project: projectReducers
});

export default rootReducer