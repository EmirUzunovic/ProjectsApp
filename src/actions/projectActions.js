export const addProject = (argument) => {
    return(dispatch, getState, { getFirebase, getFirestore }) =>  {
        //make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;

        firestore.collection('projects').add({
            ...argument,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId : authorId,
            createdAt: new Date()
        })
        .then(() => {dispatch({type: 'CREATE_PROJECT_SUCCESS'});})
        .catch(err => {dispatch({type: 'CREATE_PROJECT_ERROR'}, err)})
    }
}