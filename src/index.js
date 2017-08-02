import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Title from './reducers/title';
import Home from './containers/home';
import { Provider } from 'react-redux';

let store = createStore(Title);

class App extends React.Component {
	render() {
		return (
			<div>
				<Home store={store} />
			</div>
		)
	}
}

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('app')
);