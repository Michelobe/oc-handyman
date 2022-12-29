import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// INCLUDES
import MegaNav from './components/includes/MegaNav.js';
import Footer from './components/includes/Footer.js';
// HOME PAGE
import HomePage from './components/homePage/HomePage.js';
// PAGES
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

                <Footer />
            </div>

        </BrowserRouter>
    );
}

export default App;
