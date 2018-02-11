import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TodoList extends Component{
	todolisting(){
		return(
			<li className="list-group-item">
				<Link to="/">asdasd</Link>
				<span className="right">Delete</span>
			</li>
		);
	}

	render(){
		return(
			<div>
				<h4>TO DO'S:</h4>
				<ul className="list-group">
					{this.todolisting()}
				</ul>
			</div>
		);
	}
}

export default TodoList;