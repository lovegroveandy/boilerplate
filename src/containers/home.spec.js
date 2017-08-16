import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import mockStore from 'redux-mock-store';
import { Home } from './home';
import Header from '../components/header';
import * as actions from '../actions/title';

const createStore = mockStore();


const props = {
	boilerTitle: {}
};

describe('Home container', () => {
	it('should render a Header Component', () => {
		const wrapper = shallow(<Home {...props} />);
		const component = wrapper.find(Header);
		expect(component).to.exist;
	});

	it('should dispatch with the setTitle action when its onChange handler is called', () => {
		const store = createStore(props);
		const event = {
			preventDefault: () => {}
		};
		const dispatchStub = sinon.stub(store, 'dispatch');
		const setTitleStub = sinon.stub(actions, 'setTitle');
		const wrapper = shallow(<Home {...store} />);
		const spy = sinon.spy(setTitleStub);
		wrapper.instance().onChange(event);
		dispatchStub.restore();
		setTitleStub.restore();
		spy.restore();
		expect(dispatchStub.calledOnce).to.be.true;
		expect(setTitleStub.calledOnce);
		expect(spy.withArgs(event.target).calledOnce);
	})

	it('should bind itself to its event handlers in its constructor', () => {
		const spy1 = sinon.spy(Home.prototype.onChange.bind);
		const container = new Home();
		expect(spy1.withArgs(container).calledOnce)
	})
});