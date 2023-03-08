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
                        <h4>OC Local Handyman</h4>
                        <h2>We Work For You</h2>
                    </div>
                    <div className='infoDiv'>
                        <p>
                            Handyman services provide the same professional quality in a more personal fashion, at a much more reasonable price.
                        </p>
                        <p>
                            Handymen have many trades within. Working in the construction industry exposes workers to all the trades required for a project, from planning, to fabrication, all the way to project completion.  Trades can include framing, electrical, plumbing, cabinetry, and painting, sometimes all necessary in a single project.  This is was how <strong style={{fontWeight: `bold`}}>OC Local Handyman</strong> was made.
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
                            <p className='quickInfoP '>Quality Work</p>
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