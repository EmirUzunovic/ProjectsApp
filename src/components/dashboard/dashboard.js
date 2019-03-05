import React from 'react'
import ProjectList from '../projects/projectList'
const Dashboard = () => {
    return(
    <div>
        <div className="container">
        <ProjectList/>
        </div>
        <div className = "container">
        Notifications
        </div>
    </div>
    )
    }
export default Dashboard