import React from 'react';
import Header from '../components/header';

export default class Home extends React.Component {
	render() {
		const stateProps = this.props.store.getState();

		return (
			<Header title={stateProps} />
		)
	}
}