import React from 'react';

const SpecialServices = () => {
  return (
    <div>
        <div className='rightColumn'>
                    <div className='headerDiv'>
                        <h6>About OCHandyman</h6>
                        <h1>We Work For You</h1>
                    </div>
                    <div className='infoDiv'>
                        <p>
                            Carpentry is a skilled trade and a craft in which the primary work performed is the cutting, shaping and installation of building materials during the construction of buildings, ships, timber bridges, concrete formwork, etc.
                        </p>
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
                    </div>
                </div>
    </div>
  );
};

export default SpecialServices;