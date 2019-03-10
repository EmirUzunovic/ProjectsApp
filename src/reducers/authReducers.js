const initState = {
    authError: null
}

const authReducers = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            console.log('login success')  
            return {...state, authError : null} 
        case 'LOGIN_ERROR':
            console.log('login error')  
            return {...state, authError : 'Login failed'} 
        case 'SIGNOUT_SUCCESS':
            console.log('signeout success')  
            return state
        case 'SIGNUP_SUCCESS':
            console.log('SignUp success')  
            return {...state, authError : null}   
        case 'SIGNUP_ERROR':
            console.log('SignUP error')  
            return {...state, authError : action.err.message}   
        default:
            return state;
    } 
}

export default authReducers