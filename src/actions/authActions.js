export const signIn = (argument) => {
    return (dispatch, getState, {getFirebase}) =>{
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(argument.email, argument.password)
        .then(()=> {dispatch({type: 'LOGIN_SUCCESS'})})
        .catch((err) => {dispatch({type: 'LOGIN_ERROR', err})})
    }  
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {dispatch({ type: 'SIGNOUT_SUCCESS' })})
    }
}