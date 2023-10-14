import React from 'react';
import logo from '../../assets/logo.png';
import './navbar.css';

const NavBar = () => {
	return (
		<div>
			<div className='gpt3__navbar side_section__padding'>
				<div className='gpt3__navbar-link'>
					<div className='gpt__navbar-logo'>
						<img src={logo} alt='gpt-3' />
					</div>
					<div className='navbar-links_container'>
						<p>
							<a href='#home'>Home</a>
						</p>
						<p>
							<a href='#wgpt3'>What is GPT3?</a>
						</p>
						<p>
							<a href='#possibility'>Open AI</a>
						</p>
						<p>
							<a href='#features'>Case Studies</a>
						</p>
						<p>
							<a href='#blog'>Library</a>
						</p>
					</div>
					<div className='gpt3__header_btn'>
						<p>Sign in</p>
						<button type='button'>Sign Up</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
