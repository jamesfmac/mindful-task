import React, { Component } from 'react';
import '../styles/AddTask.css';

class AddTask extends Component {

constructor(props){
	super(props);
	this.state = {taskName: '',
	taskPriority: '' };
	this.handleDescriptionUpdate = this.handleDescriptionUpdate.bind(this);
	this.handlePriorityUpdate = this.handlePriorityUpdate.bind(this);
	this.addTask = this.addTask.bind(this);
}

handleDescriptionUpdate(event){
	this.setState({taskName: event.target.value})
	console.log(this.state.taskName)
}
handlePriorityUpdate(event){
	this.setState({taskPriority: event.target.value})
	console.log(this.state.taskName)
}


addTask(){
	this.props.addTask(this.state.taskName);
	this.props.addTask(this.state.taskPriority);
	this.setState({taskName:'', taskPriority: ''});
}


render(){
	return (
		<div className = 'AddGreeter'>
		<input type = 'text' onChange= {this.handleDescriptionUpdate} placeholder='Description' value = {this.state.taskName}/>
		<input type = 'checkbox' onChange= {this.handlePriorityUpdate} />
        <button onClick = {this.addTask}>Add</button>
		</div>
		)
}

}

export default AddTask;