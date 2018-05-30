import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import torneoReducer from './torneoReducer';

const rootReducer = combineReducers({
	form: formReducer,
	torneos: torneoReducer,
	count: 42,
	name: "Armando"
});

export default rootReducer;