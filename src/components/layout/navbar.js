import React from 'react'
import { Link } from 'react-router-dom'
import SigneInLink from './signedInLinks'
import SigneOutLink from './signedOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
    const { auth, profile } = props

    const links = auth.uid? <SigneInLink profile = {profile}/> : <SigneOutLink/>
    return(
      <nav>
      <div className="nav-wrapper blue-grey lighten-2">
        <Link to ="/" className="brand-logo left center-on-med-and-down ">Projects</Link>
       {links}
      </div>
    </nav>
    )
    }

    const mapStateToProps = (state) => {
      console.log(state)
      return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
      }
    }
    
export default connect(mapStateToProps)(Navbar) 