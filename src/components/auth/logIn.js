import React, {Component} from 'react'
import { signIn } from '../../actions/authActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class LogIn extends Component {
    state = {email: "", password: ""}

    handlechange = (element) => {
        this.setState({[element.target.id]: element.target.value })
    }

    onsubmit = (element) => {
    element.preventDefault();
       console.log(this.state)
       this.props.logIn(this.state)
    }

    render(){
        const {authError, auth} = this.props
        if(auth.uid) return <Redirect to ='/'/>
        return(
            <div className="container">

            <div className="row">
            <div className="card col s12 m4 light blue lighten-2 white-text z-depth-1 ">
                <div className="card-content">
                    <span className="card-title">Try out project app as  a test user.</span>
                    <p>Email: user@wanderer.com</p>
                    <p>Password: test1234 </p>
                </div> 
            </div>
          </div>
                <form className="container" Autocomplete="on">
                    <h4>Log In</h4>
                    <div className="input-field">
                        <input type="email" id="email" className="validate" onChange = {this.handlechange}/>
                        <label class="active" htmlFor="email">Email</label>
                    </div>
                    <div className="input-field">
                        <input type="password" id="password" onChange = {this.handlechange}/>
                        <label class="active" htmlFor="name">Password</label>
                    </div>
                    <div className="input-field">
                        <button className="btn light blue lighten-2" onClick = {this.onsubmit}>LogIn</button>
                    </div>
                    <div className ="center red-text">
                        {authError ? <p> { authError } </p>: null}
                    </div>
                </form>    

                
                </div>     
     
        )
    }
}

const mapStateToProps = (state) => {
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logIn: (credentials) => dispatch(signIn(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)