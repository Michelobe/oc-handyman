import React from 'react';
import largePlacehold from '../../../images/wood-saw.jpg';
import smallPlacehold from '../../../images/power-drill.jpg';

const IntroSection = () => {
    return (
        <section className="introSection">
            <div className='container introSectionContainer'>
                <div className='leftColumn'>
                    <div className='lgPlaceholder'>
                        <img src={largePlacehold} alt="Man cutting wood with saw" />
                    </div>
                    <div className='smPlaceholder'>
                        <img src={smallPlacehold} alt="Man Drilling into wood with drill" />
                    </div>
                </div>
                <div className='rightColumn'>
                    <div className='headerDiv'>
                        <h6>About OCHandyman</h6>
                        <h2>We Work For You</h2>
                    </div>
                    <div className='infoDiv'>
                        <p>
                            Carpentry is a skilled trade and a craft in which the primary work performed is the cutting, shaping and installation of building materials.
                        </p>
                        <p>
                            Automotive technicians (the modern term of reference) have many trades within. Some may specialize in the electrical diagnosis, while others may specialize in the mechanical aspects. Other mechanical areas include: brakes and steering, suspension, automatic or manual transmission, engine repairs, auto body repairs or diagnosing customer complaints.
                        </p>
                        <div className='aboutBtn'>More About <i className="fas fa-angle-double-right"></i></div>
                    </div>
                    <div className='quickInfo'>
                        <div className='quickInfoCard quickInfoBorder'>
                            <i className="far fa-clock"></i>
                            <p className='quickInfoP '>On Time at Services</p>
                        </div>
                        <div className='quickInfoCard quickInfoBorder'>
                            <i className="fas fa-magic"></i>
                            <p className='quickInfoP '>24/7 Services</p>
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