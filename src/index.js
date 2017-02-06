import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import 'bootstrap/dist/css/bootstrap.css';
import './Additional.css';
import App from './App';
import reducer from './reducers/reducer';


const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
	reducer,
	applyMiddleware(...middleware)
	);

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
  	document.getElementById('root')
);
