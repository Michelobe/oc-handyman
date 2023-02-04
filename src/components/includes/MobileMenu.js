import React, { useState } from 'react';

const MobileMenu = () => {
    var [isActive,setActive] = useState(false);

    function clickActive() {
        setActive(!isActive);
    }

    return (
        <section className='mobileMenu'>
            <div className="menuBtn" onClick={clickActive}>
                <i className="fas fa-bars"></i>
            </div>
            <div className={`halfMenu leftMenu ${isActive ? 'active' : ''}`}>
                <p onClick={clickActive}>Contact</p>
                <p onClick={clickActive}>About</p>
            </div>
            <div className={`halfMenu rightMenu ${isActive ? 'active' : ''}`}>
                <p onClick={clickActive}>Projects</p>
                <p onClick={clickActive}>Team</p>
                <div className="exitBtn" onClick={clickActive}>
                    <i className="far fa-times-circle"></i>
                </div>
            </div>
        </section>
    )
};

export default MobileMenu;