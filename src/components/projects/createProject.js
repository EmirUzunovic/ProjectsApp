import React, {Component} from 'react'

class CreateProject extends Component {
    state = {projectTitle: "", projectContent: ""}

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
                <h4>Create new project</h4>
                <div className="input-field">
                    <input type="text" id="projectTitle" className="validate" onChange = {this.handlechange}/>
                    <label className="active" htmlFor="firstName">Project Title</label>
                </div>
                <div className="input-field">
                    <textarea type="text" id="projectContent" className="materialize-textarea" onChange = {this.handlechange}></textarea>
                    <label className="active" htmlFor="lastName">Project Content</label>
                </div>
                
                <div className="input-field">
                    <button className="btn blue-grey lighten-2" onClick = {this.onsubmit}>Create</button>
                </div>
            </form>         
            </div>
        )
    }
}

export default CreateProject