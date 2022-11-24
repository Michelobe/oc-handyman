import React from 'react';

const AboutTeam = () => {
    return (
        <section className='aboutTeam'>
            <div className='container'>
                <div className='sectionDownshift'>
                    <header className='aboutHeader'>
                        <div className='headerDiv'>
                            <h4>Work with the Best</h4>
                            <h2>Our skilled team</h2>
                        </div>
                        <div className='headerInfo'>
                            <p className='columnContent'>
                                Carpentry is a skilled trade and a craft in which the primary work performed is the cutting.
                            </p>
                        </div>
                    </header>
                    <div className='teamIntro'>
                        <div className='teammate'>
                            <div className='teamPhoto'></div>
                            <h2>Inigo Montoya</h2>
                            <h6>Handyman</h6>
                        </div>
                        <div className='teammate'>
                            <div className='teamPhoto'></div>
                            <h2>Inigo Montoya</h2>
                            <h6>Handyman</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutTeam;