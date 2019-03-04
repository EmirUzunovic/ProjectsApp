import React, {Component} from 'react'

class LogIn extends Component {
    state = {email: "", password: ""}

    handlechange = (element) => {
        this.setState({[element.target.id]: element.target.value })
    }

    onsubmit = (element) => {
    element.preventDefault();
       console.log(this.state)
    }
    render(){
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
            </form>         
            </div>
        )
    }
}

export default LogIn