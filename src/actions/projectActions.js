export const addProject = (argument) => {
    return(dispatch, getState) =>  {
        //make async call to database
        dispatch({type: 'ADD_PROJECT', project: argument});
    }
}