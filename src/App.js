import React from 'react';
import './App.css';
import AboutMe from './pages/aboutMe.js';
import Project from './pages/projects.js';
import Activities from './pages/activities.js';
import Contact from './pages/contact.js';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<AboutMe />
				<Project />
			</header>
		</div>
	);
}

export default App;
