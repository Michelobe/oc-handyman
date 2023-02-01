import React from 'react';

const JumboTron = () => {
    return (
        <section className='jumboTron'>
            <div className='coverContainer'>
                <div className='darkCover'></div>
                <div className='lightCover'></div>
            </div>
            <div className='container jumboText'>
                <h3>Welcome to</h3>
                <h1>
                    <span style={{textDecoration: 'underline', color:'orange'}}>OC</span> <span style={{color: '#015351'}}>Handyman</span>
                </h1>
                <p>Professional Commercial and Domestic Service Provider</p>
                <button className='ctaBtn'>CALL</button>
            </div>
        </section>
    )
};

export default JumboTron;