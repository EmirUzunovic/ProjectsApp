const initState = {
    authError: null
}

const authReducers = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            console.log('login success', action)  
            return {...state, authError : null} 
        case 'LOGIN_ERROR':
            console.log('login error', action)  
            return {...state, authError : 'Login failed'} 
        case 'SIGNOUT_SUCCESS':
            console.log('signeout success')  
            return state
        default:
            return state;
    } 
}

export default authReducers