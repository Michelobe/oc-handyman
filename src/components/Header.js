import React from 'react';

const Header = () => {
    return (
        <section className='headerSection'>
            <div className='upperHeader'>
                <div className='upperHeaderBackground'>
                    <div className='orangeDiv'></div>
                    <div className='darkDiv'></div>
                </div>
                <div className='container upperHeaderText'>
                    <div className='phoneText'>
                        <p>Client Services: (123)456-7890</p>
                    </div>
                    <div className='emailSocialText'>
                        <p className='emailInfo'>Email: info@example.com</p>
                        <ul className='socialFlexContainer'>
                            <li className='socialIcon'>FB</li>
                            <li className='socialIcon'>TW</li>
                            <li className='socialIcon'>IG</li>
                            <li className='socialIcon'>YP</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className=' container lowerHeader'>
                <div className='logoContainer'>
                    <p><span style={{textDecoration: 'underline'}}>OC</span> <span style={{color: 'darkGreen'}}>Handyman</span></p>
                </div>
                <ul className='headerMenu'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>Our Team</li>
                    <li>Contact</li>
                </ul>
            </div>
        </section>
    )
};

export default Header;