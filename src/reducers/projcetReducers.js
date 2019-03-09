const initState = {}

const projectReducers = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT_SUCCESS':
            console.log('new project created', action)  
            return state 
        case 'CREATE_PROJECT_ERROR':
            console.log('error while creating project', action)  
            return state 
        default:
            return state;
    } 
}

export default projectReducers