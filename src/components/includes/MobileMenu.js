import React, { useState } from 'react';

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

    return (
        <section className='mobileMenu'>
            <div className="menuBtn" onClick={clickActive}>
                <div id={`nav-icon4`} class={`${isOpen === 'open' ? 'open' : ''}`} onClick={menuAction}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
                        
            <div className={`halfMenu leftMenu ${isActive ? 'active' : ''}`}>
                <p onClick={clickActive}>Contact</p>
                <p onClick={clickActive}>About</p>
            </div>
            <div className={`halfMenu rightMenu ${isActive ? 'active' : ''}`}>
                <p onClick={clickActive}>Projects</p>
                <p onClick={clickActive}>Team</p>
            </div>
        </section>
    )
};

export default MobileMenu;