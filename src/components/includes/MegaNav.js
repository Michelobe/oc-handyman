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
                            <li className="menuLink">About</li>
                            <li className="menuLink">Services</li>
                            <li className="menuLink">Projects</li>
                            <li className="menuLink">Team</li>
                            <li className="menuLink">Contact</li>
                        </ul>
                    </div>
                    <MobileMenu />


                </div>
            </div>
        </section>
    )
};

export default MegaNav;