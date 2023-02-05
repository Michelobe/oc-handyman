import React from 'react';
import Kitchen from '../../../images/special-kitchen.jpg';

const SpecialServices = () => {
  return (
    <section className="specialServicesSection">
        <div className='container'>
            <div className='leftColumn'>
                <div className='headerDiv'>
                    <h4>OC Local Handyman</h4>
                    <h2>Get Started</h2>
                </div>
                <div className='headerInfo'>
                    <p className='columnContent'>
                        Carpentry is a skilled trade and a craft in which the primary work performed is the cutting.
                    </p>
                </div>
                <div className='quickInfo'>
                    <div className='quickInfoCard'>
                        <div className='infoIconContainer'>
                            <i className="fas fa-user-friends"></i>
                        </div>
                        <div className='infoCardContent'>
                            <h5>Get To Know Us</h5>
                            <p className='columnContent'>
                                Get to know more about OC Local Handyman by meeting our team or checking out our <a href="https://www.yelp.com/biz/ie-1-handyman-lake-elsinore" style={{textDecoration: 'none', color: '#D90D43', fontSize: '1.1rem'}}>Yelp<i className="fab fa-yelp" style={{paddingLeft: '2px'}}></i></a>.
                            </p>
                        </div>
                    </div>
                    <div className='quickInfoCard'>
                        <div className='infoIconContainer'>
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                        <div className='infoCardContent'>
                            <h5>Call</h5>
                            <p className='columnContent'>
                                Call our direct line to set up an appointment or ask questions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='imgContainer'>
            <img src={Kitchen} alt='Interior Home Kitchen' />
        </div>
    </section>
  );
};

export default SpecialServices;