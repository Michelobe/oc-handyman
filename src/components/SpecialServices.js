import React from 'react';

const SpecialServices = () => {
  return (
    <section className="specialServicesSection">
        <div className='container'>
            <div className='leftColumn'>
                <div className='headerDiv'>
                    <h4>About OCHandyman</h4>
                    <h2>We Work For You</h2>
                </div>
                <div className='infoDiv'>
                    <p>
                        Carpentry is a skilled trade and a craft in which the primary work performed is the cutting.
                    </p>
                </div>
                <div className='quickInfo'>
                    <div className='quickInfoCard'>
                        <i className="fas fa-magic"></i>
                        <div className='infoCardContent'>
                            <h5>Home Maintenance</h5>
                            <p className='quickInfoP'>
                                Carpentry is a skilled trade and a craft in which the primary work performed is the cutting.
                            </p>
                        </div>
                    </div>
                    <div className='quickInfoCard'>
                        <i className="fas fa-magic"></i>
                        <div className='infoCardContent'>
                            <h5>Home Maintenance</h5>
                            <p className='quickInfoP'>
                                Carpentry is a skilled trade and a craft in which the primary work performed is the cutting.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='imgContainer'>
            <img src='../images/special-kitchen.jpg' width="5rem" height="5rem" alt='Interior Home Kitchen' />
        </div>
    </section>
  );
};

export default SpecialServices;