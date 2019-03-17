import React from 'react'
import { Link } from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import SigneInLink from './signedInLinks'
import SigneOutLink from './signedOutLinks'
import { connect } from 'react-redux'
import M from 'materialize-css'

const Navbar = (props) => {
    const { auth, profile } = props
    console.log(props)
    M.AutoInit();

    const links = auth.uid? <SigneInLink profile = {profile}/> : <SigneOutLink/>
    return(
            <nav className="nav-wrapper amber">
              <div className="container"> 
              <Link to ="/" className="brand-logo">Projects</Link>
              <Link to="/" className="sidenav-trigger left" data-target="mobile-links"><i className = "material-icons">menu</i></Link>
              <ul id="mobile-links" className="sidenav">
              <li><NavLink to ="/newproject">New Project</NavLink></li>
              <li><a onClick = {props.profile}>Log Out</a></li>
              <li><NavLink to ="/" className ="btn-floating right center-align light blue lighten-2 waves-effect waves-dark z-depth-0">{props.profile.initials}</NavLink></li>
              </ul>
              {links}
              </div>
            </nav>
    )
    }

    const mapStateToProps = (state) => {
      return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
      }
    }
    
export default connect(mapStateToProps)(Navbar) 