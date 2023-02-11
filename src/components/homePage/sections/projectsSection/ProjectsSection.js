import React, { useState } from 'react';
import projectsData from './projectsInfo.js';


const ProjectsSection = () => {
    const projectInformation = useState(projectsData);
    var projectArray = projectInformation[0];
    console.log(projectArray);

    // SET STATE FOR BUTTONS
    var [electrical, setElectrical] = useState(true);
    console.log(electrical);  //ONLY TO REMOVE WARNING
    var [cabinetry, setCabinetry] = useState(true);
    console.log(cabinetry);  //ONLY TO REMOVE WARNING
    var [painting, setPainting] = useState(true);
    console.log(painting);  //ONLY TO REMOVE WARNING
    var [plumbing, setPlumbing] = useState(true);
    console.log(plumbing);  //ONLY TO REMOVE WARNING
    var [flooring, setFlooring] = useState(true);
    console.log(flooring);  //ONLY TO REMOVE WARNING
    var [maintenance, setMaintenance] = useState(true);
    console.log(maintenance);  //ONLY TO REMOVE WARNING
    var [emptyProject, setEmptyProject] = useState(false);
    console.log(emptyProject);  //ONLY TO REMOVE WARNING


    function displayProjects(){
        return (projectArray.map((project, key) => {
            return(
                <div className={`projectTile ${project.toggleActive ? '' : 'nonActive'}`} key={key}>
                    <div className='tilePhoto'>
                        <img src={project.img} alt={project.alt} />
                    </div>
                    <div className={`tileHover ${project.type==='emptyProject' ? 'underConst' : ''}`}>
                        <div className="tileHoverPopup">
                            <div className="tileShade"></div>
                            <div className='tileContent'>
                                <h6>{project.header}</h6>
                                <h2>{project.location}</h2>
                                <div className='tileBottomBorder'></div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }));
    }


    var toggleAll = () => {
        setElectrical(true);
        setCabinetry(true);
        setPainting(true);
        setPlumbing(true);
        setFlooring(true);
        setMaintenance(true);
        setEmptyProject(false);

        for(var i=0;i < projectArray.length-1;i++){
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
            if(projectArray[i].type==='painting' || projectArray[i].type==='emptyProject'){
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
        setEmptyProject(true);

        console.log(projectArray);
        for(var i=0;i < projectArray.length;i++){
            if(projectArray[i].type==='maintenance' || projectArray[i].type==='emptyProject'){
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
                        <h6>OC Local Handyman's Latest</h6>
                        <h2>Recently Completed</h2>
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
                    {displayProjects()}
                </div>


            </div>
        </section>
    );
};

export default ProjectsSection;