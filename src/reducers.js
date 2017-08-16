import * as actionTypes from './actions/types';

export const boilerTitle = (state = 'Andy Boiler', action) => {

	switch(action.type) {
		case actionTypes.SET_TITLE:
			return action.title;
		default:
			return state;
	}
};