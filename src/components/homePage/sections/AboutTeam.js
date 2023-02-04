import React from 'react';
import Handyman from '../../../images/handyman-placeholder.png';

const AboutTeam = () => {
    return (
        <section className='aboutTeam'>
            <div className='container'>
                <div className='sectionDownshift'>
                    <header className='aboutHeader'>
                        <div className='headerDiv'>
                            <h4>OC Local Handyman</h4>
                            <h2>Our skilled team</h2>
                        </div>
                        <div className='headerInfo'>
                            <p className='columnContent'>
                                Team members from all around the construction industry add professional experience to OC Local Handyman. 
                            </p>
                        </div>
                    </header>
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutTeam;