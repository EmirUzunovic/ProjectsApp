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
            <li><NavLink to ="/" className ="btn-floating btn-large waves-effect waves-light teal lighten-3">NN</NavLink></li>
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