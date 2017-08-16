import { expect } from 'chai';
import * as types from './types';
import { setTitle } from './title';

describe('The setTitle action', () => {
	it('should return a message with the type SET_TITLE', () => {
		const result = setTitle({});
		expect(result.type).to.equal(types.SET_TITLE)
	})
});
