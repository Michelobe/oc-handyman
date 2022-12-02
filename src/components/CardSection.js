
import React from 'react';

const CardSection = () => {
  return (
      <section className='cardSection'>
          <div className='container cardContainer'>
              <div className='card'>
                  <div className='iconContainer'>
                    <i className="fas fa-user-tie"></i>
                  </div>
                  <h1>10+ Years Professional Experience</h1>
                  <p>Extensive experience allows us to get the job done right.</p>
                  <button>More Services</button>
              </div>
              <div className='card'>
                  <div className='iconContainer'>
                    <i className="fas fa-cog"></i>
                  </div>
                  <h1>Multiple Services Available For Every Need</h1>
                  <p>Our team has the knowledge & skills for tasks you need.</p>
                  <button>More Services</button>
              </div>
              <div className='card'>
                  <div className='iconContainer'>
                    <i className="fas fa-thumbs-up"></i>
                  </div>
                  <h1>Trust Customers Can Always Depend Upon</h1>
                  <p>Providing happy customers throughout Orange County.</p>
                  <button>More Services</button>
              </div>
          </div>
      </section>
  )
};

export default CardSection;