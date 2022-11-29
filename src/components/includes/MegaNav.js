import React from 'react';

const MegaNav = () => {
    return (
        <section className='headerSection'>
            <div className='upperHeader'>
                <div className='upperHeaderBackground'>
                    <div className='orangeDiv'></div>
                    <div className='darkDiv'></div>
                </div>
                <div className='container upperHeaderText'>
                    <div className='phoneText'>
                        <i className="fas fa-mobile"></i><p className="noMobile">(123)456-7890</p>
                    </div>
                    <div className='emailSocialText'>
                        <p className='emailInfo'>Email: info@example.com</p>
                        <ul className='socialFlexContainer noMobile'>
                            <li className='socialIcon'>FB</li>
                            <li className='socialIcon'>TW</li>
                            <li className='socialIcon'>IG</li>
                            <li className='socialIcon'>YP</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default MegaNav;