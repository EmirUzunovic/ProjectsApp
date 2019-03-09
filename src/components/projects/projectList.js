import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const ProjectList = (props) => {
    let {projects} = props
 
    return(
        <div className="row">
            {projects && projects.map(x => {
                return (
                <Link to = {'/project/' + x.id} key = {x.id}>
                    <div className="col s12 m5" >
                        <div className="card-panel teal">
                            <span className="white-text"><h4>{x.title}</h4></span>
                            <br/>
                            <span className="white-text">{x.content}</span>
                        </div>
                    </div>
                </Link>
                )
            })}
        </div>   
        )
    }

const mapStateToProps = (state) => {
  
  return {
    projects: state.firestore.ordered.projects
  }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: 'projects' }])
  )(ProjectList)
