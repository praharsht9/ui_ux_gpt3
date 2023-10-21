import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Menu = () => {
	return (
		<div className='menu-list'>
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
	);
};
const NavBar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	return (
		<div>
			<div className='gpt3__navbar side_section__padding'>
				<div className='gpt3__navbar-link'>
					<div className='gpt__navbar-logo'>
						<img src={logo} alt='gpt-3' />
					</div>
					<div className='navbar-links_container' id='desktop-menu'>
						<Menu />
					</div>
					<div className='gpt3__header_btn'>
						<p>Sign in</p>
						<button type='button'>Sign Up</button>
					</div>
					<div className='gpt3__navbar-menu'>
						{toggleMenu ? (
							<RiCloseLine
								color='#fff'
								size={27}
								onClick={() => setToggleMenu(false)}
							/>
						) : (
							<RiMenu3Line
								color='#fff'
								size={27}
								onClick={() => setToggleMenu(true)}
							/>
						)}

						{toggleMenu && (
							<div className='gpt3__navbar-menu_container scale-up-center'>
								<div className='navbar-links_container'>
									<Menu />
									<div
										className='gpt3__header_btn'
										id='mobile_btn'
									>
										<p>Sign in</p>
										<button type='button'>Sign Up</button>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
