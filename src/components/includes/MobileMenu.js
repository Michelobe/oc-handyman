import React, { useState } from 'react';
import { Link } from "react-router-dom";

const MobileMenu = () => {
    var [isActive,setActive] = useState(false);
    var [isOpen,setIsOpen] = useState('');

    function clickActive() {
        setActive(!isActive);
    }
    function menuAction() {
        if(isOpen === 'open'){
            setIsOpen('');
        }
        else{
            setIsOpen('open');
        }
    }
    function doubleFunction() {
        clickActive();
        menuAction();
    }

    return (
        <section className={`mobileMenu ${isOpen === 'open' ? 'fixed' : ''}`}>
            <div className="menuBtn" onClick={clickActive}>
                <div id={`nav-icon4`} className={`${isOpen === 'open' ? 'open' : ''}`} onClick={menuAction}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            
            <div className={`halfMenu rightMenu ${isActive ? 'active' : ''}`}>
                {/* PLACEHOLDERS FOR COLORING THE TOP OF THE RIGHT SIDE MENU */}
                <div className="menuPhone"></div>
                <div className="menuLogo"></div>
            </div>
            <div className={`halfMenu leftMenu ${isActive ? 'active' : ''}`}>
                <div className="menuPhone"><span style={{color: '#D90D43', paddingRight: '.4rem',fontWeight: 'bold'}}>OC</span> Local Handyman</div>
                <div className="menuLogo">(714)906-6237</div>
                <Link className="menuLink" to="/about" relative="path">
                    <p onClick={doubleFunction}>About</p>
                </Link>
                <Link className="menuLink" to="/services" relative="path">
                    <p onClick={doubleFunction}>Services</p>
                </Link>
                <Link className="menuLink" to="/projects" relative="path">
                    <p onClick={doubleFunction}>Projects</p>
                </Link>
                <Link className="menuLink" to="/team" relative="path">
                    <p onClick={doubleFunction}>Team</p>
                </Link>
                <Link className="menuLink" to="/" relative="path">
                    <p onClick={doubleFunction}>Contact</p>
                </Link>
            </div>
        </section>
    )
};

export default MobileMenu;