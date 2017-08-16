import React, { Component } from 'react';
import '../styles/AddTask.css';

class SearchBar extends Component {
	constructor(props){
		super(props);
		this.handleImmediatleyOnlyChange = this.handleImmediatleyOnlyChange.bind(this)

	}

	handleImmediatleyOnlyChange(event) {
    this.props.handleImmediateOnly(event.target.checked);
  }

render(){
	return(
	<div className='SearchBar'>
	<input type = 'checkbox' checked = {this.props.immediateOnly} onChange = {this.handleImmediatleyOnlyChange}/> 
	Immediate items only
	</div>
	)
}

}

export default SearchBar;