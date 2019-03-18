import React from 'react'
import { NavLink } from 'react-router-dom'

const SigneOutLink = () => {
    //returning two sets of ul, one for s size screen, and other for m and l size screens
    return(
        <div>
            <ul className="right hide-on-med-and-down">
                <li><NavLink to="/signup">Sign Up</NavLink></li>
                <li><NavLink to="/login">Log In</NavLink></li>
            </ul>
            <ul id="mobile-links" className="sidenav">
                <li><NavLink to="/signup">Sign Up</NavLink></li>
                <li><NavLink to="/login">Log In</NavLink></li>
            </ul>
        </div>
        )
    }
    
export default SigneOutLink