import React from 'react';
import { Link } from "react-router-dom";
import MobileMenu from './MobileMenu.js';

const MegaNav = () => {
    return (
        <section className='headerSection'>
            <div className='upperMegaNav'>
                <p className="noMobile">(714)906-6237</p>
                <a href="https://www.yelp.com/biz/ie-1-handyman-lake-elsinore">
                    <div className='socialIcon'>Yelp<i className="fab fa-yelp" style={{paddingLeft: '2px'}}></i></div>
                </a>
            </div>
            <div className="lowerMegaNav">
                <div className="lowerNavContainer">
                    <Link to="/" relative="path" className="logo">
                        <p>OCLH</p>
                    </Link>
                    <div className="menuContainer">
                        <ul className="menuNav">
                            <Link to="/about" relative="path">
                                <li className="menuLink">About</li>
                            </Link>
                            <Link to="/services" relative="path">
                                <li className="menuLink">Services</li>
                            </Link>
                            <Link to="/contact" relative="path">
                                <li className="menuLink">Contact</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
            <MobileMenu />
        </section>
    )
};

export default MegaNav;