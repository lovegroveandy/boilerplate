import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Header from './header';

describe('Header component', () => {
	const props = {
		title: 'hello',
		changeTitle: () => {}
	};

	it('should have a heading with the title', () => {
		const wrapper = shallow(<Header {...props} />);
		const h1 = wrapper.find('h1');
		expect(h1.length).to.equal(1);
		expect(h1.text()).to.equal(props.title);
	});
});