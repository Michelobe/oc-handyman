import React from 'react';
import Header from './components/Header.js';
import JumboTron from './components/JumboTron.js';
import CardSection from './components/CardSection.js';
import IntroSection from './components/IntroSection.js';
import SpecialServices from './components/SpecialServices.js';
import ProjectsSection from './components/ProjectsSection.js';
import AboutTeam from './components/AboutTeam.js';
import './scss/App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <JumboTron />
            <CardSection />
            <IntroSection />
            <SpecialServices />
            <ProjectsSection />
            <AboutTeam />
        </div>
    );
}

export default App;
