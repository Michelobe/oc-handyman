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
                        <p className="noMobile">(714)906-6237</p>
                    </div>
                    <div className='emailSocialText'>
                        <a href="https://www.yelp.com/biz/oc-local-handyman-huntington-beach?utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)" target="_blank" rel="noopener noreferrer">
                            <div className='socialIcon'><i className="fab fa-yelp"></i></div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default MegaNav;