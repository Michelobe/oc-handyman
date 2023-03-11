import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// INCLUDES
import MegaNav from './components/includes/MegaNav.js';
import Footer from './components/includes/Footer.js';
// HOME PAGE
import HomePage from './components/homePage/HomePage.js';
// PAGES
import AboutPage from './components/pages/AboutPage.js';
import ExperiencePage from './components/pages/ExperiencePage.js';
import ServicesPage from './components/pages/ServicesPage.js';
import ProjectsPage from './components/pages/ProjectsPage.js';
import TeamPage from './components/pages/team/TeamPage.js';
// CSSnpm starts
import './css/App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <MegaNav />
                
                <Routes>
                    <Route path = '/*' element={<HomePage />} />
                    <Route path = '/#/about' element={<AboutPage />} title="About" />
                    <Route path = '/#/experience' element={<ExperiencePage />} title="Experience" />
                    <Route path = '/#/services' element={<ServicesPage />} title="Services" />
                    <Route path = '/#/projects' element={<ProjectsPage />} title="Projects" />
                    <Route path = '/#/team' element={<TeamPage />} title="Team" />
                </Routes>

                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
