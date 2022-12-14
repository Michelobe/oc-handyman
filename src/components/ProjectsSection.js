import React from 'react';
import elecWire from '../images/electric-wires.jpg';


const ProjectsSection = () => {



    return (
        <section className='projectsSection'>
            <div className='container'>
                <nav className='projectsNav'>
                    <header className='projectsHeader'>
                        <h6>Recently Completed</h6>
                        <h2>OCHandyman's Latest</h2>
                    </header>
                    <nav className='mobileNav'>
                        <select className='navDrop' name="job" id="job">
                            <option className='dropOption' value="All">All</option>
                            <option className='dropOption' value="Electrical">Electrical</option>
                            <option className='dropOption' value="Cabinetry">Cabinetry</option>
                            <option className='dropOption' value="Painting">Painting</option>
                            <option className='dropOption' value="Plumbing">Plumbing</option>
                            <option className='dropOption' value="Flooring">Flooring</option>
                            <option className='dropOption' value="Maintenance">Maintenance</option>
                        </select>
                    </nav>
                    <div className='projectsNavBtns'>
                        <ul className='navBtns'>
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
                    </div>
                </nav>


                <div className='projectTiles'>
                    <div className='projectTile'>
                        <div className='tilePhoto'>
                            <img src={elecWire} alt="Electrical Wires" />
                        </div>
                        <div className='tileHoverPopup'>
                            <div className='tileContent'>
                                <h6>Painting, Plumbing</h6>
                                <h2>Electrical - Orange, CA</h2>
                                <div className='tileBottomBorder'></div>
                            </div>
                        </div>
                    </div>
                    <div className='projectTile'>
                        <div className='tilePhoto'>
                            <img src={elecWire} alt="Electrical Wires" />
                        </div>
                        <div className='tileHoverPopup'>
                            <div className='tileContent'>
                                <h6>Painting, Plumbing</h6>
                                <h2>Electrical - Orange, CA</h2>
                                <div className='tileBottomBorder'></div>
                            </div>
                        </div>
                    </div>
                    <div className='projectTile'>
                        <div className='tilePhoto'>
                            <img src={elecWire} alt="Electrical Wires" />
                        </div>
                        <div className='tileHoverPopup'>
                            <div className='tileContent'>
                                <h6>Painting, Plumbing</h6>
                                <h2>Electrical - Orange, CA</h2>
                                <div className='tileBottomBorder'></div>
                            </div>
                        </div>
                    </div>
                    <div className='projectTile'>
                        <div className='tilePhoto'>
                            <img src={elecWire} alt="Electrical Wires" />
                        </div>
                        <div className='tileHoverPopup'>
                            <div className='tileContent'>
                                <h6>Painting, Plumbing</h6>
                                <h2>Electrical - Orange, CA</h2>
                                <div className='tileBottomBorder'></div>
                            </div>
                        </div>
                    </div>
                    <div className='projectTile'>
                        <div className='tilePhoto'>
                            <img src={elecWire} alt="Electrical Wires" />
                        </div>
                        <div className='tileHoverPopup'>
                            <div className='tileContent'>
                                <h6>Painting, Plumbing</h6>
                                <h2>Electrical - Orange, CA</h2>
                                <div className='tileBottomBorder'></div>
                            </div>
                        </div>
                    </div>
                    <div className='projectTile'>
                        <div className='tilePhoto'>
                            <img src={elecWire} alt="Electrical Wires" />
                        </div>
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