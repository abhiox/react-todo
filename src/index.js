import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';

// import { createStore, applyMiddleware } from 'redux';

// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import promise from 'redux-promise';

import './index.css';
// import reducers from './reducers';

// import TodoList from './containers/todo_list';
import ListItem from './containers/list_item';

import registerServiceWorker from './registerServiceWorker';

// const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

/*<Provider store={createStoreWithMiddleware(reducers)}>
	<BrowserRouter>
		<div>
			<Switch>
				<Route path="/item" component={ListItem}/>
				<Route path="/" component={TodoList}/>
			</Switch>
		</div>
	</BrowserRouter>
</Provider>*/

ReactDOM.render(
	<ListItem />

	,document.getElementById('root'));
registerServiceWorker();
