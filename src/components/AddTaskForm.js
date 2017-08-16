import React, { Component } from 'react';
import '../styles/AddTask.css';

class AddTaskForm extends Component {

	constructor(props){
	super(props);
	this.state = {
		taskDescription: '',
		taskUrgency: false ,
		taskImportance: false,
		};
	this.handleSubmit = this.handleSubmit.bind(this);
	this.handleChange = this.handleChange.bind(this);
	
}

handleChange(event){
	const target = event.target;
	const name = event.target.name 

	//checkbox input types don't have a value property, this creates one 
	const value = target.type === 'checkbox' ? target.checked : target.value;

	this.setState({[name]:value})
	console.log(event.target.name + ' ' + value)

}


handleSubmit(event){

event.preventDefault();
this.props.addTask(this.state)
console.log(this.state)
this.setState({taskDescription: '',
			taskUrgency: false,
			taskImportance: false
})



}

	



render(){
	return (
		<div className = 'AddTask'> 

		<div className = 'AddTaskTitle' >Create Task</div>
		<form onSubmit = {this.handleSubmit} >
		<label> Task </label>
		<input type = 'text' name = 'taskDescription' onChange = {this.handleChange} value = {this.state.taskDescription}/>
		<label>
		Urgent
		</label> 
		<input type = 'checkbox' name = 'taskUrgency' onChange = {this.handleChange} checked = {this.state.taskUrgency}/>
		<label>
		Important
		</label> 
		<input type = 'checkbox' name = 'taskImportance' onChange = {this.handleChange} checked = {this.state.taskImportance}/>
		
		<input type = 'submit' value = 'Create' /> 
		</form>
		</div>
		)
}

}

export default AddTaskForm;