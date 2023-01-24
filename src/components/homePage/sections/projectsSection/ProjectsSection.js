import React, { useState } from 'react';
import projectsData from './projectsInfo.js';


const ProjectsSection = () => {
    const projectInformation = useState(projectsData);
    const projectArray = projectInformation[0];
    console.log(projectArray);


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
                            <option className='dropOption' value="All" type='button' data-btn='1'>All</option>
                            <option className='dropOption' value="Electrical" type='button' data-btn='2'>Electrical</option>
                            <option className='dropOption' value="Cabinetry" type='button' data-btn='3'>Cabinetry</option>
                            <option className='dropOption' value="Painting" type='button' data-btn='4'>Painting</option>
                            <option className='dropOption' value="Plumbing" type='button' data-btn='5'>Plumbing</option>
                            <option className='dropOption' value="Flooring" type='button' data-btn='6'>Flooring</option>
                            <option className='dropOption' value="Maintenance" type='button' data-btn='7'>Maintenance</option>
                        </select>
                    </nav>
                    <div className='projectsNavBtns'>
                        <ul className='navBtns'>
                            <li>
                                <button className='projectButton' type='button' data-btn='1'>All</button>
                            </li>
                            <li>
                                <button className='projectButton' type='button' data-btn='2'>Electrical</button>
                            </li>
                            <li>
                                <button className='projectButton' type='button' data-btn='3'>Cabinetry</button>
                            </li>
                            <li>
                                <button className='projectButton' type='button' data-btn='4'>Painting</button>
                            </li>
                            <li>
                                <button className='projectButton' type='button' data-btn='5'>Plumbing</button>
                            </li>
                            <li>
                                <button className='projectButton' type='button' data-btn='6'>Flooring</button>
                            </li>
                            <li>
                                <button className='projectButton' type='button' data-btn='7'>Maintenance</button>
                            </li>
                        </ul>
                    </div>
                </nav>


                <div className='projectTiles'>
                    <div className='projectTile'>
                        <div className='tilePhoto'>
                            <img src={projectArray[0].img} alt={projectArray[0].alt} />
                        </div>
                        <div className='tileHover'>
                            <div className="tileHoverPopup">
                                <div className="tileShade"></div>
                                <div className='tileContent'>
                                    <h6>{projectArray[0].header}</h6>
                                    <h2>{projectArray[0].location}</h2>
                                    <div className='tileBottomBorder'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='projectTile'>
                        <div className='tilePhoto'>
                            <img src={projectInformation[0][1].img} alt={projectInformation[0][1].alt} />
                        </div>
                        <div className='tileHover'>
                            <div className="tileHoverPopup">
                                <div className="tileShade"></div>
                                <div className='tileContent'>
                                    <h6>{projectInformation[0][1].header}</h6>
                                    <h2>{projectInformation[0][1].location}</h2>
                                    <div className='tileBottomBorder'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='projectTile'>
                        <div className='tilePhoto'>
                            <img src={projectInformation[0][2].img} alt={projectInformation[0][2].alt} />
                        </div>
                        <div className='tileHover'>
                            <div className="tileHoverPopup">
                                <div className="tileShade"></div>
                                <div className='tileContent'>
                                    <h6>{projectInformation[0][2].header}</h6>
                                    <h2>{projectInformation[0][2].location}</h2>
                                    <div className='tileBottomBorder'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='projectTile'>
                        <div className='tilePhoto'>
                            <img src={projectInformation[0][3].img} alt={projectInformation[0][3].alt} />
                        </div>
                        <div className='tileHover'>
                            <div className="tileHoverPopup">
                                <div className="tileShade"></div>
                                <div className='tileContent'>
                                    <h6>{projectInformation[0][3].header}</h6>
                                    <h2>{projectInformation[0][3].location}</h2>
                                    <div className='tileBottomBorder'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='projectTile'>
                        <div className='tilePhoto'>
                            <img src={projectInformation[0][4].img} alt={projectInformation[0][4].alt} />
                        </div>
                        <div className='tileHover'>
                            <div className="tileHoverPopup">
                                <div className="tileShade"></div>
                                <div className='tileContent'>
                                    <h6>{projectInformation[0][4].header}</h6>
                                    <h2>{projectInformation[0][4].location}</h2>
                                    <div className='tileBottomBorder'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='projectTile'>
                        <div className='tilePhoto'>
                            <img src={projectInformation[0][5].img} alt={projectInformation[0][5].alt} />
                        </div>
                        <div className='tileHover'>
                            <div className="tileHoverPopup">
                                <div className="tileShade"></div>
                                <div className='tileContent'>
                                    <h6>{projectInformation[0][5].header}</h6>
                                    <h2>{projectInformation[0][5].location}</h2>
                                    <div className='tileBottomBorder'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default ProjectsSection;