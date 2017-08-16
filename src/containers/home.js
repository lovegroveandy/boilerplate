import React from 'react';
import Header from '../components/header';
import { setTitle } from '../actions/title';
import { connect } from 'react-redux';

class Home extends React.Component {
	// constructor() {
	// 	super();
	// }

	change (control, e) {
		e.preventDefault();
		setTitle('Henry')
	}

	render() {
		const { boilerTitle } = this.props;

		return (
			<Header title={boilerTitle} changeTitle={this.change.bind(this, this)} />
		)
	}
}

export default connect(
	(boilerTitle) => ({boilerTitle})
)(Home);