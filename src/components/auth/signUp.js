import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp } from '../../actions/authActions'

class SignUp extends Component {
    state = {email: "", password: "", firstName:"", lastName:""}

    handlechange = (element) => {
        this.setState({[element.target.id]: element.target.value })
    }

    onsubmit = (element) => {
    element.preventDefault();
    this.props.signup(this.state);
    }
    render(){
        const { auth, authError } = this.props
        if(auth.uid) return <Redirect to = '/'/>
        return(
                
            <form className="container" autoComplete="on">
                <h4>Sign up</h4>
                <div className="input-field">
                    <input type="text" id="firstName" className="validate" onChange = {this.handlechange}/>
                    <label htmlFor="firstName">First Name</label>
                </div>
                <div className="input-field">
                    <input type="text" id="lastName" className="validate" onChange = {this.handlechange}/>
                    <label htmlFor="lastName">Last Name</label>
                </div>
                <div className="input-field">
                    <input type="email" id="email" className="validate" onChange = {this.handlechange}/>
                    <label htmlFor="email">Email</label>
                </div>
                <div className="input-field">
                    <input type="password" id="password" onChange = {this.handlechange}/>
                    <label htmlFor="name">Password</label>
                </div>
                <div className="input-field">
                    <button className="btn light blue lighten-2" onClick = {this.onsubmit}>Sign up</button>
                </div>
                <div className="center red-text">
                    { authError? <p>{authError}</p> : null}
                </div>
            </form>         
        
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signup: (newUser) => dispatch(signUp(newUser))
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)