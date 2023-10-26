import './App.css';
import { NavBar } from './components';
import Header from './containers/header/Header';

function App() {
	return (
		<div className='App'>
			<div className='gradient__bg'>
				<NavBar />
				<Header />

				<h1>App</h1>
			</div>
		</div>
	);
}

export default App;
