import { FETCH_PARTIDOS } from '../Actions/torneoActions';

export default function (state = {}, action){
	switch(action.type){
		case FETCH_PARTIDOS:
			console.log("im here!");
			return action.payload;
		default:
			return state
	}
}