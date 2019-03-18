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
    return(
        <div className="row">
            {projects && projects.map(x => {
                return (
                <Link to = {'/project/' + x.id} key = {x.id}>
                    <div className="project-list section" >
                        <div className="card amber lighten-2 black-text">
                            <div className="card-content">
                            <span className="card-title center-align"><i className="material-icons left">assignment</i><h4> {x.title}</h4></span>
                            <p className="truncate">{x.content}</p>
                            <p>Posted by: {x.authorFirstName} {x.authorLastName}</p>
                            <p>Time: {moment(x.createdAt.toDate()).calendar()}</p>
                            </div>
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
    firestoreConnect([{ collection: 'projects', orderBy: ['createdAt', 'desc'] }, 
                      {collection: 'notifications', limit: 3, orderBy: ['time', 'desc']},
                    ])
  )(ProjectList)
