import React from 'react';
import yelp from '../../images/yelp-review-image.png';

const Footer = () => {
    return (
        <footer className='footerSection'>
            <div className='footerCta'>
                <img src={yelp} alt="Yelp Review" />
            </div>
            <div className='container'>
                <div className='footerContent'>
                    <div className='footerCol'>
                        <h2 className='footerHeader'>OC Handyman</h2>
                        <p className='footerCaption'>We have the quality work you expect.</p>
                        
                        <h2 className='footerHeader'>Work Days</h2>
                        <div className='workHours'>
                            <div className='workday'>
                                <p>Mon - Sat</p>
                                <p>9am - 5pm</p>
                            </div>
                            <div className='workday'>
                                <p>Sunday</p>
                                <p className='closingTime'>Closed</p>
                            </div>
                        </div>
                    </div>
                    <div className='footerCol'>
                        <h2 className='footerHeader'>Useful Links</h2>
                        <div className='columnLinks'>
                            <ul className='columnContent'>
                                <li>About</li>
                                <li>FAQ</li>
                                <li>Contact Us</li>
                                <li>Locations</li>
                            </ul>
                            <ul className='columnContent'>
                                <li>Services</li>
                                <li>Gallery</li>
                                <li>Reviews</li>
                            </ul>
                        </div>
                    </div>
                    <div className='footerCol'>
                        <h2 className='footerHeader'>Contact Us</h2>
                        <p className='columnContent'>contact Info</p>
                    </div>
                </div>
                <div className='footerCopyright'>
                    <p>Copyright &copy; 2022 Michael De La Riva</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;