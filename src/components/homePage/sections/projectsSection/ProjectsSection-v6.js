import React, { useState } from 'react';
import projectsData from './projectsInfo.js';


const ProjectsSection = () => {
    const projectInformation = useState(projectsData);
    var projectArray = projectInformation[0];
    console.log(projectArray);

    var [projectObj,setProjectObj] = useState(projectArray);



    function displayProjects(){
        return (projectArray.map((project) => {
            return(
                <div className={`projectTile`} key={project.id}>
                    <div className='tilePhoto'>
                        <img src={project.img} alt={project.alt} />
                    </div>
                    <div className='tileHover'>
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


    var electricalOption = (id) => {
        // 1. Find the todo with the provided id
        const currentProjectIndex = projectObj.findIndex((project) => project.id === id);
        // 2. Mark the todo as complete
        const updatedProjectIndex = Object.assign({}, projectObj[currentProjectIndex]);
        updatedProjectIndex.toggleActive = true;
        // 3. Update the todo list with the updated todo
        const newProjects = projectObj.slice();
        newProjects[currentProjectIndex] = updatedProjectIndex;
        setProjectObj(newProjects);
        console.log(projectObj);
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
                            <li className='dropOption' value="All" type='button'>All</li>
                            <li className='dropOption' value="Electrical" type='button'>Electrical</li>
                            <li className='dropOption' value="Cabinetry" type='button'>Cabinetry</li>
                            <li className='dropOption' value="Painting" type='button'>Painting</li>
                            <li className='dropOption' value="Plumbing" type='button'>Plumbing</li>
                            <li className='dropOption' value="Flooring" type='button'>Flooring</li>
                            <li className='dropOption' value="Maintenance" type='button'>Maintenance</li>
                        </ul>
                    </nav>
                    <div className='projectsNavBtns'>
                        <ul className='navBtns'>
                            <li>
                                <button className='projectButton' type='button'>All</button>
                            </li>
                            <li>
                                <button className='projectButton' type='button'onClick={() => electricalOption(2)}>Electrical</button>
                            </li>
                            <li>
                                <button className='projectButton' type='button'>Cabinetry</button>
                            </li>
                            <li>
                                <button className='projectButton' type='button'>Painting</button>
                            </li>
                            <li>
                                <button className='projectButton' type='button'>Plumbing</button>
                            </li>
                            <li>
                                <button className='projectButton' type='button'>Flooring</button>
                            </li>
                            <li>
                                <button className='projectButton' type='button'>Maintenance</button>
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