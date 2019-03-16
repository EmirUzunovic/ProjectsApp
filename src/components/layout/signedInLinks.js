import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../actions/authActions'

const SigneInLink = (props) => {
    return(
    <div>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to ="/newproject">New Project</NavLink></li>
            <li><a onClick = {props.signOut}>Log Out</a></li>
            <li><NavLink to ="/" className ="btn-floating right center-align light blue lighten-2 waves-effect waves-dark z-depth-0">{props.profile.initials}</NavLink></li>
        </ul>
        <ul id="mobile-links" className="sidenav">
            <li><NavLink to ="/newproject">New Project</NavLink></li>
            <li><a onClick = {props.signOut}>Log Out</a></li>
            <li><NavLink to ="/" className ="btn-floating right center-align light blue lighten-2 waves-effect waves-dark z-depth-0">{props.profile.initials}</NavLink></li>
        </ul>
    </div>
    )
    }

    const mapDispatchToProps = (dispatch)=> {
        return {
            signOut : () => dispatch(signOut())
        }
    }
    export default connect(null, mapDispatchToProps)(SigneInLink)