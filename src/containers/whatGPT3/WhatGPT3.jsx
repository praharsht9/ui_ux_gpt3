import React from 'react';
import './whatGPT3.css';
import Feature from '../../components/feature/Feature';

const WhatGPT3 = () => {
	return (
		<div className='main_container'>
			<div className='gpt__features'>
				<h1>What is GPT-3</h1>
				<p>
					We so opinion friends me message as delight. Whole front do
					of plate heard oh ought. His defective nor convinced
					residence own. Connection has put impossible own apartments
					boisterous. At jointure ladyship an insisted so humanity he.
					Friendly bachelor entrance to on by.
				</p>
			</div>

			<div className='gpt_heading'>
				<h1 className='gradient__text'>
					The possibilities are beyond your imagination
				</h1>
				<p>Explore the Library</p>
			</div>

			<div className='gpt3_container'>
				<Feature
					title='Chatbots'
					text='We so opinion friends me message as delight. Whole front do of plate heard oh ought.'
				/>
				<Feature
					title='Knowledgebase'
					text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments'
				/>
				<Feature
					title='Education'
					text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments'
				/>
			</div>
		</div>
	);
};

export default WhatGPT3;
