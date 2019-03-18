import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addProject } from '../../actions/projectActions'
import { Redirect } from 'react-router-dom'

class CreateProject extends Component {
    state = {title: "", content: ""}

    handlechange = (element) => {
        this.setState({[element.target.id]: element.target.value })
    }

    onsubmit = (element) => {
    element.preventDefault();
        this.props.addProject(this.state)
        this.props.history.push('/')
    }
    render(){
        const {auth} = this.props
        if(!auth.uid) return <Redirect to = '/'/>
        return(
          
            <form className="container" autoComplete="on">
                <h4>Create new project</h4>
                <div className="input-field">
                    <input type="text" id="title" className="validate" onChange = {this.handlechange}/>
                    <label  htmlFor="firstName">Project Title</label>
                </div>
                <div className="input-field">
                    <textarea type="text" id="content" className="materialize-textarea" onChange = {this.handlechange}></textarea>
                    <label htmlFor="lastName">Project Content</label>
                </div>
                <div className="input-field">
                    <button className="btn light blue lighten-2" onClick = {this.onsubmit}>Create</button>
                </div>
            </form>         
          
        )
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addProject: (project) => dispatch(addProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)