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

export const signUp = (argument) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore()
        firebase.auth().createUserWithEmailAndPassword(argument.email, argument.password)
        .then(response => {
                            return firestore.collection('users').doc(response.user.uid).set({
                                firstName: argument.firstName,
                                lastName : argument.lastName,
                                initials: argument.firstName[0]+ argument.lastName[0]
                            })
                        })
        .then(()=> {dispatch({ type: 'SIGNUP_SUCCESS' })})
        .catch((err) =>{ dispatch({ type: 'SIGNUP_ERROR', err })})

    }
}