import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class SignUp extends Component {
    state = {email: "", password: "", firstName:"", lastName:""}

    handlechange = (element) => {
        this.setState({[element.target.id]: element.target.value })
    }

    onsubmit = (element) => {
    element.preventDefault();
       console.log(this.state)
    }
    render(){
        const { auth } = this.props
        if(auth.uid) return <Redirect to = '/'/>
        return(
            
            <div className="container">
                
            <form>
                <h4>Sign up</h4>
                <div className="input-field">
                    <input type="text" id="firstName" className="validate" onChange = {this.handlechange}/>
                    <label className="active" htmlFor="firstName">First Name</label>
                </div>
                <div className="input-field">
                    <input type="text" id="lastName" className="validate" onChange = {this.handlechange}/>
                    <label className="active" htmlFor="lastName">Last Name</label>
                </div>
                <div className="input-field">
                    <input type="email" id="email" className="validate" onChange = {this.handlechange}/>
                    <label className="active" htmlFor="email">Email</label>
                </div>
                <div className="input-field">
                    <input type="password" id="password" onChange = {this.handlechange}/>
                    <label className="active" htmlFor="name">Password</label>
                </div>
                <div className="input-field">
                    <button className="btn blue-grey lighten-2" onClick = {this.onsubmit}>Sign up</button>
                </div>
            </form>         
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}
export default connect(mapStateToProps)(SignUp)