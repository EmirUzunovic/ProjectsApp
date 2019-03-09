import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const ProjectDetails = (props) => {
    const {project} = props

    if(project){
        console.log(project)
        return(
    <div>
        <div className="col s12 m5" >
            <div className="card-panel teal">
                <span className="white-text"><h4>{project.title}</h4></span>
                <br/>
                <span className="white-text">{project.content}</span>
                <br/>
                <span className="white-text">{project.authorFirstName} {project.authorLastName}</span>
            </div>
        </div>
    </div>
    )
    } else {
        return (    
            <div className="spinner-layer spinner-green">
                <div className="circle-clipper left">
                    <div className="circle"></div>
                </div>
                <div className="gap-patch">
                    <div className="circle"></div>
                </div>
                <div className="circle-clipper right">
                    <div className="circle"></div>
                </div>
            </div>
    )
    }
    } 

    const mapStateToProps = (state, ownProps) => {
        // console.log(state);
        const id = ownProps.match.params.id;
        const projects = state.firestore.data.projects;
        const project = projects ? projects[id] : null
        return {
          project: project
        }
      }
export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: 'projects' }])
)(ProjectDetails)