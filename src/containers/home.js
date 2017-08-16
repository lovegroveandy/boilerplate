import React from 'react';
import Header from '../components/header';
import { setTitle } from '../actions/title';
import { connect } from 'react-redux';

export class Home extends React.Component {
	constructor() {
		super();
		this.onChange = this.onChange.bind(this);
	}


	onChange (e) {
		e.preventDefault();
		const { dispatch } = this.props;
		dispatch(setTitle('Henry'));
	}

	render() {
		const { boilerTitle } = this.props;

		return (
			<Header title={boilerTitle} changeTitle={this.onChange} />
		)
	}
}

export default connect(
	({boilerTitle}) => ({boilerTitle})
)(Home);