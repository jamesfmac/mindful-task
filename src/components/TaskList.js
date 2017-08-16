import React, { Component } from 'react';
import '../styles/TaskList.css';
import Task from './Task.js'
import AddTaskForm from './AddTaskForm.js'
import SearchBar from './SearchBar.js'

class TaskList extends Component{

  constructor(props){
    super(props);
    this.state = {tasks: [ {taskDescription: 'Items 1', taskUrgency: false ,taskImportance: false},
    {taskDescription: 'Items 2', taskUrgency: false ,taskImportance: false},
    ],
    immediateOnly:false,

    }



    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.handleImmediateOnly = this.handleImmediateOnly.bind(this);
    
  };

  addTask(newTask){
    console.log('newTask is ' + newTask)
    this.setState ({tasks: [...this.state.tasks, newTask] });
  }

  removeTask(removeTask){
    const filteredTasks = this.state.tasks.filter(tasks => {
      return tasks.taskDescription !== removeTask;
    });
    this.setState ({tasks: filteredTasks});
  }
handleImmediateOnly(immediateOnly){
  console.log ('im =' + immediateOnly)
  this.setState ({immediateOnly:immediateOnly});
}



  renderTasks (){
    let filteredTasks = this.state.tasks
    if (this.state.immediateOnly){
      filteredTasks = this.state.tasks.filter(tasks=>{
        return tasks.taskImportance && tasks.taskUrgency
      })
    }
    return filteredTasks.map(tasks =>(
      <Task key = {tasks.taskDescription} taskDescription = {tasks.taskDescription} removeTask = {this.removeTask} />));
  }


  render(){
    return(
      <div className = 'TaskList'>
      <AddTaskForm addTask = {this.addTask}/>
      <SearchBar immediateOnly = {this.state.immediateOnly} handleImmediateOnly = {this.handleImmediateOnly}/>
      {this.renderTasks()}
      
       </div>
    )
  }

};

export default TaskList;