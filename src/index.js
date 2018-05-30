import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducers from "./Reducers/index"
import thunk from 'redux-thunk';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

let initialState = {
	count: 42,
	name: "Armando"
};

const store = createStoreWithMiddleware(reducers);

console.log("========>",initialState);
// function reducer(state = initialState, action) {



// 	console.log(state);
//   switch(action.type) {
//     case 'CHANGE_NAME':
//       return {
//         name: "ROQUE"
//       };
//     case 'INCREMENT':
//       return {
//         count: state.count + 1
//       };
//     case 'DECREMENT':
//       return {
//         count: state.count - 1
//       };
//     default:
//       return state;
//   }
// }

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>

	, document.getElementById('root'));
registerServiceWorker();
