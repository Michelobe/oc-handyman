import React from 'react';

const MegaNav = () => {
    return (
        <section className='headerSection'>
            <div className='upperMegaNav'>
                <p className="noMobile">(714)906-6237</p>
                <a href="https://www.yelp.com/biz/oc-local-handyman-huntington-beach?utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)" target="_blank" rel="noopener noreferrer">
                    <div className='socialIcon'><i className="fab fa-yelp"></i></div>
                </a>
            </div>
            <div className="container">
                <div className="lowerMegaNav">
                    <p className="logo">OC Local Handyman</p>
                    <div className="menuContainer">
                        <ul className="menuNav">
                            <li className="menuLink">About</li>
                            <li className="menuLink">Services</li>
                            <li className="menuLink">Projects</li>
                            <li className="menuLink">Team</li>
                            <li className="menuLink">Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default MegaNav;