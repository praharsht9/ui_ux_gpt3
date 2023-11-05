import React from 'react';
import './feature.css';

const Feature = ({ title, text }) => {
	return (
		<div className='main-container'>
			<div className='gpt-title'>
				<div className='heading-top'>
					<h1>{title}</h1>
				</div>
			</div>
			<div className='gpttext'>
				<p>{text} </p>
			</div>
		</div>
	);
};

export default Feature;
