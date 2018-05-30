import { database } from '../Firebase';
export const FETCH_PARTIDOS = 'fetch_partidos';

export function getPartidos(){
	
	return dispatch => { database.on('value', data => {
		console.log("ooohhh",data.val());
			dispatch({
				type: 'fetch_partidos',
				payload: data.val()
			})
		})
	}
}