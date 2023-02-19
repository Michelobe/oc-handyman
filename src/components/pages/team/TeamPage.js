import React from 'react';
import { Link } from "react-router-dom";
import Handyman from '../../../images/handyman-placeholder.png';


function TeamPage() {
    return (
        <section className='teamPage'>
            <div className='jumboTeam'>
                <div className="container breadCrumbs">
                    <Link to="/" relative="path">
                        <p>Home</p>
                    </Link>
                    <i className="fas fa-chevron-right"></i>
                    <p>Team</p>
                </div>
                <div className='coverContainer'>
                    <div className='lightCover'></div>
                </div>
                <div className='container headerDiv'>
                    <h4>OC Local Handyman</h4>
                    <h2>Meet our Team</h2>
                </div>
            </div>
            <div className='teamIntro'>
                <div className='teammate'>
                    <div className='teamPhoto'><img src={Handyman} alt="Handyman" /></div>
                    <h2>Steve De La Riva</h2>
                    <h6>Handyman</h6>
                </div>
                <div className='teammate'>
                    <div className='teamPhoto'><img src={Handyman} alt="Handyman" /></div>
                    <h2>Brian Welsh</h2>
                    <h6>Handyman</h6>
                </div>
                <div className='teammate'>
                    <div className='teamPhoto'><img src={Handyman} alt="Handyman" /></div>
                    <h2>Mario Puccio</h2>
                    <h6>Handyman</h6>
                </div>
            </div>
        </section>
    );
}

export default TeamPage;