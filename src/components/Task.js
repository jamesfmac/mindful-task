import React, { Component } from 'react';
import '../styles/Task.css';

class Task extends Component{

constructor(props){
  super(props);
  this.state = {due:'Now'};
  this.removeTask = this.removeTask.bind(this)

};

removeTask(){
  this.props.removeTask(this.props.taskDescription)
  console.log('remove ' + this.props.taskDescription)
}

handleClick(){
  this.setState ({due:'Later'})
}

  render(){
    return(
      <div className = 'Task'>
      {this.props.taskDescription}
      <br/>
      <button className='btn' onClick = {() => this.handleClick()} > 
      {this.state.due} 
      
       </button>
       <button className = 'removebtn' onClick = {this.removeTask}> Remove
       </button>
       </div>
    )
  }

};

export default Task;