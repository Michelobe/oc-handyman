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
                            <button>All</button>
                        </li>
                        <li>
                            <button>Electrical</button>
                        </li>
                        <li>
                            <button>Cabinetry</button>
                        </li>
                        <li>
                            <button>Painting</button>
                        </li>
                        <li>
                            <button>Plumbing</button>
                        </li>
                        <li>
                            <button>Flooring</button>
                        </li>
                        <li>
                            <button>Maintenance</button>
                        </li>
                    </ul>
                </nav>
                <div className='projectTiles'>
                    <div className='projectTile'>
                        <div className='tilePhoto'></div>
                        <div className='tileHoverPopup'>
                            <div className='tileContent'>
                                <h6>Painting, Plumbing</h6>
                                <h2>Electrical, Orange - CA</h2>
                            </div>
                        </div>
                    </div>
                    <div className='projectTile'>
                        <div className='tilePhoto'></div>
                        <div className='tileHoverPopup'>
                            <div className='tileContent'>
                                <h6>Painting, Plumbing</h6>
                                <h2>Electrical, Orange - CA</h2>
                            </div>
                        </div>
                    </div>
                    <div className='projectTile'>
                        <div className='tilePhoto'></div>
                        <div className='tileHoverPopup'>
                            <div className='tileContent'>
                                <h6>Painting, Plumbing</h6>
                                <h2>Electrical, Orange - CA</h2>
                            </div>
                        </div>
                    </div>
                    <div className='projectTile'>
                        <div className='tilePhoto'></div>
                        <div className='tileHoverPopup'>
                            <div className='tileContent'>
                                <h6>Painting, Plumbing</h6>
                                <h2>Electrical, Orange - CA</h2>
                            </div>
                        </div>
                    </div>
                    <div className='projectTile'>
                        <div className='tilePhoto'></div>
                        <div className='tileHoverPopup'>
                            <div className='tileContent'>
                                <h6>Painting, Plumbing</h6>
                                <h2>Electrical, Orange - CA</h2>
                            </div>
                        </div>
                    </div>
                    <div className='projectTile'>
                        <div className='tilePhoto'></div>
                        <div className='tileHoverPopup'>
                            <div className='tileContent'>
                                <h6>Painting, Plumbing</h6>
                                <h2>Electrical, Orange - CA</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;