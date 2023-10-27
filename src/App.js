import './App.css';
import { NavBar } from './components';
import Header from './containers/header/Header';
import WhatGPT3 from './containers/whatGPT3/WhatGPT3';

function App() {
	return (
		<div className='App'>
			<div className='gradient__bg'>
				<NavBar />
				<Header />
				<WhatGPT3 />
				<h1>App</h1>
			</div>
		</div>
	);
}

export default App;
