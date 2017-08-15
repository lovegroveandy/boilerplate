import React from 'react';
import style from '../assets/style.less';

export default ({ title, changeTitle }) => {
	return (
		<div>
			<h1>{title}</h1>
			<a href="" onClick={changeTitle} >hello</a>
		</div>
)}