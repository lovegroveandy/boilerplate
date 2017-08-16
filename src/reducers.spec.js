import { expect } from 'chai';
import * as reducers from './reducers';
import * as types from './actions/types';

describe('boilerTitle reducer', () => {
	it('should handle SET_TITLE', () => {
		const initialState = 'Andy Boiler';
		const title = 'Foo Bar Baz';
		const newState = reducers.boilerTitle(initialState, {type: types.SET_TITLE, title});
		expect(newState).to.equal(title);
	});

	it('should fall back to the current state by default', () => {
		const initialState = 'Foo Bar Baz';
		const title = 'Hello';
		const newState = reducers.boilerTitle(initialState, {type: 'YO', title});
		expect(newState).to.equal(initialState);
	});
});