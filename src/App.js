import React from 'react';
import MegaNav from './components/includes/MegaNav.js';
import JumboTron from './components/JumboTron.js';
import CardSection from './components/CardSection.js';
import IntroSection from './components/IntroSection.js';
import SpecialServices from './components/SpecialServices.js';
import ProjectsSection from './components/ProjectsSection.js';
import AboutTeam from './components/AboutTeam.js';
import Footer from './components/includes/Footer.js';
import './scss/App.css';

function App() {
    return (
        <div className="App">
            <MegaNav />
            <JumboTron />
            <CardSection />
            <IntroSection />
            <SpecialServices />
            <ProjectsSection />
            <AboutTeam />
            <Footer />
        </div>
    );
}

export default App;
