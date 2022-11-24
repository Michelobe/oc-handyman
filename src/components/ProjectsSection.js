import React from 'react';

const ProjectsSection = () => {


    
    return(
        <section className='projectsSection'>
            <div className='container'>
                <nav className='projectsNav'>
                    <header className='projectsHeader'>
                        <h6>Recently Completed</h6>
                        <h2>OCHandyman's Latest</h2>
                    </header>
                    <ul class='projectsNavBtns'>
                        <li>
                            <button className='projectButton'>All</button>
                        </li>
                        <li>
                            <button className='projectButton'>Electrical</button>
                        </li>
                        <li>
                            <button className='projectButton'>Cabinetry</button>
                        </li>
                        <li>
                            <button className='projectButton'>Painting</button>
                        </li>
                        <li>
                            <button className='projectButton'>Plumbing</button>
                        </li>
                        <li>
                            <button className='projectButton'>Flooring</button>
                        </li>
                        <li>
                            <button className='projectButton'>Maintenance</button>
                        </li>
                    </ul>
                </nav>
                <div className='projectTiles'>
                    <div className='projectTile'>
                        <div className='tilePhoto'></div>
                        <div className='tileHoverPopup'>
                            <div className='tileContent'>
                                <h6>Painting, Plumbing</h6>
                                <h2>Electrical - Orange, CA</h2>
                                <div className='tileBottomBorder'></div>
                            </div>
                        </div>
                    </div>
                    <div className='projectTile'>
                        <div className='tilePhoto'></div>
                        <div className='tileHoverPopup'>
                            <div className='tileContent'>
                                <h6>Painting, Plumbing</h6>
                                <h2>Electrical - Orange, CA</h2>
                                <div className='tileBottomBorder'></div>
                            </div>
                        </div>
                    </div>
                    <div className='projectTile'>
                        <div className='tilePhoto'></div>
                        <div className='tileHoverPopup'>
                            <div className='tileContent'>
                                <h6>Painting, Plumbing</h6>
                                <h2>Electrical - Orange, CA</h2>
                                <div className='tileBottomBorder'></div>
                            </div>
                        </div>
                    </div>
                    <div className='projectTile'>
                        <div className='tilePhoto'></div>
                        <div className='tileHoverPopup'>
                            <div className='tileContent'>
                                <h6>Painting, Plumbing</h6>
                                <h2>Electrical - Orange, CA</h2>
                                <div className='tileBottomBorder'></div>
                            </div>
                        </div>
                    </div>
                    <div className='projectTile'>
                        <div className='tilePhoto'></div>
                        <div className='tileHoverPopup'>
                            <div className='tileContent'>
                                <h6>Painting, Plumbing</h6>
                                <h2>Electrical - Orange, CA</h2>
                                <div className='tileBottomBorder'></div>
                            </div>
                        </div>
                    </div>
                    <div className='projectTile'>
                        <div className='tilePhoto'></div>
                        <div className='tileHoverPopup'>
                            <div className='tileContent'>
                                <h6>Painting, Plumbing</h6>
                                <h2>Electrical - Orange, CA</h2>
                                <div className='tileBottomBorder'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;