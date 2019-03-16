import React from 'react'
import { Link } from 'react-router-dom'
import SigneInLink from './signedInLinks'
import SigneOutLink from './signedOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
    const { auth, profile } = props

    const links = auth.uid? <SigneInLink profile = {profile}/> : <SigneOutLink/>
    return(
            <nav className="nav-wrapper amber">
              <div className="container"> 
              <Link to ="/" className="brand-logo">Projects</Link>
              <Link to="/" className="sidenav-trigger left" data-target="{mobile-links}"><i className = "material-icons">menu</i></Link>
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