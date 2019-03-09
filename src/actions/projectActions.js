export const addProject = (argument) => {
    return(dispatch, getState, { getFirebase, getFirestore }) =>  {
        //make async call to database
        const firestore = getFirestore();

        firestore.collection('projects').add({
            ...argument,
            authorFirstName: 'TestFirstName',
            authorLastName: 'TestLastName',
            authorId : 1234,
            createdAt: new Date()
        })
        .then(() => {dispatch({type: 'CREATE_PROJECT_SUCCESS'});})
        .catch(err => {dispatch({type: 'CREATE_PROJECT_ERROR'}, err)})
    }
}