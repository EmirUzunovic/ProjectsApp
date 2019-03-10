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
                <form>
                    <h4>Log In</h4>
                    <div className="input-field">
                        <input type="email" id="email" className="validate" onChange = {this.handlechange}/>
                        <label className="active" htmlFor="email">Email</label>
                    </div>
                    <div className="input-field">
                        <input type="password" id="password" onChange = {this.handlechange}/>
                        <label className="active" htmlFor="name">Password</label>
                    </div>
                    <div className="input-field">
                        <button className="btn blue-grey lighten-2" onClick = {this.onsubmit}>LogIn</button>
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