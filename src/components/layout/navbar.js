import React from 'react'
import { Link } from 'react-router-dom'
import SigneInLink from './signedInLinks'
import SigneOutLink from './signedOutLinks'

const Navbar = () => {
    return(
      <nav>
      <div className="nav-wrapper blue-grey lighten-2">
        <Link to ="/" className="brand-logo left center-on-med-and-down ">Projects</Link>
        <SigneInLink/>
        <SigneOutLink/>
      </div>
    </nav>
    )
    }
export default Navbar