import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

const ProjectList = (props) => {
    const {projects, auth} = props
    if(!auth.uid) return <Redirect to ='/login'/>
    console.log(projects)
    return(
        <div className="row">
            {projects && projects.map(x => {
                return (
                <Link to = {'/project/' + x.id} key = {x.id}>
                    <div className="project-list section" >
                        <div className="card-panel teal">
                            <span className="white-text"><h4>{x.title}</h4></span>
                            <br/>
                            <span className="white-text">{x.content}</span>
                            <br/>
                            <span className="red-text">Posted by: {x.authorFirstName} {x.authorLastName}</span>
                            <br/>
                            <span className="red-text">Time: {moment(x.createdAt.toDate()).calendar()}</span>
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
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: 'projects' }, {collection: 'notifications', limit: 3}])
  )(ProjectList)
