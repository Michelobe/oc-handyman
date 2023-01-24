import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// INCLUDES
import MegaNav from './components/includes/MegaNav.js';
import Footer from './components/includes/Footer.js';
// HOME PAGE
import HomePage from './components/homePage/HomePage.js';
// PAGES
import AboutPage from './components/pages/AboutPage.js';
import Experience from './components/pages/Experience.js';
import Services from './components/pages/Services.js';
// CSSnpm starts
import './css/App.css';

function App() {
    return (
        <BrowserRouter>

            <div className="App">
                <MegaNav />
                
                <Routes>
                    <Route path = '/' element={<HomePage />} />
                </Routes>

                <Routes>
                    <Route path = '/about' element={<AboutPage />} title="About" />
                </Routes>
                
                <Routes>
                    <Route path = '/experience' element={<Experience />} title="Experience" />
                </Routes>

                <Routes>
                    <Route path = '/services' element={<Services />} title="Services" />
                </Routes>

                <Footer />
            </div>

        </BrowserRouter>
    );
}

export default App;
