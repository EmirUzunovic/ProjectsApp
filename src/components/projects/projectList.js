import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const ProjectList = (props) => {
    let {projects} = props
    console.log(projects)
    let project = projects.map(x => {
        return (
            <Link to = {'/project/'+ x.id} key = {x.id}>
                <div className="col s12 m5" >
                    <div className="card-panel teal">
                        <span className="white-text"><h4>{x.title}</h4></span>
                        <br/>
                        <span className="white-text">{x.content}</span>
                    </div>
                </div>
            </Link>
        )
    })

    return(
        <div className="row">
            {project}
        </div>
        
    )
    }

const mapStateToProps = (state) => {
  return {
      projects: state.project.projects
  }
}

export default connect(mapStateToProps)(ProjectList)