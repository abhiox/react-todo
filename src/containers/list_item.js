import React, { Component } from 'react';
import _ from 'lodash';

class SearchInput extends Component{
	constructor(props){
		super(props);

		this.state = {
			item: '',
		};

		this.submitForm = this.submitForm.bind(this);
		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(event){
		this.setState({item: event.target.value});
	}

	submitForm(event){
		event.preventDefault();

		if(this.state.item !== ''){
			this.props.addItem(this.state.item);
			this.setState({item: ''});
		}
	}

	componentDidMount(){
		this.addItemInput.focus();
	}

	componentDidUpdate(){
		this.addItemInput.focus();
	}

	render(){
		return(
			<form className="input-group mt-4" onSubmit={this.submitForm}>
				<input  
					placeholder="add item"
					className="form-control"
					onChange={this.onInputChange}
					value={this.state.item}
					ref={input => {this.addItemInput = input;}}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-primary">Add</button>
				</span>
			</form>
		);
	}
}

class Count extends Component {
	constructor(props) {
	  	super(props);
	
	  	this.getCompletedTasks =  this.getCompletedTasks.bind(this);
	}

	getCompletedTasks(){
		const items = this.props.items;

		return _.reduce(items, (total, item) => {
			if(item.checked){
				total = total + 1;
				return total;
			}else{
				return total;
			}
		}, 0);
	}

	render() {
		return (
			<div className="row justify-content-sm-between mt-3 mb-3">
				<div>{this.props.items.length || <div>Yay! No tasks</div>}</div>
				<div>{this.getCompletedTasks()}/{this.props.items.length}</div>
			</div>
		);
	}
}


class List extends Component{
	returnItem(){
		return _.map(this.props.items, (item, index) => {
			return (
				<li key={index} className="list-group-item">
					<input 
						type="checkbox"
						onClick={() => this.props.checkItem(index)}
						className="mr-3"
						checked={item.checked}
					/>
					<span className={item.checked ? 'strike':''}>{item.value}</span>
					<span className="right text-danger cursor-pointer" onClick={() => this.props.deleteItem(index)}>Delete</span>
				</li>
			);
		});
	}

	render() {
		return (
			<ul className="list-group">
				{this.returnItem()}
			</ul>
		);
	}
}

class ListItem extends Component{
	constructor(props) {
	    super(props);
	
		this.state = {
			items : [],
		};

		this.addItem = this.addItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
		this.checkItem = this.checkItem.bind(this);
	}

	addItem(val){
		const item = {
			value: val,
			checked: false
		};

		var items = this.state.items;
		items.push(item);

		this.setState({
			items : items
		});
	}

	checkItem(index){
		var items = this.state.items;
		if(items[index].checked){
			items[index].checked = false;
		}else{
			items[index].checked = true;
		}

		this.setState({
			items: items
		});
	}

	deleteItem(index){
		var items = this.state.items;
		items.splice(index, 1);

		this.setState({
			items: items
		});
	}

	render(){
		return(
			<div className="row justify-content-sm-center">
				<div className="col-8">
					<SearchInput 
						addItem = {this.addItem.bind()}
					/>

					<Count 
						items = {this.state.items}
					/>

					<List
						items = {this.state.items}
						deleteItem = {this.deleteItem}
						checkItem = {this.checkItem}
					/>
				</div>
			</div>
		);
	}
} 

export default ListItem;