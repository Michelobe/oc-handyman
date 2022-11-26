import React from 'react';

const Footer = () => {
    return (
        <section className='footerSection'>
            <div className='container'>
                <div className='footerCta'>
                    <h1>Check out the yelp page</h1>
                </div>
                <div className='footerContent'>
                    <div className='footerCol'>
                        <h2 className='footerHeader'>OC Handyman</h2>
                        <p className='columnContent'>We have the quality work you expect.</p>
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
            </div>
        </section>
    );
};

export default Footer;