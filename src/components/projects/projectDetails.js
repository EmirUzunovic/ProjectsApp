import React from 'react'
import { connect } from 'react-redux'
const ProjectDetails = (props) => {
    let {projects, id} = props
    console.log(id)
    console.log(projects)
    let project = projects.filter(x => {
        return x.id === id
    })
    let projectId = project[0].id
    let projectContent = project[0].content
    let projectTitle = project[0].title
    console.log(project[0].title)
    return(
    <div>
        <div className="col s12 m5" >
            <div className="card-panel teal">
                <span className="white-text"><h4>{projectTitle}</h4></span>
                <br/>
                <span className="white-text">{projectContent}</span>
                <br/>
                <span className="white-text">{projectId}</span>
            </div>
        </div>
    </div>
    )
    }

    const mapStateToProps = (state, ownProps) => {
        
        return (
            {projects: state.project.projects,
            id: ownProps.match.params.id}
        )
    }
export default connect(mapStateToProps)(ProjectDetails)