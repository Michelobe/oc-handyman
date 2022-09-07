import React from 'react';

const IntroSection = () => {
    return (
        <section className="introSection">
            <div className='container introSectionContainer'>
                <div className='leftColumn'>
                    <img src={require("../images/stock-photo-carpenter-sawing-wood.jpg")} alt="Carpenter sawing wood" className='largeImg' />
                    <img src={require("../images/kitchen-long-photo-khaki.jpg")} alt="Carpenter sawing wood" className='smallImg' />
                </div>
                <div className='rightColumn'>
                    <div className='headerDiv'>
                        <h6>About OCHandyman</h6>
                        <h2>We Work For You</h2>
                    </div>
                    <div className='infoDiv'>
                        <p>
                            Carpentry is a skilled trade and a craft in which the primary work performed is the cutting, shaping and installation of building materials during the construction of buildings, ships, timber bridges, concrete formwork, etc.
                        </p>
                        <p>
                            Automotive technicians (the modern term of reference) have many trades within. Some may specialize in the electrical diagnosis, while others may specialize in the mechanical aspects. Other mechanical areas include: brakes and steering, suspension, automatic or manual transmission, engine repairs, auto body repairs or diagnosing customer complaints.
                        </p>
                        <div className='aboutBtn'>More About <i className="fas fa-angle-double-right"></i></div>
                    </div>
                    <div className='quickInfo'>
                        <div className='quickInfoCard'>
                            <i className="far fa-clock"></i>
                            <p className='quickInfoP quickInfoBorder'>On Time at Services</p>
                        </div>
                        <div className='quickInfoCard'>
                            <i className="fas fa-magic"></i>
                            <p className='quickInfoP quickInfoBorder'>24/7 Services</p>
                        </div>
                        <div className='quickInfoCard'>
                            <i className="fas fa-medal"></i>
                            <p className='quickInfoP'>Verified Professionals</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default IntroSection;