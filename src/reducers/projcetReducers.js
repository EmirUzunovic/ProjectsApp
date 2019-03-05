const initState = {
    projects: [
        {id:'1', title: "Project Blue Book", content: "If you don’t already know, then you probably don’t have the clearance. But for the sake of disclosure… Project Blue Book was the code name for the US Air Force investigations into UFO sightings. But you didn’t hear that from us." },
        {id:'2', title: "Project 404", content: "The code name for a covert US Air Force mission to Laos during the Vietnam War to supply line crew technicians. Today, it’s the code name for a webpage that can no longer be found. Coincidence?" },
        {id:'3', title: "Durango", content: "When Microsoft was looking to build upon its wildly popular XBox 360 gaming console, Durango was its name-o. But like all Microsoft projects, the project name was far from the final product name. In this case, they thought long and hard and hired the best people to release the One. XBox One." }
    ]}

const projectReducers = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_PROJECT':
            console.log('add project', action.project)
            let projects = [...state.projects, action.project]
            return {projects}   
        default:
            return state;
    } 
}

export default projectReducers