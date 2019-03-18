import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import SigneInLink from './signedInLinks'
import SigneOutLink from './signedOutLinks'
import { connect } from 'react-redux'
import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'



class Navbar extends Component {
    componentDidMount() {
      const options = { inDuration: 250, outDuration: 200, draggable: true};
      M.Sidenav.init(this.Sidenav)
    }
 
    

    

    render() {
      const { auth, profile } = this.props
      const links = auth.uid? <SigneInLink profile = {profile}/> : <SigneOutLink/>
      return(
            <nav className="nav-wrapper amber">
              <div className="container"> 
              <Link to ="/" className="brand-logo">Projects</Link>
              <Link to="/" className="sidenav-trigger left" data-target="mobile-links"><i className = "material-icons">menu</i></Link>
              <NavLink to ="/" className ="btn-floating right center-align light blue lighten-2 waves-effect waves-dark z-depth-0">{this.props.profile.initials}</NavLink>
              {links}
              
              </div>
            </nav>
    )
    }
    
    }

    const mapStateToProps = (state) => {
      return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
      }
    }
    
export default connect(mapStateToProps)(Navbar) 