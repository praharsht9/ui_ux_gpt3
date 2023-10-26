import React from 'react';
import './header.css';
import ai from '../../assets/ai.png';

const Header = () => {
	return (
		<div className='section_left__padding section_right__padding'>
			<div className='hero-container'>
				<div className='hero-text'>
					<h1 className='gradient_text'>
						Let's Build Something amazing with GPT-3 OpenAI
					</h1>
					<p>
						Yet bed any for travelling assistance indulgence
						unpleasing. Not thoughts all exercise blessing.
						Indulgence way everything joy alteration boisterous the
						attachment. Party we years to order allow asked of.
					</p>
					<div className='content-input'>
						<input type='email' placeholder='Your Email Address' />
						<button type='button'>Get Started</button>
					</div>
				</div>
				<div className='ai_image'>
					<img src={ai} alt='' />
				</div>
			</div>
		</div>
	);
};

export default Header;
