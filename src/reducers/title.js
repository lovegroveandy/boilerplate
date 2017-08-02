export default function boilerTitle(state = 'Andy Boiler', action) {

	switch(action.type) {
		case 'SET_TITLE':
			return action.title;
		default:
			return state;
	}
}