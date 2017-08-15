import React from 'react';
import Header from '../components/header';
import { setTitle } from '../actions/title';
import { connect } from 'react-redux';

class Home extends React.Component {

	componentDidMount() {

	}

	change (control, e) {
		e.preventDefault();
		this.props.store.dispatch(setTitle('Henry'))
	}

	render() {
		const { stateProps } = this.props;

		return (
			<Header title={stateProps} changeTitle={this.change.bind(this, this)} />
		)
	}
}

export default connect()(Home);