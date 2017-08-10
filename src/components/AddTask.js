import React, { Component } from 'react';
import '../styles/AddTask.css';

class AddTask extends Component {

constructor(props){
	super(props);
	this.state = {taskName: '' };
	this.handleUpdate = this.handleUpdate.bind(this);
	this.addTask = this.addTask.bind(this);
}

handleUpdate(event){
	this.setState({taskName: event.target.value})
	console.log(this.state.taskName)
}

addTask(){
	this.props.addTask(this.state.taskName);
	this.setState({taskName:''});
}


render(){
	return (
		<div className = 'AddGreeter'>
		<input type = 'text' onChange= {this.handleUpdate} value = {this.state.taskName}/>
		&nbsp;&nbsp;
        <button onClick = {this.addTask}>Add</button>
		</div>
		)
}

}

export default AddTask;