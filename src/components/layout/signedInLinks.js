import React from 'react'
import { NavLink } from 'react-router-dom'

const SigneInLink = () => {
    return(
    <div>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to ="/newproject">New Project</NavLink></li>
            <li><NavLink to ="/logout">Log Out</NavLink></li>
            <li><NavLink to ="/" className ="btn-floating btn-large waves-effect waves-light teal lighten-3">NN</NavLink></li>
        </ul>
    </div>
    )
    }
export default SigneInLink