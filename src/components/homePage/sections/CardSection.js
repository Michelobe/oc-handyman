
import React from 'react';
import { Link } from "react-router-dom";

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
                  <Link to="/experience" relative="path">
                    More Experience
                  </Link>
              </div>
              <div className='card'>
                  <div className='iconContainer'>
                    <i className="fas fa-cog"></i>
                  </div>
                  <h1>Multiple Services Available</h1>
                  <p>Our team has the knowledge & skills for tasks you need.</p>
                  <Link to="/services" relative="path">
                    More Services
                  </Link>
              </div>
              <div className='card'>
                  <div className='iconContainer'>
                    <i className="fas fa-thumbs-up"></i>
                  </div>
                  <h1>Trust Customers Can Always Depend Upon</h1>
                  <p>Providing happy customers throughout Orange County.</p>
                  <Link to="/about" relative="path">
                    More Trust
                  </Link>
              </div>
          </div>
      </section>
  )
};

export default CardSection;