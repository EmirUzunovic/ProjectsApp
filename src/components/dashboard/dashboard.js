import React from 'react'
import ProjectList from '../projects/projectList'
import Notifications from '../dashboard/notification'

const Dashboard = () => {
    return(
    <div className = "dashboard container">
        <div className = "row">
            
            <div className = "col s12 m5 offset-m1 push-m6">
            <Notifications/>
            </div>
            
            <div className="col s12 m6 pull-m6">
            <ProjectList/>
            </div>
        </div>
    </div>
    )
    }
export default Dashboard