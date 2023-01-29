import React, { useState } from 'react';
import projectsData from './projectsInfo.js';


const ProjectsSection = () => {
    const projectInformation = useState(projectsData);
    var projectArray = projectInformation[0];

    // SET STATE FOR BUTTONS
    var [electrical, setElectrical] = useState(true);
    var [cabinetry, setCabinetry] = useState(true);
    var [painting, setPainting] = useState(true);
    var [plumbing, setPlumbing] = useState(true);
    var [flooring, setFlooring] = useState(true);
    var [maintenance, setMaintenance] = useState(true);
    console.log(electrical,cabinetry,painting,plumbing,flooring,maintenance);



    var toggleAll = () => {
        setElectrical(true);
        setCabinetry(true);
        setPainting(true);
        setPlumbing(true);
        setFlooring(true);
        setMaintenance(true);

        for(var i=0;i < projectArray.length;i++){
            projectArray[i].toggleActive=true;
        }
    };
    
    var electricalOption = () => {
        setElectrical(true);
        setCabinetry(false);
        setPainting(false);
        setPlumbing(false);
        setFlooring(false);
        setMaintenance(false);

        console.log(projectArray);
        for(var i=0;i < projectArray.length;i++){
            if(projectArray[i].type==='electrical'){
                projectArray[i].toggleActive=true;
            }
            else{
                projectArray[i].toggleActive=false;
            }
        }
    };

    var cabinetryOption = () => {
        setElectrical(false);
        setCabinetry(true);
        setPainting(false);
        setPlumbing(false);
        setFlooring(false);
        setMaintenance(false);

        console.log(projectArray);
        for(var i=0;i < projectArray.length;i++){
            if(projectArray[i].type==='cabinetry'){
                projectArray[i].toggleActive=true;
            }
            else{
                projectArray[i].toggleActive=false;
            }
        }
    };
    var paintingOption = () => {
        setElectrical(false);
        setCabinetry(false);
        setPainting(true);
        setPlumbing(false);
        setFlooring(false);
        setMaintenance(false);

        console.log(projectArray);
        for(var i=0;i < projectArray.length;i++){
            if(projectArray[i].type==='painting'){
                projectArray[i].toggleActive=true;
            }
            else{
                projectArray[i].toggleActive=false;
            }
        }
    };
    var plumbingOption = () => {
        setElectrical(false);
        setCabinetry(false);
        setPainting(false);
        setPlumbing(true);
        setFlooring(false);
        setMaintenance(false);

        console.log(projectArray);
        for(var i=0;i < projectArray.length;i++){
            if(projectArray[i].type==='plumbing'){
                projectArray[i].toggleActive=true;
            }
            else{
                projectArray[i].toggleActive=false;
            }
        }
    };
    var flooringOption = () => {
        setElectrical(false);
        setCabinetry(false);
        setPainting(false);
        setPlumbing(false);
        setFlooring(true);
        setMaintenance(false);

        console.log(projectArray);
        for(var i=0;i < projectArray.length;i++){
            if(projectArray[i].type==='flooring'){
                projectArray[i].toggleActive=true;
            }
            else{
                projectArray[i].toggleActive=false;
            }
        }
    };
    var maintenanceOption = () => {
        setElectrical(false);
        setCabinetry(false);
        setPainting(false);
        setPlumbing(false);
        setFlooring(false);
        setMaintenance(true);

        console.log(projectArray);
        for(var i=0;i < projectArray.length;i++){
            if(projectArray[i].type==='maintenance'){
                projectArray[i].toggleActive=true;
            }
            else{
                projectArray[i].toggleActive=false;
            }
        }
    };

    return (
        <section className='projectsSection'>
            <div className='container'>
                <nav className='projectsNav'>
                    <header className='projectsHeader'>
                        <h6>Recently Completed</h6>
                        <h2>OCHandyman's Latest</h2>
                    </header>
                    <nav className='mobileNav'>
                        <ul className='navDrop' name="job" id="job">
                            <li className='dropOption' value="All" type='button'>Select</li>
                            <li className='dropOption' value="All" type='button' onClick={toggleAll}>All</li>
                            <li className='dropOption' value="Electrical" type='button' onClick={electricalOption}>Electrical</li>
                            <li className='dropOption' value="Cabinetry" type='button' onClick={cabinetryOption}>Cabinetry</li>
                            <li className='dropOption' value="Painting" type='button' onClick={paintingOption}>Painting</li>
                            <li className='dropOption' value="Plumbing" type='button' onClick={plumbingOption}>Plumbing</li>
                            <li className='dropOption' value="Flooring" type='button' onClick={flooringOption}>Flooring</li>
                            <li className='dropOption' value="Maintenance" type='button' onClick={maintenanceOption}>Maintenance</li>
                        </ul>
                    </nav>
                    <div className='projectsNavBtns'>
                        <ul className='navBtns'>
                            <li>
                                <button className='projectButton' type='button' onClick={toggleAll}>All</button>
                            </li>
                            <li>
                                <button className='projectButton' type='button' onClick={electricalOption}>Electrical</button>
                            </li>
                            <li>
                                <button className='projectButton' type='button' onClick={cabinetryOption}>Cabinetry</button>
                            </li>
                            <li>
                                <button className='projectButton' type='button' onClick={paintingOption}>Painting</button>
                            </li>
                            <li>
                                <button className='projectButton' type='button' onClick={plumbingOption}>Plumbing</button>
                            </li>
                            <li>
                                <button className='projectButton' type='button' onClick={flooringOption}>Flooring</button>
                            </li>
                            <li>
                                <button className='projectButton' type='button' onClick={maintenanceOption}>Maintenance</button>
                            </li>
                        </ul>
                    </div>
                </nav>


                <div className={`projectTiles`} >
                    <div className={`projectTile ${projectArray[0].toggleActive ? '' : 'nonActive'}`}>
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
                    <div className={`projectTile ${projectArray[1].toggleActive ? '' : 'nonActive'}`}>
                        <div className='tilePhoto'>
                            <img src={projectArray[1].img} alt={projectArray[1].alt} />
                        </div>
                        <div className='tileHover'>
                            <div className="tileHoverPopup">
                                <div className="tileShade"></div>
                                <div className='tileContent'>
                                    <h6>{projectArray[1].header}</h6>
                                    <h2>{projectArray[1].location}</h2>
                                    <div className='tileBottomBorder'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`projectTile ${projectArray[2].toggleActive ? '' : 'nonActive'}`}>
                        <div className='tilePhoto'>
                            <img src={projectArray[2].img} alt={projectArray[2].alt} />
                        </div>
                        <div className='tileHover'>
                            <div className="tileHoverPopup">
                                <div className="tileShade"></div>
                                <div className='tileContent'>
                                    <h6>{projectArray[2].header}</h6>
                                    <h2>{projectArray[2].location}</h2>
                                    <div className='tileBottomBorder'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`projectTile ${projectArray[3].toggleActive ? '' : 'nonActive'}`}>
                        <div className='tilePhoto'>
                            <img src={projectArray[3].img} alt={projectArray[3].alt} />
                        </div>
                        <div className='tileHover'>
                            <div className="tileHoverPopup">
                                <div className="tileShade"></div>
                                <div className='tileContent'>
                                    <h6>{projectArray[3].header}</h6>
                                    <h2>{projectArray[3].location}</h2>
                                    <div className='tileBottomBorder'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`projectTile ${projectArray[4].toggleActive ? '' : 'nonActive'}`}>
                        <div className='tilePhoto'>
                            <img src={projectArray[4].img} alt={projectArray[4].alt} />
                        </div>
                        <div className='tileHover'>
                            <div className="tileHoverPopup">
                                <div className="tileShade"></div>
                                <div className='tileContent'>
                                    <h6>{projectArray[4].header}</h6>
                                    <h2>{projectArray[4].location}</h2>
                                    <div className='tileBottomBorder'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`projectTile ${projectArray[5].toggleActive ? '' : 'nonActive'}`}>
                        <div className='tilePhoto'>
                            <img src={projectArray[5].img} alt={projectArray[5].alt} />
                        </div>
                        <div className='tileHover'>
                            <div className="tileHoverPopup">
                                <div className="tileShade"></div>
                                <div className='tileContent'>
                                    <h6>{projectArray[5].header}</h6>
                                    <h2>{projectArray[5].location}</h2>
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