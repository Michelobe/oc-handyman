
import React from 'react';

const CardSection = () => {
  return (
      <section className='cardSection'>
          <div className='container cardContainer'>
              <div className='card'>
                  <div className='iconContainer'>
                    <i className="fas fa-cog"></i>
                  </div>
                  <h1>Large Number of Services Provided</h1>
                  <p>We are a company providing all kinds of services throughout OC.</p>
                  <button>More Services</button>
              </div>
              <div className='card'>
                  <div className='iconContainer'>
                    <i className="fas fa-cog"></i>
                  </div>
                  <h1>Large Number of Services Provided</h1>
                  <p>We are a company providing all kinds of services throughout OC.</p>
                  <button>More Services</button>
              </div>
              <div className='card'>
                  <div className='iconContainer'>
                    <i className="fas fa-cog"></i>
                  </div>
                  <h1>Large Number of Services Provided</h1>
                  <p>We are a company providing all kinds of services throughout OC.</p>
                  <button>More Services</button>
              </div>
          </div>
      </section>
  )
};

export default CardSection;