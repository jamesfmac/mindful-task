import React, { Component } from 'react';
import '../styles/TaskList.css';
import Task from './Task.js'
import AddTask from'./AddTask.js'

class TaskList extends Component{

  constructor(props){
    super(props);
    this.state = {name: ['james', 'lex', 'fred']}
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    
  };

  addTask(newTask){
    console.log('newTask is ' + newTask)
    this.setState ({name: [...this.state.name, newTask] });
  }

  removeTask(removeTask){
    const filteredTasks = this.state.name.filter(name => {
      return name !== removeTask;
    });
    this.setState ({name: filteredTasks});
  }




  renderTasks (){
    return this.state.name.map(name =>(
      <Task key = {name} name = {name} removeTask = {this.removeTask} />));
  }


  render(){
    return(
      <div className = 'TaskList'>
      <AddTask addTask= {this.addTask} />
      {this.renderTasks()}
      
       </div>
    )
  }

};

export default TaskList;