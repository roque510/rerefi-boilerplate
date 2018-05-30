export default function (state = {}, action){
	switch(action.type){
		case "inc":
			let x = state + 1;
			return x
		default:
			return state
	}
}