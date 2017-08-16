import * as actionTypes from './types';

export function setTitle (title) {
	return {
		type: actionTypes.SET_TITLE,
		title: title
	}
}