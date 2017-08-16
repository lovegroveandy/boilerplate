import { expect } from 'chai';
import * as types from './types';
import { setTitle } from './title';

describe('The setTitle action', () => {
  it('should return an object with type SET_TITLE', () => {
    expect(setTitle()((a) => a).type).to.equal(types.SET_TITLE);
  });
  it('should pass its argument into the returned object with key title', () => {
    const arg = 'some title';
    expect(setTitle(arg)((a) => a).title).to.equal(arg);
  });
});
