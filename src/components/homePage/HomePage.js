import React from 'react';
// HOME PAGE
import JumboTron from './sections/JumboTron.js';
import CardSection from './sections/CardSection.js';
import IntroSection from './sections/IntroSection.js';
import SpecialServices from './sections/SpecialServices.js';
import ProjectsSection from './sections/ProjectsSection.js';
import AboutTeam from './sections/AboutTeam.js';

function HomePage() {
    return (
        <div>
            <JumboTron />
            <CardSection />
            <IntroSection />
            <SpecialServices />
            <ProjectsSection />
            <AboutTeam />
        </div>
    );
}

export default HomePage;
